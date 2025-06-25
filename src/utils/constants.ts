import artist1 from "../assets/images/artists/artist1.png";
import artist2 from "../assets/images/artists/artist2.png";
import artist3 from "../assets/images/artists/artist3.png";
import artist4 from "../assets/images/artists/artist4.png";
import User from "../assets/icons/user.svg?react";
import Link from "../assets/icons/link.svg?react";
import Epk from "../assets/icons/epk.svg?react";

export const ROUTES = {
  home: "/",
  artists: "/artists",
} as const;

export const LANGUEGES = {
  en: "EN",
  arabic: "العربية",
} as const;

export const ANCHORS = {
  artists: { id: "artists", anchor: "#artists" },
  howItWorks: { id: "howItWorks", anchor: "#howItWorks" },
  booking: { id: "booking", anchor: "#booking" },
  contact: { id: "contact", anchor: "#contact" },
} as const;

export const LOCATIONS = [
  "New York",
  "Los Angeles",
  "WORLD MUSIC",
  "ELECTRONIC",
  "REGGAE",
  "EDM",
];

export const BUDGET = ["100 - 200", "200 - 500", "600 - 1000", "1000 - 2000"];

export const ARTISTS = [
  { id: 0, photo: artist1, name: "artist1" },
  { id: 1, photo: artist2, name: "artist2" },
  { id: 2, photo: artist3, name: "artist3" },
  { id: 3, photo: artist4, name: "artist4" },
];

export const BOOKING = [
  {
    id: 0,
    title: "SEARCH",
    description: "Search for artists by genre, location, and date",
  },
  {
    id: 1,
    title: "BOOK",
    description: "Book your favorite artist for your event",
  },
  {
    id: 2,
    title: "SIGN & PAY",
    description: "Sign and pay for your booking online",
  },
  {
    id: 3,
    title: "ENJOY!",
    description: "Relax and enjoy the show",
  },
];

export const ARTIST_REGISTRATION_STEPS = [
  {
    id: 0,
    Icon: User,
    title: "Basic Info",
    description: "Tell us about yourself",
  },
  { id: 1, Icon: Link, title: "Links", description: "Get in Touch" },
  { id: 2, Icon: Epk, title: "EPK", description: "Upload your press kit" },
];
