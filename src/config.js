import dotenv from 'dotenv';

let config = {};

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "production") {
  config.api_url = process.env.REACT_APP_PROD_API_ENDPOINT;
  config.graphql = process.env.REACT_APP_PROD_GQL_ENDPOINT;
  config.socket = process.env.REACT_APP_PROD_SOCKET;
} else if (NODE_ENV === "development") {
  config.api_url = process.env.REACT_APP_DEV_API_ENDPOINT;
  config.graphql = process.env.REACT_APP_DEV_GQL_ENDPOINT;
  config.socket = process.env.REACT_APP_DEV_SOCKET;
} else {
  config.api_url = process.env.REACT_APP_LOCAL_API_ENDPOINT;
  config.graphql = process.env.REACT_APP_LOCAL_GQL_ENDPOINT;
  config.socket = process.env.REACT_APP_LOCAL_SOCKET;
}

export default config;
