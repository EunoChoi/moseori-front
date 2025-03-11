import { useEffect, useRef } from "react";

interface Props {
  searchInput: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  setRecentSearchInput: React.Dispatch<React.SetStateAction<string[]>>;
}

const useDeboundSearch = ({ searchInput, setSearchKeyword, setRecentSearchInput }: Props) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log(searchInput);
    timer.current = setTimeout(() => {
      setSearchKeyword(searchInput);
      setRecentSearchInput(c => [...c, searchInput]);
    }, 1000);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    }
  }, [searchInput])
}

export default useDeboundSearch;