import NewsModel from "./NewsModel";

export enum ApiStatus {
  Failed = "failed",
  Idle = "idle",
  Loading = "loading",
  Succeeded = "succeeded",
}

interface NewsCategoryStateModel {
  readonly apiStatus: ApiStatus;
  readonly entities: { [id: string]: NewsModel };
}

export default NewsCategoryStateModel;
