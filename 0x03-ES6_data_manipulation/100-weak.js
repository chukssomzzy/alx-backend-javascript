export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint === 'object' && typeof endpoint.name === 'string' && typeof endpoint.protocol === 'string') {
    const calls = weakMap.get(endpoint) || 0;
    weakMap.set(endpoint, calls + 1);

    if (calls >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
