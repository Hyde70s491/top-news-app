import NewsDataModel from "../../models/NewsDataModel";

export interface ParametersState {
  readonly category: string | null;
  readonly country: string;
  readonly newsData: NewsDataModel | null;
}
