import { queryAPI, weakMap } from "./100-weak.js";

  const endpoint = { protocol: 'http', name: 'getUsers' };
  console.log(weakMap.has(endpoint))//.toBe(false);
  queryAPI(endpoint);
  console.log(weakMap.has(endpoint))//.toBe(true);
  console.log(weakMap.get(endpoint))//.toBe(1);
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint))//.toBe(2);
  queryAPI(endpoint);
  queryAPI(endpoint);

queryAPI(endpoint);
