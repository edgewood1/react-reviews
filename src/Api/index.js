/**
 * Api Call
 * @param {string | object | undefined} body - the id or body for a get-with-param or put request
 * @param {string | undefined} method - currently only used as a GET or PUT
 * @returns {Promise}
 * @description this currently handles 3 options
 * if body & method is undefined: GET /
 * if body is a string: GET /:id
 * if body is an object PUT / with body in payload
 */

const Api = async (body, method = 'GET') => {
  if (body) {
    var payload = typeof body === 'string' ? body : body.id;
  }

  let url =  `http://localhost:8000/reviews`
  url = payload ? `${url}/${payload}` : url;

  const options = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  } 

  if (typeof body !== 'string' && method!=='GET') options.body = JSON.stringify(body)
  
  try{
    const response = await fetch(url, options );
    return await response.json();
  } catch(error) {
    console.log(error);
    return error
  }
}

export default Api;