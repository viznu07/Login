import dotenv from 'dotenv';
dotenv.config();

let config = {};

config.api_url = process.env.REACT_APP_API_ENDPOINT;
config.graphql = process.env.REACT_APP_GQL_ENDPOINT;
config.socket = process.env.REACT_APP_SOCKET;

export default config;
