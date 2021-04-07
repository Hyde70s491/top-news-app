import StoreModel from "../models/StoreModel";
import { Headlines } from "../selectors/news/NewsSelectorModels";
import {
  selectTopBusinessNews,
  selectTopEntertainmentNews,
  selectTopGeneralNews,
  selectTopHealthNews,
  selectTopScienceNews,
} from "../selectors/news/NewsSelectors";

export interface Category {
  readonly name: string;
  readonly selector: (state: StoreModel) => Headlines[];
}

const categories: { [id: string]: Category } = {
  business: {
    name: "business",
    selector: selectTopBusinessNews,
  },
  entertainment: {
    name: "entertainment",
    selector: selectTopEntertainmentNews,
  },
  general: {
    name: "general",
    selector: selectTopGeneralNews,
  },
  health: {
    name: "health",
    selector: selectTopHealthNews,
  },
  science: {
    name: "science",
    selector: selectTopScienceNews,
  },
  sports: {
    name: "sports",
    selector: selectTopBusinessNews,
  },
  technology: {
    name: "technology",
    selector: selectTopBusinessNews,
  },
};

export default categories;
