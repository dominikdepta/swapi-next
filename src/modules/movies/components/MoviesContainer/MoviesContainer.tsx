"use client";

import { Flex } from "@radix-ui/themes";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDebounce } from "react-use";
import { getMovies, MoviesApiItem } from "../../api";
import { MoviesFiltersClear } from "../MoviesFiltersClear";
import { MoviesList } from "../MoviesList";
import { MoviesSearch } from "../MoviesSearch";
import { MoviesYearSelect } from "../MoviesYearSelect";

const searchPhraseInitialValue = "";
const yearFilterInitialValue = 1970;

export const MoviesContainer = () => {
  const [movies, setMovies] = useState<MoviesApiItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState(searchPhraseInitialValue);
  const [yearFilter, setYearFilter] = useState(yearFilterInitialValue);
  const [searchDebounced, setSearchDebounced] = useState(searchPhrase);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchPhrase(e.target.value);
    },
    [],
  );

  const handleYearSelect = useCallback((value: string) => {
    setYearFilter(parseInt(value));
  }, []);

  const handleFiltersClearClick = useCallback(() => {
    setSearchPhrase(searchPhraseInitialValue);
    setYearFilter(yearFilterInitialValue);
  }, []);

  useDebounce(
    () => {
      setSearchDebounced(searchPhrase);
    },
    500,
    [searchPhrase],
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getMovies({ search: searchDebounced });
      setMovies(response.results);
      setIsLoading(false);
    })();
  }, [searchDebounced]);

  const moviesFiltered = useMemo(
    () =>
      movies &&
      movies.filter(
        ({ release_date }) =>
          new Date(release_date).getFullYear() >= yearFilter,
      ),
    [movies, yearFilter],
  );

  return (
    <Flex direction="column" gap="4">
      <Flex gap="2">
        <MoviesSearch onChange={handleSearchChange} value={searchPhrase} />
        <MoviesYearSelect
          onValueChange={handleYearSelect}
          value={`${yearFilter}`}
        />
        <MoviesFiltersClear onClick={handleFiltersClearClick} />
      </Flex>

      <MoviesList movies={moviesFiltered} isLoading={isLoading} />
    </Flex>
  );
};
