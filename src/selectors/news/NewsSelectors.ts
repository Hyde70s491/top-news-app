import NewsModel from "../../models/NewsModel";
import StoreModel from "../../models/StoreModel";
import { SearchedNews } from "./NewsSelectorModels";

export const selectSearchedNews = (state: StoreModel): SearchedNews[] => {
  return Object.entries(state.search.entities).map(
    ([id, news]: [string, NewsModel]): SearchedNews => {
      return {
        id,
        imageUrl: news.urlToImage,
        title: news.title,
        subtitle: news.description,
      };
    }
  );
};
