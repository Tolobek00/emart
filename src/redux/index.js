import { type } from "@testing-library/user-event/dist/type";

export const addCart = (porduct) => {
  return {
    type: "ADDITEM",
    payload: porduct,
  };
};
export const delCart = (porduct) => {
  return {
    type: "DELITEM",
    payload: porduct,
  };
};
