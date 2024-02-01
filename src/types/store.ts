export interface IPostItem {
  id: number;
  title: string;
  body: string;
}

export interface IPostListData {
  postData: IPostItem[];
}

export interface RootState {
  post: IPostListData;
}
