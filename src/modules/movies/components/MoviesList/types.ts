import { MoviesApiItem } from "../../api";

export interface MoviesListProps {
  movies: MoviesApiItem[];
  isLoading?: boolean;
}
