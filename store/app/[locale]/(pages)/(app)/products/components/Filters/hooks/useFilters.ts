import { useRouter, useSearchParams } from "next/navigation";

type ReturnType = {
  handleCloseFilters: () => void;
};

const useFilters = (): ReturnType => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleCloseFilters = (): void => {
    params.delete("filters");

    router.replace(`?${params.toString()}`);
  };

  return { handleCloseFilters };
};

export default useFilters;
