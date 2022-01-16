const BASE_VALIDATOR_URL = process.env.REACT_APP_VALIDATOR_API_URL || 'http://localhost:7076/api/';
const BASE_FORMENGINE_URL = process.env.REACT_APP_FORMENGINE_API_URL || 'http://localhost:3001/api/';

const endpoints = {
  "validate": BASE_VALIDATOR_URL + 'helloworld',
  "forms": BASE_FORMENGINE_URL + 'forms',
  "sections": BASE_FORMENGINE_URL + 'forms/sections',
  "fields": BASE_FORMENGINE_URL + 'forms/fields'
}

export default endpoints;