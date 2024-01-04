export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const employee of Object.values(report.allEmployees)) {
        yield* employee;
      }
    },
  };
}
