import {
  Grid,
  GridItem,
  Image,
  HStack,
  Badge,
  Heading,
  Text,
  ThemingProps,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import classNames from "classnames";
import React, { FC } from "react";
import styles from "./TimelineRow.module.scss";

interface ITimelineRow {
  image: string;
  title: string;
  text: string;
  badges?: {
    text: string;
    color:
      | "green"
      | "whiteAlpha"
      | "blackAlpha"
      | "gray"
      | "red"
      | "orange"
      | "yellow"
      | "teal"
      | "blue"
      | "cyan"
      | "purple"
      | "pink"
      | "linkedin"
      | "facebook"
      | "messenger"
      | "whatsapp"
      | "twitter"
      | "telegram";
  }[];
  buttons?: {
    linkTo: string;
    text: string;
    color:
      | "green"
      | "whiteAlpha"
      | "blackAlpha"
      | "gray"
      | "red"
      | "orange"
      | "yellow"
      | "teal"
      | "blue"
      | "cyan"
      | "purple"
      | "pink"
      | "linkedin"
      | "facebook"
      | "messenger"
      | "whatsapp"
      | "twitter"
      | "telegram";
    icon?: React.ReactElement;
  }[];
  inverted?: boolean;
  year?: string;
}

const TimelineRow: FC<ITimelineRow> = (props) => {
  return (
    <Grid
      className={styles.timelineRow}
      templateColumns={{ lg: "repeat(2,1fr)" }}
      gap={10}
    >
      {props.year ? (
        <div
          className={classNames(
            styles.timelineRowYearLabel,
            props.inverted ? styles.inverted : undefined
          )}
        >
          {props.year}
        </div>
      ) : null}
      <GridItem order={{ lg: props.inverted ? 2 : 1 }}>
        <Image
          display="flex"
          mt={{ sm: 5, md: 0 }}
          ml="auto"
          mr="auto"
          borderRadius="5px"
          src={props.image}
          alt={props.title}
          maxWidth="75%"
          shadow="xl"
        />
      </GridItem>
      <GridItem
        px={5}
        order={{ lg: props.inverted ? 1 : 2 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <HStack flexWrap="wrap" gap={1}>
          {props.badges
            ? props.badges.map((row, key) => (
                <Badge
                  key={key}
                  colorScheme={row.color}
                  sx={{
                    WebkitMarginStart: "0!important",
                    marginStart: "0!important",
                  }}
                >
                  {row.text}
                </Badge>
              ))
            : null}
        </HStack>
        <Heading as="h2" size="md" mt={3}>
          {props.title}
        </Heading>
        <Text>{props.text}</Text>
        <HStack mt={2}>
          {props.buttons
            ? props.buttons.map((row, key) => (
                <Link
                  key={key}
                  href={row.linkTo}
                  target="_blank"
                  sx={{
                    "&:hover": {
                      textDecoration: "unset",
                    },
                  }}
                >
                  <Button size="sm" variant="outline" colorScheme={row.color}>
                    {row.text}
                  </Button>
                </Link>
              ))
            : null}
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default TimelineRow;
