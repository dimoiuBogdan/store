/**
 * @fileoverview Helper functions for the AdminNavbar component.
 * This file contains utility functions to assist with navigation and title generation
 * for the admin section of the application.
 */

/**
 * Extracts and formats the page title from the given pathname.
 * 
 * @param {string} pathname - The current path of the application.
 * @returns {string} The formatted page title.
 * 
 * @example
 * getPageTitle('/admin/users') // Returns 'Users'
 * getPageTitle('/admin/users/') // Returns 'Users'
 * getPageTitle('/admin') // Returns 'Admin'
 */
const getPageTitle = (pathname: string): string => {
  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) {
    return "Admin"; // Default title if no segments
  }

  const lastSegment = pathSegments[pathSegments.length - 1];
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
};

/**
 * AdminNavbarHelper object containing utility functions for the AdminNavbar component.
 */
const AdminNavbarHelper = {
  getPageTitle,
};

export default AdminNavbarHelper;