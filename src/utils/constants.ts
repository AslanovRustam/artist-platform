import artist1 from "../assets/images/artists/artist1.png";
import artist2 from "../assets/images/artists/artist2.png";
import artist3 from "../assets/images/artists/artist3.png";
import artist4 from "../assets/images/artists/artist4.png";
import bg from "../assets/images/artists/bg.png";
import tour1 from "../assets/images/tours/tour1.png";
import tour2 from "../assets/images/tours/tour2.png";
import tour3 from "../assets/images/tours/tour3.png";

import User from "../assets/icons/user.svg?react";
import Link from "../assets/icons/link.svg?react";
import Epk from "../assets/icons/epk.svg?react";

import Star from "../assets/icons/star.svg?react";
import Circle from "../assets/icons/ball.svg?react";
import HalfCircle from "../assets/icons/halfCircle.svg?react";
import Corner from "../assets/icons/corner.svg?react";

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
  { id: 0, photo: artist1, name: "artist1", bg: bg },
  { id: 1, photo: artist2, name: "artist2", bg: bg },
  { id: 2, photo: artist3, name: "artist3", bg: bg },
  { id: 3, photo: artist4, name: "artist4", bg: bg },
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

export const TOURS = [
  {
    id: 0,
    photo: tour1,
    place: "Opera House",
    date: "June 24, 2025",
    location: "Dubai, UAE",
  },
  {
    id: 1,
    photo: tour2,
    place: "Opera House",
    date: "Jule 10, 2025",
    location: "Dubai, UAE",
  },
  {
    id: 2,
    photo: tour3,
    place: "Opera House",
    date: "Jule 18, 2025",
    location: "Dubai, UAE",
  },
];

export const EXPERIENCE = [
  {
    id: 0,
    icon: Star,
    text: "Performed at Dubai jazz festival",
    color: "#f94819",
  },
  {
    id: 1,
    icon: Circle,
    text: "Opened for Grammy-Winning artists",
    color: "#c1ff16",
  },
  {
    id: 2,
    icon: HalfCircle,
    text: "Regular performer at burj al Arab’s Skyview",
    color: "#8181d5",
  },
  {
    id: 3,
    icon: Corner,
    text: "Released two original albums",
    color: "#2f4acb",
  },
];

export const SERVICES = [
  {
    id: 0,
    text: "Solo piano and vocal acts",
  },
  {
    id: 1,
    text: "Jazz trio or quartet arrangements",
  },
  {
    id: 2,
    text: "Background music for sophisticated events",
  },
  {
    id: 3,
    text: "Custom song requests",
  },
];

export const TESTIMONIALS = [
  {
    id: 0,
    author: "Ahmed Al Mansouri",
    client: "Corporate Gala",
    text: "“Sarah created the  amet consectetur. Convallis tincidunt id placerat pretium tristique eget. Id eu ut nunc velit egestas quis tempor nisi sagittis. Morbi cras leo fringilla lacinia ornare a. Sodales amet et pellentesque dui mauris malesuada scelerisque aliquet ornare.”",
  },
  {
    id: 1,
    author: "Ahmed Al Mansouri1",
    client: "Corporate Gala",
    text: "“Sarah created the  amet consectetur. Convallis tincidunt id placerat pretium tristique eget. Id eu ut nunc velit egestas quis tempor nisi sagittis. Morbi cras leo fringilla lacinia ornare a. Sodales amet et pellentesque dui mauris malesuada scelerisque aliquet ornare.”",
  },
  {
    id: 2,
    author: "Ahmed Al Mansouri2",
    client: "Corporate Gala",
    text: "“Sarah created the  amet consectetur. Convallis tincidunt id placerat pretium tristique eget. Id eu ut nunc velit egestas quis tempor nisi sagittis. Morbi cras leo fringilla lacinia ornare a. Sodales amet et pellentesque dui mauris malesuada scelerisque aliquet ornare.”",
  },
  {
    id: 3,
    author: "Ahmed Al Mansouri3",
    client: "Corporate Gala",
    text: "“Sarah created the  amet consectetur. Convallis tincidunt id placerat pretium tristique eget. Id eu ut nunc velit egestas quis tempor nisi sagittis. Morbi cras leo fringilla lacinia ornare a. Sodales amet et pellentesque dui mauris malesuada scelerisque aliquet ornare.”",
  },
];
