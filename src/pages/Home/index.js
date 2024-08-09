import { Hero } from "components/HomePage";
import { ContentWrapper } from "./styled";

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <div>Genres</div>
      <div>Songs Table</div>
      <div>Artist</div>
    </ContentWrapper>
  );
}

export default Home;
