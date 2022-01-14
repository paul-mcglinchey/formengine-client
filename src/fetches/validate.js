const validate = (endpoint, params = null) => {

  var response = {
    data: [],
    errors: null
  };

  const buildQueryString = () => {
    console.log(params);
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

  fetch(`${endpoint}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(err => {
      console.log('Failure:', err);
    })

  return response;
}

export default validate;