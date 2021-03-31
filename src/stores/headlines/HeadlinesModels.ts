import NewsModel from "../../models/NewsModel";

export interface HeadlinesState {
  readonly entities: {
    [id: string]: NewsModel;
  };
}
