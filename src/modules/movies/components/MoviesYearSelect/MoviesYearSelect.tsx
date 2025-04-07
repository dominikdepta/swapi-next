import { Select } from "@radix-ui/themes";
import { MoviesYearSelectProps } from "./types";

const options: number[] = new Array(Number(new Date().getFullYear() - 1970))
  .fill(null)
  .map((_, i) => 1970 + i);

export const MoviesYearSelect = ({ ...restProps }: MoviesYearSelectProps) => {
  return (
    <Select.Root defaultValue="1970" {...restProps}>
      <Select.Trigger placeholder="Release year" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Release year</Select.Label>

          {options.map((year) => (
            <Select.Item key={year} value={`${year}`}>
              {year}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
