import NewsModel from "../../models/NewsModel";
import NewsCategoryStateModel from "../../models/NewsCategoryStateModel";
import StoreModel from "../../models/StoreModel";
import NewsDataModel from "../../models/NewsDataModel";

export const selectCategoryNews = (state: StoreModel): NewsDataModel[] => {
  const categoryParameter: string | null = state.parameters.category;

  if (!categoryParameter) {
    return [];
  }

  const categoryState: NewsCategoryStateModel = Object.entries(state).filter(
    ([id, partialState]: [string, NewsCategoryStateModel]): boolean =>
      id === categoryParameter
  )[0][1];

  return Object.entries(categoryState.entities).map(
    ([id, news]: [string, NewsModel]): NewsDataModel => {
      return {
        author: news.author,
        category: categoryParameter,
        id,
        imageUrl: news.urlToImage,
        subtitle: news.description,
        text: news.content,
        title: news.title,
      };
    }
  );
};

export const selectSearchedNews = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.search.entities).map(
    ([id, news]: [string, NewsModel]): NewsDataModel => {
      return {
        author: news.author,
        category: "search",
        id,
        imageUrl: news.urlToImage,
        subtitle: news.description,
        text: news.content,
        title: news.title,
      };
    }
  );
};

export const selectTopBusinessNews = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.business.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "business",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 4);
};

export const selectTopEntertainmentNews = (
  state: StoreModel
): NewsDataModel[] => {
  return Object.entries(state.entertainment.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "entertainment",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 4);
};

export const selectTopGeneralNews = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.general.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "general",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 4);
};

export const selectTopHeadlines = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.headlines.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "headlines",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 3);
};

export const selectTopHealthNews = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.health.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "health",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 4);
};

export const selectTopScienceNews = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.science.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "science",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 4);
};

export const selectTopSportsNews = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.sports.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "sports",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 4);
};

export const selectTopTechnologyNews = (state: StoreModel): NewsDataModel[] => {
  return Object.entries(state.technology.entities)
    .map(
      ([id, news]: [string, NewsModel]): NewsDataModel => {
        return {
          author: news.author,
          category: "technology",
          id,
          imageUrl: news.urlToImage,
          subtitle: news.description,
          text: news.content,
          title: news.title,
        };
      }
    )
    .filter((headline: NewsDataModel, index: number): boolean => index < 4);
};
