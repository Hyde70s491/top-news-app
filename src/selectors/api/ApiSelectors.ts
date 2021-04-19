import { ApiStatus } from "../../models/NewsCategoryStateModel";
import StoreModel from "../../models/StoreModel";

export const selectBusinessApi = (state: StoreModel): ApiStatus =>
  state.business.apiStatus;

export const selectEntertainmentApi = (state: StoreModel): ApiStatus =>
  state.entertainment.apiStatus;

export const selectGeneralApi = (state: StoreModel): ApiStatus =>
  state.general.apiStatus;

export const selectHeadlinesApi = (state: StoreModel): ApiStatus =>
  state.headlines.apiStatus;

export const selectHealthApi = (state: StoreModel): ApiStatus =>
  state.health.apiStatus;

export const selectScienceApi = (state: StoreModel): ApiStatus =>
  state.science.apiStatus;

export const selectSearchApi = (state: StoreModel): ApiStatus =>
  state.search.apiStatus;

export const selectSportsApi = (state: StoreModel): ApiStatus =>
  state.sports.apiStatus;

export const selectTechnologyApi = (state: StoreModel): ApiStatus =>
  state.technology.apiStatus;
