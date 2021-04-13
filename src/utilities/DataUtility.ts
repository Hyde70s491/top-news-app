import NewsDataModel from "../models/NewsDataModel";
import NewsModel from "../models/NewsModel";

export const getNewsData = (
  entities: { [id: string]: NewsModel },
  category: string
): NewsDataModel[] => {
  return Object.entries(entities).map(
    ([id, news]: [string, NewsModel]): NewsDataModel => {
      return {
        author: news.author,
        category,
        id,
        imageUrl: news.urlToImage,
        subtitle: news.description,
        text: news.content,
        title: news.title,
      };
    }
  );
};
