import PRDropdown from "@/app/common/components/PrimeReact/Inputs/PRDropdown";
import PRInputNumber from "@/app/common/components/PrimeReact/Inputs/PRInputNumber";
import PRInputText from "@/app/common/components/PrimeReact/Inputs/PRInputText";
import PRInputTextarea from "@/app/common/components/PrimeReact/Inputs/PRInputTextarea";
import PRMultiselect from "@/app/common/components/PrimeReact/Inputs/PRMultiselect";
import { ProductStatus } from "@/app/common/types/enums";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { type FC } from "react";
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
  product: string | undefined;
};

const AdminProductsNewProductForm: FC<Props> = ({ onHide, product }) => {
  const { validationSchema, initialValues, getFormData } =
    AdminProductsNewProductFormHelper;

  const getInitialValues = (): AdminProductsNewProduct => {
    if (product !== "new") {
      const product: AdminProductsNewProduct = {
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
  ): Promise<void> => {
    const formData = getFormData(values);

    try {
      // const res = await addNewProduct(formData);

      console.log(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting);
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-2">
        <div>
          <PRInputText
            id="name"
            label="Name"
            name="name"
            value={formik.values.name}
            error={formik.touched.name && !!formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
          />
          <p className="text-xs text-red-400">
            {formik.touched.name && formik.errors.name}
          </p>
        </div>

        <div>
          <PRInputTextarea
            label="Description"
            id="description"
            name="description"
            value={formik.values.description}
            error={formik.touched.description && !!formik.errors.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Description"
          />
          <p className="text-xs text-red-400">
            {formik.touched.description && formik.errors.description}
          </p>
        </div>

        <div>
          <PRDropdown
            id="status"
            label="Status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            options={STATUS_OPTIONS}
          />
          <p className="text-xs text-red-400">
            {formik.touched.status && formik.errors.status}
          </p>
        </div>

        <div>
          <PRInputNumber
            error={formik.touched.price && !!formik.errors.price}
            id="price"
            label="Price"
            min={0}
            name="price"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Price"
            value={formik.values.price}
          />
        </div>

        <div>
          <PRMultiselect
            id="categories"
            name="categories"
            label="Categories"
            value={formik.values.categories}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.categories && !!formik.errors.categories}
            options={CATEGORY_OPTIONS}
            multiple
            placeholder="Categories"
          />
          <p className="text-xs text-red-400">
            {formik.touched.categories && formik.errors.categories}
          </p>
        </div>

        <div>
          <PRInputNumber
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="stock"
            label="Stock"
            id="stock"
            error={formik.touched.stock && !!formik.errors.stock}
            min={0}
            placeholder="Stock"
          />
          <p className="text-xs text-red-400">
            {formik.touched.stock && formik.errors.stock}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-8">
        <Button
          type="button"
          label="Cancel"
          className="mt-4 bg-red-400 px-8 py-2 text-sm font-medium text-background transition-all hover:bg-red-400/80 disabled:cursor-default disabled:opacity-50"
          onClick={onHide}
          disabled={formik.isSubmitting}
        />
        <Button
          type="submit"
          label="Submit"
          className="mt-4 bg-primary px-8 py-2 text-sm font-medium text-background transition-all hover:bg-primary/80 disabled:cursor-default disabled:opacity-50"
          disabled={formik.isSubmitting}
        />
      </div>
    </form>
  );
};

export default AdminProductsNewProductForm;
