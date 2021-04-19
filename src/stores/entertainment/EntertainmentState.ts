import NewsCategoryStateModel, {
  ApiStatus,
} from "../../models/NewsCategoryStateModel";

export const initialState: NewsCategoryStateModel = {
  apiStatus: ApiStatus.Idle,
  entities: {},
};
