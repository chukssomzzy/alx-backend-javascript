import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleUserSignUp(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => res
      .map((res) => ({ status: res.status, value: res.value ? res.value : res.reason })));
}
