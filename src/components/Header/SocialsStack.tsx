import { EmailIcon } from "@chakra-ui/icons";
import { IconButton, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";

const SocialsStack: FC = () => {
  return (
    <>
      <Link href="https://github.com/kapiziak/" target="_blank">
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginTop="0"
          marginLeft="0"
          icon={<GithubIcon />}
          aria-label="Close the menu"
        />
      </Link>
      <Link href="mailto:kacperzakrzewski@proton.me" target="_blank">
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginTop="0"
          marginLeft="0"
          icon={<EmailIcon />}
          aria-label="Close the menu"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/kacperzakrzewski/" target="_blank">
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginTop="0"
          marginLeft="0"
          icon={<LinkedinIcon />}
          aria-label="Close the menu"
        />
      </Link>
    </>
  );
};

export default SocialsStack;
