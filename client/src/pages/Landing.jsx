import { Flex, Image, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { CLCKBodyText, CLCKCodeText, CLCKHeading, CLCKIntroText } from '../atoms/Typography';
import ContentSectionText from '../molecules/ContectSectionText';
import ContactSection from '../organisms/ContactSection';
import ContentSection from '../organisms/ContentSection';
import theme from '../theme';

const Landing = () => {
  const { colorMode } = useColorMode();
  const { colors } = theme;

  const headerOneUnderlineColor = useColorModeValue(
    colors[colorMode].sandyBrown.light,
    colors[colorMode].sapphire.dark
  );
  const headerTwoUnderlineColor = useColorModeValue(
    colors[colorMode].yellow.light,
    colors[colorMode].turquoise.dark
  );
  const headerFourUnderlineColor = useColorModeValue(
    colors[colorMode].sapphire.light,
    colors[colorMode].sapphire.dark
  );
  const headerFiveUnderlineColor = useColorModeValue(
    colors[colorMode].turquoise.light,
    colors[colorMode].turquoise.dark
  );

  const sectionOneBgColor = useColorModeValue(
    colors[colorMode].sapphire.base,
    colors[colorMode].sapphire.base
  );
  const sectionTwoBgColor = useColorModeValue(
    colors[colorMode].turquoise.base,
    colors[colorMode].turquoise.base
  );
  const sectionFourBgColor = useColorModeValue(
    colors[colorMode].sandyBrown.base,
    colors[colorMode].sandyBrown.dark
  );
  const sectionFiveBgColor = useColorModeValue(
    colors[colorMode].yellow.base,
    colors[colorMode].yellow.dark
  );

  const introTextColor = useColorModeValue(colors.gray[700], colors.gray[50]);

  return (
    <Flex alignItems="center" flexDirection="column">
      <Flex
        alignItems="center"
        backgroundColor={colors.gray[200]}
        boxShadow="inner"
        color={colors.gray[900]}
        flexDirection="column"
        py={10}
        w="100%"
      >
        <CLCKHeading letterSpacing="wide">Main Landing Page!</CLCKHeading>
        <CLCKIntroText
          fontFamily="introText"
          fontSize="lg"
          fontWeight="semibold"
          letterSpacing="wide"
        >
          Here is some intro text
        </CLCKIntroText>
        <CLCKBodyText>Here is some body text</CLCKBodyText>
        <CLCKCodeText>here is some code</CLCKCodeText>
        <CLCKCodeText color="tomato">here is some code but it is tomato colored!</CLCKCodeText>
      </Flex>

      <ContentSection right sectionColor={sectionOneBgColor}>
        <ContentSectionText
          bodyText="Here is a whole bunch of content! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. In, vero. Aliquid eligendi dignissimos officiis, nemo corporis molestias dolore
          sit quis obcaecati quasi nostrum deleniti architecto qui recusandae. Aliquam, adipisci
          quis!"
          ctaText="Do something"
          headingColor={colors[colorMode].textColor}
          headingText="This is a longer heading for funsies"
          headingUnderlineColor={headerOneUnderlineColor}
          introText="Here is a cool little introduction to this section. We want this to stand out! Maybe it
          is a nice summary of the next content."
          introTextColor={introTextColor}
        />
        <Image
          alt="cowboy boots"
          h="300px"
          w="300px"
          src="https://images.vexels.com/media/users/3/246016/isolated/preview/9477d47a6fd6a3580ac34064f97851ed-cowboy-boots-flat.png"
        />
      </ContentSection>

      <ContentSection left sectionColor={sectionTwoBgColor}>
        <Image
          alt="cowboy boots"
          h="300px"
          w="300px"
          src="https://images.vexels.com/media/users/3/246016/isolated/preview/9477d47a6fd6a3580ac34064f97851ed-cowboy-boots-flat.png"
        />
        <ContentSectionText
          bodyText="Here is a whole bunch of content! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. In, vero. Aliquid eligendi dignissimos officiis, nemo corporis molestias dolore
          sit quis obcaecati quasi nostrum deleniti architecto qui recusandae. Aliquam, adipisci
          quis!"
          headingColor={colors[colorMode].textColor}
          headingText="This is a heading"
          headingUnderlineColor={headerTwoUnderlineColor}
          introText="Here is a cool little introduction to this section. We want this to stand out! Maybe it
          is a nice summary of the next content."
          introTextColor={introTextColor}
        />
      </ContentSection>

      <ContentSection>
        <ContentSectionText
          bodyText="Here is a whole bunch of content! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. In, vero. Aliquid eligendi dignissimos officiis, nemo corporis molestias dolore
          sit quis obcaecati quasi nostrum deleniti architecto qui recusandae. Aliquam, adipisci
          quis!"
          headingColor={colors[colorMode].textColor}
          headingText="This is a heading"
          introText="Here is a cool little introduction to this section. We want this to stand out! Maybe it
          is a nice summary of the next content."
          introTextColor={introTextColor}
        />
      </ContentSection>

      <ContentSection right sectionColor={sectionFourBgColor}>
        <ContentSectionText
          bodyText="Here is a whole bunch of content! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. In, vero. Aliquid eligendi dignissimos officiis, nemo corporis molestias dolore
          sit quis obcaecati quasi nostrum deleniti architecto qui recusandae. Aliquam, adipisci
          quis!"
          headingColor={colors[colorMode].textColor}
          headingText="This is a heading"
          headingUnderlineColor={headerFourUnderlineColor}
          introText="Here is a cool little introduction to this section. We want this to stand out! Maybe it
          is a nice summary of the next content."
          introTextColor={introTextColor}
        />
      </ContentSection>

      <ContentSection left sectionColor={sectionFiveBgColor}>
        <ContentSectionText
          bodyText="Here is a whole bunch of content! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. In, vero. Aliquid eligendi dignissimos officiis, nemo corporis molestias dolore
          sit quis obcaecati quasi nostrum deleniti architecto qui recusandae. Aliquam, adipisci
          quis!"
          headingColor={colors[colorMode].textColor}
          headingText="This is a heading"
          headingUnderlineColor={headerFiveUnderlineColor}
          introText="Here is a cool little introduction to this section. We want this to stand out! Maybe it
          is a nice summary of the next content."
          introTextColor={introTextColor}
        />
      </ContentSection>

      <ContactSection />
    </Flex>
  );
};

export default Landing;
