import NewsModel from "./NewsModel";

interface NewsCategoryStateModel {
  readonly entities: { [id: string]: NewsModel };
}

export default NewsCategoryStateModel;
