type Props = {
  onClick: () => void;
};

export default function AdminProductsFilterApply({ onClick }: Props) {
  return (
    <div
      className="bg-secondary ml-2 flex-1 cursor-pointer rounded-md px-2 py-1 text-center font-medium text-white shadow-md transition-all hover:bg-emerald-600"
      onClick={onClick}
    >
      Apply
    </div>
  );
}
