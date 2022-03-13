export const fetchApi = ({ url, method, reqObj }) => {
  const BASE_URL = 'https://devza.com/tests/tasks';

  const headers = {
    AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
    'Content-Type': 'application/json',
    method,
  };
  return fetch(`${BASE_URL}/${url}`, {
    headers,
    body: reqObj ? reqObj : null,
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
};
