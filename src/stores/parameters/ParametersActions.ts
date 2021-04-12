import ActionModel from "../../models/ActionModel";
import { NewsData } from "../../selectors/news/NewsSelectorModels";

const PARAMETERS_ACTION_DOMAIN: string = "parameters";

export const SET_CATEGORY: string = `${PARAMETERS_ACTION_DOMAIN}/setCategory`;
export const SET_NEWS_DATA: string = `${PARAMETERS_ACTION_DOMAIN}/setNewsData`;
export const UPDATE_COUNTRY: string = `${PARAMETERS_ACTION_DOMAIN}/updateCountry`;

export const setCategory = (categoryName: string): ActionModel<string> => {
  return {
    type: SET_CATEGORY,
    payload: categoryName,
  };
};

export const setNewsData = (
  newsData: NewsData | null
): ActionModel<NewsData | null> => {
  return {
    type: SET_NEWS_DATA,
    payload: newsData,
  };
};

export const updateCountry = (countryId: string): ActionModel<string> => {
  return {
    type: UPDATE_COUNTRY,
    payload: countryId,
  };
};
