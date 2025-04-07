import cn from "classnames";
import { MoviesSearchProps } from "./types";
import styles from "./MoviesSearch.module.css";
import { TextField } from "@radix-ui/themes";

export const MoviesSearch = ({
  className,
  ...restProps
}: MoviesSearchProps) => (
  <TextField.Root
    placeholder="Search the movies"
    className={cn(styles.wrapper, className)}
    {...restProps}
  />
);
