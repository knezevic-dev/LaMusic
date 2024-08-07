import { ThemeProvider } from "styled-components";
import {
  Play,
  SkipLeft,
  Pause,
  SkipRight,
  Volume,
  Music,
  ArrowLeft,
  ArrowRight,
  Search,
  Heart,
  Users,
} from "components/ui/icons";
import {
  ButtonText,
  MainTitle,
  SectionSubtitle,
  SectionTitle,
  SubText,
  Text,
} from "components/ui/Typography";
import { GlobalStyles } from "styles/Global";
import { theme } from "styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SectionSubtitle>Hello</SectionSubtitle>
      <Text>Hello</Text>
      <SubText>Hello</SubText>
      <ButtonText>Hello</ButtonText>
      <br />
      <Play />
      <SkipLeft />
      <Pause />
      <SkipRight />
      <Volume />
      <Music />
      <ArrowLeft />
      <ArrowRight />
      <Search />
      <Heart />
      <Users />
    </ThemeProvider>
  );
}

export default App;
