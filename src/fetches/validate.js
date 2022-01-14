const axios = require('axios');

const validate = async (endpoint, params = null, setter = null) => {

  const buildQueryString = () => {
    let kvps = Object.entries(params);
    let queryString = "";

    kvps.forEach((k, i) => {
      if (k[1].length > 0) {
        if (i === 0) {
          queryString += `${k[0]}=${k[1]}`;
        } else {
          queryString += `&${k[0]}=${k[1]}`;
        }
      }
    })

    return queryString;
  }

  async function getValidation() {
    try {
      const response = await axios.get(`${endpoint}${buildQueryString()}`);
      setter(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  await getValidation();
}

export default validate;