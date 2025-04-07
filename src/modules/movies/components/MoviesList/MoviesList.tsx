import { Box, Callout, Flex, Spinner, Table } from "@radix-ui/themes";
import { MoviesListProps } from "./types";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export const MoviesList = ({
  movies,
  isLoading,
  ...restProps
}: MoviesListProps) => {
  if (isLoading) {
    return (
      <Flex justify="center" align="center" minHeight="300px">
        <Spinner />
      </Flex>
    );
  }

  if (!movies || movies.length <= 0) {
    return (
      <Box>
        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>No movies found.</Callout.Text>
        </Callout.Root>
      </Box>
    );
  }

  return (
    <Table.Root {...restProps}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Release date</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Director</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {movies.map(({ episode_id, title, release_date, director }) => (
          <Table.Row key={episode_id}>
            <Table.RowHeaderCell>{title}</Table.RowHeaderCell>
            <Table.Cell>{release_date}</Table.Cell>
            <Table.Cell>{director}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
