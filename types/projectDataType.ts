// projectDataType.ts
export interface ProjectItem {
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
  contribution: string;
}

export type ProjectDataType = {
  [key: string]: ProjectItem;
};
