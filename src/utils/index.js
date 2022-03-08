const fetchApi = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
};
