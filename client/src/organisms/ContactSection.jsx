import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CLCKHeading } from '../atoms/Typography';
import theme from '../theme';

const ContactSection = ({ ...props }) => {
  const { colors } = theme;
  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue(
    colors[colorMode].turquoise.base,
    colors[colorMode].turquoise.dark
  );

  const [emailInput, setEmailInput] = useState(null);
  const [firstNameInput, setFirstNameInput] = useState(null);
  const [lastNameInput, setLastNameInput] = useState(null);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const validateEmail = (email) => {
    const re = /^\S+@\S+\.\S+$/;
    return !re.test(email);
  };

  useEffect(() => {
    if (emailInput === null) return;
    setIsEmailInvalid(validateEmail(emailInput));
  }, [emailInput]);

  return (
    <Flex
      alignItems="center"
      backgroundColor={backgroundColor}
      flexDirection="column"
      justifyContent="center"
      px={[10, 10, 20, 20]}
      py={20}
      w="100%"
      {...props}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        w={['100%', '100%', '50vw']}
      >
        <CLCKHeading
          alignSelf="flex-start"
          fancyUnderlineColor={colors[colorMode].navAndFooter}
          mb={6}
        >
          Get in touch!
        </CLCKHeading>
        <form action="poop" method="POST" style={{ width: '100%' }}>
          <FormControl isInvalid={firstNameInput === ''} isRequired py={2}>
            <FormLabel>First name</FormLabel>
            <Input
              backgroundColor={colors[colorMode].background}
              onChange={(e) => setFirstNameInput(e.target.value)}
              placeholder="Enter your first name"
              size="md"
              value={firstNameInput || ''}
              variant="filled"
            />
          </FormControl>
          <FormControl isInvalid={lastNameInput === ''} isRequired py={2}>
            <FormLabel>Last name</FormLabel>
            <Input
              backgroundColor={colors[colorMode].background}
              onChange={(e) => setLastNameInput(e.target.value)}
              placeholder="Enter your last name"
              size="md"
              value={lastNameInput || ''}
              variant="filled"
            />
          </FormControl>
          <FormControl isInvalid={isEmailInvalid} isRequired py={2}>
            <FormLabel>Email address</FormLabel>
            <Input
              backgroundColor={colors[colorMode].background}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email"
              size="md"
              value={emailInput || ''}
              variant="filled"
            />
            {!isEmailInvalid ? (
              <FormHelperText>We will never share your email.</FormHelperText>
            ) : (
              <FormErrorMessage>A valid email is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl py={2}>
            <Textarea
              backgroundColor={colors[colorMode].background}
              placeholder="Share your project ideas with us!"
              variant="filled"
            />
          </FormControl>

          <Flex justifyContent="center" w="100%">
            <Button
              backgroundColor={colors[colorMode].CTA}
              boxShadow="md"
              color={colors.white}
              m="0 auto"
              my={2}
              w={['100%', 44]}
            >
              Send email
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default ContactSection;
