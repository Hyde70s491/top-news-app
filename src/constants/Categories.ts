import { ApiStatus } from "../models/NewsCategoryStateModel";
import NewsDataModel from "../models/NewsDataModel";
import StoreModel from "../models/StoreModel";
import {
  selectBusinessApi,
  selectEntertainmentApi,
  selectGeneralApi,
  selectHealthApi,
  selectScienceApi,
  selectSportsApi,
  selectTechnologyApi,
} from "../selectors/api/ApiSelectors";
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
  readonly apiStatusSelector: (state: StoreModel) => ApiStatus;
  readonly name: string;
  readonly selector: (state: StoreModel) => NewsDataModel[];
}

const categories: { [id: string]: Category } = {
  business: {
    apiStatusSelector: selectBusinessApi,
    name: "business",
    selector: selectTopBusinessNews,
  },
  entertainment: {
    apiStatusSelector: selectEntertainmentApi,
    name: "entertainment",
    selector: selectTopEntertainmentNews,
  },
  general: {
    apiStatusSelector: selectGeneralApi,
    name: "general",
    selector: selectTopGeneralNews,
  },
  health: {
    apiStatusSelector: selectHealthApi,
    name: "health",
    selector: selectTopHealthNews,
  },
  science: {
    apiStatusSelector: selectScienceApi,
    name: "science",
    selector: selectTopScienceNews,
  },
  sports: {
    apiStatusSelector: selectSportsApi,
    name: "sports",
    selector: selectTopSportsNews,
  },
  technology: {
    apiStatusSelector: selectTechnologyApi,
    name: "technology",
    selector: selectTopTechnologyNews,
  },
};

export default categories;
