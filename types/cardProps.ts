import { StaticImageData } from "next/image";

export type CardProps = {
  projectImg: StaticImageData;
  projectName: string;
  projectDesc: string;
  badges: React.ReactNode;
  onClick?: () => void;
};
