import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
const resvResp = handleResponseFromAPI(promise);
console.log(resvResp);
const promiseR = Promise.reject();
const resvRej = handleResponseFromAPI(promiseR);
console.log(resvRej);
