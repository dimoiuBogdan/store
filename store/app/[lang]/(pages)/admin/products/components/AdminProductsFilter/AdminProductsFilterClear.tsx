type Props = {
  onClick: () => void;
};

export default function AdminProductsFilterClear({ onClick }: Props) {
  return (
    <div
      className="mr-2 flex-1 cursor-pointer rounded-md bg-red-500 px-2 py-1 text-center font-medium text-white shadow-md transition-all hover:bg-red-600"
      onClick={onClick}
    >
      Clear
    </div>
  );
}
