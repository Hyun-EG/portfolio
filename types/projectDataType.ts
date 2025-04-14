// projectDataType.ts
export interface ProjectItem {
  mainColor: string;
  title: string;
  description: string;
  date: string;
  team: string;
  images: {
    img1: string;
    img2: string;
    img3: string;
  };
  keyFeatures: string[];
  skills: {
    skill: string;
    content: string;
  }[];
  contribution: {
    title: string;
    content: string[];
  }[];
}

export type ProjectDataType = {
  [key: string]: ProjectItem;
};
