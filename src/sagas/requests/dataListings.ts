const url = "https://jsonplaceholder.typicode.com/users";
const dataListings = () =>
  fetch(url, {
    method: "GET"
  })
    .then((response) => response.json())
    .catch((err) => err.message);
export default dataListings;
