export type HeroData = {
  badge: string;
  title: string;
  description: string;
  image: string;
  buttons: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
};