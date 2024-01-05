import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleUserSignUp(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const resArray = results.map((result) => ({
        status: result.status,
        value: result.value ? result.value : result.reason,
      }));
      return resArray;
    });
}
