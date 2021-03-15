import countries from "../../constants/Countries";
import { parametersState } from "./ParametersModels";

const initialCountry = countries.find(
  (country) => country.name === "Great Britain"
);

export const initialState: parametersState = {
  country: initialCountry?.id,
};
