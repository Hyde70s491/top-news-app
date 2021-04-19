import NewsCategoryStateModel, {
  ApiStatus,
} from "../../models/NewsCategoryStateModel";

export const initiaState: NewsCategoryStateModel = {
  apiStatus: ApiStatus.Idle,
  entities: {},
};
