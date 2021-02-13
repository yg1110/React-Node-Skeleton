import RestService from "./restApi";

export default new RestService(
  process.env.REACT_APP_RESTAPI_SERVER_HOST,
  process.env.REACT_APP_RESTAPI_BASE_URL
);
