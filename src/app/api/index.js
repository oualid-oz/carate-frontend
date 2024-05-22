import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const API_ROUTES = {
  auth: {
    login: "/login",
    signup: "/signup",
  },
  users: "/users",
  cars: {
    root: "/cars",
    user: "/cars/user",
  }
};
// Login API
export const authenticate = (payload) =>
  API.post(`${API_ROUTES.auth.login}`, payload, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then((res) => res.data);
// Signup API
export const createUser = (payload) => {
  return API.post(`${API_ROUTES.auth.signup}`, payload).then((res) => res.data);
};
// Add new car API
export const addNewCar = ({ token, payload }) =>
  API.post(`${API_ROUTES.cars.root}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.data);
// get cars by user API
export const fetchCarsByUser = ({ username, token }) =>
  API.get(`${API_ROUTES.cars.user}/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.data);
