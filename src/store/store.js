import { createStore } from "redux";

import Sun from "../assets/Sun Yellow Star Giant.G03.watermarked.2k.png";
import { planets } from "../data/planets";

const initialState = {
  text: "Hello World",
  planets: planets,
  central:  {
    id: 11,
    name: "Sun",
    img: Sun,
    info: {
      temperature: "5,500 °C",
      radius: "696,340 км",
    },
    description: "Солнце — центральная звезда Солнечной системы, обеспечивающая жизнь на Земле.",

  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CENTRAL_PLANET":
      return { ...state, central: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);
