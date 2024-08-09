import DekstopRadioImage from "assets/images/radio-dekstop.png";
import { ButtonText, MainTitle, Text } from "components/ui/Typography";
import { PlayButton, TextWrapper, Wrapper } from "./styled";
import { Play } from "components/ui/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Pick your todays mood. We will play a perfect mix!</Text>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DekstopRadioImage} alt="Hands that hold radio" />
    </Wrapper>
  );
}

export default Hero;
