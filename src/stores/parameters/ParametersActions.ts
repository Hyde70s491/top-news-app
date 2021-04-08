import ActionModel from "../../models/ActionModel";

const PARAMETERS_ACTION_DOMAIN: string = "parameters";

export const SET_CATEGORY: string = `${PARAMETERS_ACTION_DOMAIN}/setCategory`;
export const UPDATE_COUNTRY: string = `${PARAMETERS_ACTION_DOMAIN}/updateCountry`;

export const setCategory = (categoryName: string): ActionModel<string> => {
  return {
    type: SET_CATEGORY,
    payload: categoryName,
  };
};

export const updateCountry = (countryId: string): ActionModel<string> => {
  return {
    type: UPDATE_COUNTRY,
    payload: countryId,
  };
};

export type ParametersActionTypes = string;
