export interface ITopic {
  id: string;
  title: string;
  published: number;
  tags: ITag[];
  preview: string;
}

export interface ITag {
  name: string;
}
