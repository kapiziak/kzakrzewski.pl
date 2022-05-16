import {
  Box,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Image,
  Badge,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import TimelineRow from "./TimelineRow";
import styles from "./Timeline.module.scss";

import imgVpet from "../../assets/img/vpet_mp2.png";
import imgVpetPanel from "../../assets/img/panel_pet_1.png";
import imgZs2 from "../../assets/img/zs2.png";
import imgZs2Apk from "../../assets/img/zs2_apk_mp4.png";
import imgGTMs from "../../assets/img/gtms_mp3.png";
import imgDiamond from "../../assets/img/staroscnieradosc.png";
import imgTTS from "../../assets/img/ttsbanner.png";

const Timeline: FC = () => (
  <VStack gap={20} className={styles.timeline}>
    <TimelineRow
      title="TimeToSave.eu"
      text={`Projekt został stworzony na potrzeby własne. Aplikacja pozwala na
      tworzenie projektów oraz rejestrowania czasu pracy. Możliwe jest
      również generowanie raportów dla pracodawcy lub do przedstawienia
      klientowi.`}
      image={imgTTS}
      badges={[
        { text: "Node.js", color: "green" },
        { text: "Express.js", color: "red" },
        { text: "React.js", color: "facebook" },
        { text: "TypeScript", color: "blue" },
        { text: "Material UI", color: "messenger" },
        { text: "mariaDB", color: "orange" },
        { text: "Heroku", color: "purple" },
      ]}
      buttons={[
        {
          linkTo: "https://timetosave.eu/?ref=kzakrzewski.pl",
          text: "timetosave.eu",
          color: "orange",
        },
      ]}
      year="2021"
    />
    <TimelineRow
      title="Projekt vPETRUCK"
      text={`Projekt vPETRUCK tworzyłem od 2019 do 2021 roku. Operowałem językiem LUA na
      platformie FiveM (Grand Theft Auto V) tworząc własny serwer typu
      Truck. Napisałem systemy tj. system użytkownika, zleceń, frakcji, firm
      transportowych, a cały kod rozpięty jest na 20 000 linijek. Ze względu na studia i brak czasu nad projektem pieczę sprawują inne osoby.`}
      image={imgVpet}
      badges={[
        { text: "FiveM", color: "yellow" },
        { text: "Lua", color: "blue" },
        { text: "MySQL", color: "orange" },
      ]}
      inverted
      year="2020"
    />
    <TimelineRow
      title="Panel vPETRUCK"
      text={`Jest to panel gracza WWW, który jest połączony z grą za pomocą bazy danych (MySQL). Nim również zajmowałem się od 2019 do 2021 roku. Oparty jest na frameworku CodeIgniter w wersji 2 w połączeniu z Steam API.`}
      image={imgVpetPanel}
      badges={[
        { text: "PHP", color: "blue" },
        { text: "MDBootstrap", color: "teal" },
        { text: "CodeIgniter 2", color: "orange" },
        { text: "Steam API", color: "blackAlpha" },
        { text: "MySQL", color: "orange" },
      ]}
      buttons={[
        {
          linkTo: "https://panel.vpet.pl/",
          text: "Panel gracza",
          color: "teal",
        },
      ]}
    />
    <TimelineRow
      title="ZS2 Suwałki"
      text={`Strona internetowa Zespołu Szkół nr 2 zarządzana przeze mnie od 2016 roku. Oryginalny motyw oparty na frameworku MDBootstrap wykonany przez moją osobę oraz wtyczki niezbędne do prowadzenia strony internetowej takie jak automatyczne wstawianie nowych postów na Facebook, SEO, Firewall czy JSON News API do połączenia z moją aplikacją.`}
      image={imgZs2}
      badges={[
        { text: "PHP", color: "blue" },
        { text: "MDBootstrap", color: "orange" },
        { text: "WordPress", color: "cyan" },
        { text: "facebook Graph API", color: "facebook" },
      ]}
      buttons={[
        {
          linkTo: "https://zs2.suwalki.pl",
          text: "Witryna",
          color: "green",
        },
      ]}
      inverted
      year="2017"
    />
    <TimelineRow
      title="Aplikacja II LO Suwałki"
      text={`Aplikacja powstała przy okazji przebudowy witryny. Zawiera sekcję informacyjną, najnowszy plan lekcji, rozkład jazdy MPK spod szkoły i inne. Napisana pod platformę Android przy użyciu Android Studio w języku Kotlin. Aplikacja również posiada połączenie z Firebase w celu wysyłania powiadomień i analizy.`}
      image={imgZs2Apk}
      badges={[
        { text: "Kotlin", color: "green" },
        { text: "Firebase", color: "orange" },
        { text: "Integracja z Wordpress", color: "cyan" },
      ]}
      buttons={[
        {
          linkTo: "https://github.com/kapiziak/TheBestIILO",
          text: "Kod źródłowy",
          color: "gray",
        },
      ]}
    />
    <TimelineRow
      title="Panel radiowy GTMs"
      text={`Panel radia GTMs to strona stworzona na potrzeby radiowej społeczności. Na platformie można głosować na ulubione piosenki lub zamówić utwór. Po stronie administratora wyświetlają się propozycje piosenek do puszczania i pozdrowienia.`}
      image={imgGTMs}
      badges={[
        { text: "PHP", color: "blue" },
        { text: "Bootstrap", color: "teal" },
        { text: "MYSQL", color: "orange" },
      ]}
      buttons={[
        {
          linkTo: "https://gtms.zs2.suwalki.pl",
          text: "Panel",
          color: "cyan",
        },
      ]}
      inverted
    />
    <TimelineRow
      title="Projekt Diamond Truck"
      text={`Mój pierwszy projekt serwera gry. Celem była mała społeczność gry San Andreas Multiplayer, która
      chciała się razem dobrze bawić na jakimś serwerze z ciężarówkami :)
      Wkroczyłem w rolę "PAWNera" i pierwszy raz dopiąłem projekt od 0 do samego końca sam.`}
      image={imgDiamond}
      badges={[
        { text: "PAWN", color: "cyan" },
        { text: "MYSQL", color: "orange" },
        { text: "PHP", color: "blue" },
      ]}
      buttons={[
        {
          linkTo: "https://github.com/kapiziak/diamondtruck",
          text: "Kod źródłowy",
          color: "gray",
        },
      ]}
      year="2014"
    />
  </VStack>
);

export default Timeline;
