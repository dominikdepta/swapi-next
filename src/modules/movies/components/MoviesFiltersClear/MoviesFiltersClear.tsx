import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { MoviesFiltersClearProps } from "./types";

export const MoviesFiltersClear = ({
  ...restProps
}: MoviesFiltersClearProps) => {
  return (
    <Button variant="surface" {...restProps}>
      <CrossCircledIcon />
      Clear filters
    </Button>
  );
};
