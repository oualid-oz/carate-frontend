import { defineMessages } from "react-intl";

export const scope = "app.containers";

export default defineMessages({
  addNewCarTitle: {
    id: `${scope}.title`,
    defaultMessage: "Add new car",
  },
  editCarTitle: {
    id: `${scope}.title`,
    defaultMessage: "Edit car",
  },
  showCarTitle: {
    id: `${scope}.title`,
    defaultMessage: "Car details",
  },
  carName: {
    id: `${scope}.carName`,
    defaultMessage: "Name",
  },
  carYear: {
    id: `${scope}.carYear`,
    defaultMessage: "Year",
  },
  carColor: {
    id: `${scope}.carColor`,
    defaultMessage: "Color",
  },
  carPrice: {
    id: `${scope}.carPrice`,
    defaultMessage: "Price",
  },
  carDescription: {
    id: `${scope}.carDescription`,
    defaultMessage: "Description",
  },
  carImage: {
    id: `${scope}.carImage`,
    defaultMessage: "Image",
  },
  required: {
    id: `${scope}.required`,
    defaultMessage: "This field is required",
  },
  addCar: {
    id: `${scope}.addCar`,
    defaultMessage: "Add car",
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: "Cancel",
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: "Car added successfully",
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: "Error adding car",
  },
  ok: {
    id: `${scope}.ok`,
    defaultMessage: "Ok",
  },
  isNumber: {
    id: `${scope}.isNumber`,
    defaultMessage: "This field must be a number",
  },
  isDecimal: {
    id: `${scope}.isDecimal`,
    defaultMessage: "This field must be a float number",
  },
  isLink: {
    id: `${scope}.isLink`,
    defaultMessage: "This field must be a link",
  },
  isYear: {
    id: `${scope}.isYear`,
    defaultMessage: "This field must be a year",
  },
});
