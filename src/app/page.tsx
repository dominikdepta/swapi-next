import { MoviesContainer } from "@/modules/movies/components/MoviesContainer";
import { Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box maxWidth="450px" style={{ margin: "0 auto", padding: "16px 8px" }}>
      <MoviesContainer />
    </Box>
  );
}
