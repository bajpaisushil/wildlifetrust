export const site = {
  name: "Wildlife and Habitat Trust of India",
  shortName: "Wildlife & Habitat Trust",
  location: "Bakkarwala, West Delhi",
  tagline: "Rescue • Treat • Rehabilitate • Release",
  instagramHandle: "wildlifeandhabitattrust_india",
  instagramUrl: "https://www.instagram.com/wildlifeandhabitattrust_india/",
  mapQuery: "Bakkarwala, New Delhi, Delhi",
  phone: "+91 98210 73362",
  whatsapp: "919821073362",
  upiId: "9821073362@ptaxis",
  upiQr: "/images/donation-qr.jpg",
};

export const whatsappUrl = (text = "Hi, I found an injured animal and need help.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type Reel = {
  code: string;
  author: string;
  date: string;
};

export const reels: Reel[] = [
  { code: "DbsskiDTtnA", author: "naturemowgli", date: "2026-08-06" },
  { code: "Dbf2LIhzrsT", author: "naturemowgli", date: "2026-08-01" },
  { code: "Da7_0ymzbc0", author: "naturemowgli", date: "2026-07-18" },
  { code: "Da5kVukT3wI", author: "naturemowgli", date: "2026-07-17" },
  { code: "DavNI4OzuKH", author: "naturemowgli", date: "2026-07-13" },
  { code: "DaYRONnzWrk", author: "naturemowgli", date: "2026-07-04" },
  { code: "DaSyQuOzI43", author: "naturemowgli", date: "2026-07-02" },
  { code: "DX9pKaiTwbx", author: "wildlifeandhabitattrust_india", date: "2026-05-05" },
  { code: "DWq9yG6E19Z", author: "naturemowgli", date: "2026-04-03" },
];

export type ShelterRoom = {
  name: string;
  note: string;
  photo?: string;
};

export const shelterRooms: ShelterRoom[] = [
  { name: "Treatment area", note: "Where new arrivals are checked, cleaned and bandaged." },
  { name: "Recovery enclosures", note: "Quiet, safe spaces for animals healing from injuries." },
  { name: "Bird room", note: "For owls, kites and other birds until they can fly again." },
  { name: "Reptile & turtle area", note: "Snakes and turtles recovering at the right temperature." },
];

export type PatientStatus = "Under treatment" | "Recovering" | "Ready for release" | "Released";

export type Patient = {
  animal: string;
  story: string;
  status: PatientStatus;
  photo?: string;
};

export const patients: Patient[] = [];

export type Animal = {
  emoji: string;
  name: string;
  examples: string;
  commonInjuries: string;
  ifYouFindOne: string;
};

export const animals: Animal[] = [
  {
    emoji: "🐒",
    name: "Monkeys",
    examples: "Rhesus macaques",
    commonInjuries: "Electric shocks from wires, dog bites, road accidents, babies separated from their mothers.",
    ifYouFindOne: "Keep people and dogs away. Do not try to pick it up or feed it. Message us and stay nearby until help arrives.",
  },
  {
    emoji: "🐍",
    name: "Snakes",
    examples: "Rat snakes, wolf snakes, cobras, sand boas",
    commonInjuries: "Wounds from being beaten, caught in netting or drains, trapped inside homes and sheds.",
    ifYouFindOne: "Keep a safe distance and watch where it goes. Never try to catch or kill it. Many snakes here are harmless.",
  },
  {
    emoji: "🦉",
    name: "Owls",
    examples: "Spotted owlets, barn owls",
    commonInjuries: "Kite-string (manja) cuts, falls from nests, collisions, being chased by crows.",
    ifYouFindOne: "Gently cover it with a cloth and place it in a ventilated cardboard box in a quiet, dark spot. No food or water.",
  },
  {
    emoji: "🐢",
    name: "Turtles",
    examples: "Indian flapshell & softshell turtles",
    commonInjuries: "Cracked shells from vehicles, fishing hooks, illegal pet trade.",
    ifYouFindOne: "Lift it by the sides of the shell (softshells can bite) and keep it in a box with a damp cloth. Do not put it in a bucket of water.",
  },
  {
    emoji: "🦅",
    name: "Birds",
    examples: "Black kites, pigeons, parakeets, egrets",
    commonInjuries: "Manja cuts (worst around Independence Day kite flying), heat stroke, broken wings.",
    ifYouFindOne: "Place it in a ventilated box away from heat and keep it in the shade. Do not force water into its beak.",
  },
  {
    emoji: "🦎",
    name: "Others",
    examples: "Monitor lizards, squirrels, mongoose, jackals",
    commonInjuries: "Stuck in homes and drains, dog attacks, road accidents.",
    ifYouFindOne: "Give it space and a way out, keep pets inside, and send us a photo or video so we can guide you.",
  },
];

export const steps = [
  { title: "Rescue", text: "We pick up injured animals from Bakkarwala and nearby areas." },
  { title: "Treat", text: "Wounds are cleaned and treated, with vets helping in serious cases." },
  { title: "Rehabilitate", text: "They recover at our shelter until they can move, fly and feed again." },
  { title: "Release", text: "Healthy animals go back to a safe natural habitat." },
];
