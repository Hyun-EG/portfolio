// projectDataType.ts
export interface ProjectItem {
  mainColor: string;
  link: string;
  title: string;
  description: string;
  date: string;
  team: string;
  images: string[];
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
