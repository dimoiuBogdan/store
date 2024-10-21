export const dynamic = "force-dynamic";

const ProductPage = ({ params }: { params: { product: string } }) => {
  return <div>{params.product}</div>;
};

export default ProductPage;
