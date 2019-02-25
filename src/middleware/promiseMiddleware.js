import axios from "axios";

export default () => {
  return next => action => {
    console.log("[*] promiseMiddleware : action = ", action);

    const { promise, type, ...rest } = action;
    console.log("[*] promiseMiddleware (before)");

    next({ ...rest, type: `${type}_REQUEST` });

    return axios({
      method: promise.method,
      url: promise.url,
      data: promise.data
    })
      .then(result => {
        console.log(`[+] promiseMiddleware (after): ${type}_SUCCESS`);
        console.log(result);
        console.log(rest);
        next({ ...rest, result, type: `${type}_SUCCESS` });
      })
      .catch(error => {
        console.log(`[+] promiseMiddleware (after): ${type}_FAILURE`);
        next({ ...rest, error, type: `${type}_FAILURE` });
      });
  };
};
