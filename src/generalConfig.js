const configuration = {
  development: {
    apiUrl: "http://localhost:5000"
  }
};
const environment = process.env.REACT_APP_TARGET_ENV || "development";

export default configuration[environment];
