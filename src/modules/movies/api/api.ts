import { MoviesApiGetParams, MoviesApiResponse } from "./types";

export const getMovies = async (
  params: MoviesApiGetParams,
): Promise<MoviesApiResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_MOVIE_API_URL as string;
  const searchParams = new URLSearchParams();

  Object.entries(params).map(
    ([key, value]) => value && searchParams.append(key, value),
  );

  const response = await fetch(`${apiUrl}?${searchParams}`);

  return (await response.json()) as MoviesApiResponse;
};
