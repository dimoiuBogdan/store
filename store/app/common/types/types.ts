import type { UserStatus } from "./enums";

export type CategoryModel = {
  categoryId: number;
  name: string;
};

export type ImageModel = {
  imageId: number;
  url: string;
};

export type UserModel = {
  userId: number;
  createdAt: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userStatus: UserStatus;
  email: string;
};

export type AddressModel = {
  addressId: number;
  city: string;
  country: string;
  county: string;
  number: string;
  postcode: string;
  street: string;
};
