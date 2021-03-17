export interface Country {
  readonly flag: string;
  readonly name: string;
}

const countries: { [id: string]: Country } = {
  au: {
    flag: "/images/Australia.png",
    name: "Australia",
  },
  ca: {
    flag: "/images/Canada.png",
    name: "Canada",
  },
  gb: {
    flag: "/images/GreatBritain.png",
    name: "Great Britain",
  },
  ie: {
    flag: "/images/Ireland.png",
    name: "Ireland",
  },
  nz: {
    flag: "/images/NewZealand.png",
    name: "New Zealand",
  },
  us: {
    flag: "/images/UnitedStates.png",
    name: "United States",
  },
  za: {
    flag: "/images/SouthAfrica.png",
    name: "South Africa",
  },
};

export default countries;
