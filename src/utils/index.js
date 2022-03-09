export const fetchApi = (url) => {
  const BASE_URL = 'https://devza.com/tests/tasks';
  const headers = {
    AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
    'Content-Type': 'application/json',
  };

  return fetch(`${BASE_URL}/${url}`, {
    headers,
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
};
