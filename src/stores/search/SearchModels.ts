import NewsModel from "../../models/NewsModel";

export interface SearchState {
  readonly entities: {
    [id: string]: NewsModel;
  };
}
