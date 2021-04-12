import { NewsData } from "../../selectors/news/NewsSelectorModels";

export interface ParametersState {
  readonly category: string | null;
  readonly country: string;
  readonly newsData: NewsData | null;
}
