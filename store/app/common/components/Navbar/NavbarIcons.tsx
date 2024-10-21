import ShoppingCartModal from "./ShoppingCartModal/ShoppingCartModal";
import UserModal from "./UserModal/UserModal";

const NavbarIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <UserModal />
      <ShoppingCartModal />
    </div>
  );
};

export default NavbarIcons;
