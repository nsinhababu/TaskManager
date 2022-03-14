const BASE_URL = 'https://devza.com/tests/tasks';

export const fetchApi = ({ url, method, reqObj }) => {
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

export const deleteAPI = ({ url, formData }) => {
  const headers = {
    AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
  };
  debugger;
  return fetch(`${BASE_URL}/${url}`, {
    method: 'POST',
    headers,
    body: formData,
    redirect: 'follow',
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
};
