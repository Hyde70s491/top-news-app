import StoreModel from "../models/StoreModel";
import NewsDataModel from "../models/NewsDataModel";
import {
  selectTopBusinessNews,
  selectTopEntertainmentNews,
  selectTopGeneralNews,
  selectTopHealthNews,
  selectTopScienceNews,
  selectTopSportsNews,
  selectTopTechnologyNews,
} from "../selectors/news/NewsSelectors";

export interface Category {
  readonly name: string;
  readonly selector: (state: StoreModel) => NewsDataModel[];
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
    selector: selectTopSportsNews,
  },
  technology: {
    name: "technology",
    selector: selectTopTechnologyNews,
  },
};

export default categories;
