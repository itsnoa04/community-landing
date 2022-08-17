export default interface feedSchema {
  id: string;
  author: string;
  authorImg: string;
  authorId: number;
  title: string;
  body: string;
  group: groupSchema;
}

export interface groupSchema {
  name: string;
  id: number;
  color: string;
  textColor: string;
}
