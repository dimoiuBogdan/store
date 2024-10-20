import { Form, Formik } from "formik";
import { useSearchParams } from "next/navigation";
import { Button } from "primereact/button";
import { type FC } from "react";
import PRInput from "../../../../../../../common/components/PrimeReact/PRInput";
import AdminProductsService from "../../../../../../../common/services/admin/admin-products.service";
import { ProductStatus } from "../../../../../../../common/types/enums";
import type { AdminProductsNewProduct } from "../types/admin-products-new-product.types";
import AdminProductsNewProductFormHelper from "./helpers/admin-products-new-product-form.helper";

const STATUS_OPTIONS = (
  Object.keys(ProductStatus) as Array<keyof typeof ProductStatus>
)
  .filter((key) => isNaN(Number(key)))
  .map((key) => ({
    label: key.toLowerCase(),
    value: ProductStatus[key],
  }));

const CATEGORY_OPTIONS = [
  { label: "Category 1", value: 1 },
  { label: "Category 2", value: 2 },
  { label: "Category 3", value: 3 },
];

type Props = {
  onHide: () => void;
};

const AdminProductsNewProductForm: FC<Props> = ({ onHide }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const { validationSchema, initialValues, getFormData } =
    AdminProductsNewProductFormHelper;
  const { addNewProduct } = AdminProductsService;

  const productId = params.get("product");

  const getInitialValues = () => {
    if (productId !== "new") {
      const product = {
        name: "Product 1",
        description: "Description 1",
        status: ProductStatus.INACTIVE,
        price: 10,
        stock: 10,
        categories: [3],
        images: [],
      };

      return product;
    }

    return initialValues;
  };

  const handleSubmit = async (
    values: AdminProductsNewProduct,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    const formData = getFormData(values);

    try {
      const res = await addNewProduct(formData);

      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={getInitialValues()}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) =>
        handleSubmit(values, setSubmitting)
      }
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form autoComplete="off">
          <div>
            <PRInput
              required
              id="name"
              onChange={(value: string) => {
                setFieldValue("name", value);
              }}
              name="name"
              label="Name"
            />
            <PRInput
              required
              id="description"
              onChange={(value: string) => {
                setFieldValue("description", value);
              }}
              name="description"
              label="Description"
              textarea
            />
            <PRInput
              required
              id="status"
              onChange={(value: ProductStatus) => {
                setFieldValue("status", value);
              }}
              name="status"
              label="Status"
              options={STATUS_OPTIONS}
            />
            <PRInput
              required
              id="price"
              onChange={(value: number) => {
                if (value == null || value === undefined) {
                  setFieldValue("price", null);
                } else {
                  setFieldValue("price", value);
                }
              }}
              name="price"
              label="Price"
              min={0}
              type="number"
            />
            <PRInput
              id="stock"
              onChange={(value: number) => {
                if (value == null || value === undefined) {
                  setFieldValue("stock", null);
                } else {
                  setFieldValue("stock", value);
                }
              }}
              name="stock"
              label="Stock"
              min={0}
              type="number"
            />
            <PRInput
              id="categories"
              required
              onChange={(value: number[]) => {
                setFieldValue("categories", value);
              }}
              name="categories"
              label="Categories"
              options={CATEGORY_OPTIONS}
              multiple
            />
            <input
              required
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={(e) => {
                const uploadedFiles = e.target.files;

                setFieldValue("images", uploadedFiles);
              }}
            />
          </div>

          <div className="flex justify-center gap-8">
            <Button
              type="submit"
              label="Submit"
              className="mt-4 bg-primary px-8 py-2 text-sm font-medium text-background transition-all hover:bg-primary/80 disabled:cursor-default disabled:opacity-50"
              disabled={isSubmitting}
            />
            <Button
              type="button"
              label="Cancel"
              className="mt-4 bg-red-400 px-8 py-2 text-sm font-medium text-background transition-all hover:bg-red-400/80 disabled:cursor-default disabled:opacity-50"
              onClick={onHide}
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AdminProductsNewProductForm;
