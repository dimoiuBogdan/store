import * as Yup from "yup";
import { ProductStatus } from "../../../../../../../../common/types/enums";
import type { AdminProductsNewProduct } from "../../types/admin-products-new-product.types";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name cannot be longer than 100 characters"),
  description: Yup.string()
    .required("Description is required")
    .max(1000, "Description cannot be longer than 1000 characters"),
  status: Yup.string()
    .oneOf(Object.values(ProductStatus).map((status) => status.toString()))
    .required("Status is required"),
  price: Yup.number()
    .positive("Price must be positive")
    .required("Price is required"),
  stock: Yup.number()
    .integer("Stock must be an integer")
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),
  categories: Yup.array()
    .of(Yup.number())
    .min(1, "At least one category is required")
    .required("Category is required"),
});

const initialValues: AdminProductsNewProduct = {
  name: "",
  description: "",
  status: ProductStatus.PENDING,
  price: null,
  stock: null,
  categories: [],
  images: [],
};

const getFormData = (newProduct: AdminProductsNewProduct) => {
  const formData = new FormData();

  formData.append("name", newProduct.name);
  formData.append("status", newProduct.status?.toString() ?? "");
  formData.append("stock", newProduct.stock?.toString() ?? "");
  formData.append("price", newProduct.price?.toString() ?? "");
  formData.append("description", newProduct.description ?? "");

  if (Array.isArray(newProduct.categories)) {
    newProduct.categories.forEach((category, index) => {
      formData.append(`categories[${index}]`, category.toString());
    });
  }

  if (Array.isArray(newProduct.images)) {
    newProduct.images.forEach((image, index) => {
      if (image) {
        formData.append(`images[${index}]`, image);
      }
    });
  }

  return formData;
};

const AdminProductsNewProductFormHelper = {
  validationSchema,
  initialValues,
  getFormData,
};

export default AdminProductsNewProductFormHelper;
