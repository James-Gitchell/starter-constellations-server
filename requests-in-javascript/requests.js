/*const axios = require("axios");

const url = "http://localhost:5000/constellations"
axios
     .get(url)
     .then((response) => {
         console.log(response.status);
         console.log(response.statusText);
         console.log(response.data);
     })
     .catch((error) => {
         console.log(error.message);
     });*/

     const axios = require("axios");

const constellationsUrlL = "http://localhost:5000/constellations";
/*
axios
    .get(BASE_URL)
      .then(({data})=> {
          const exists = data.find(({ name }) => name === localStorage.name);
          if (exists) throw `Constellation "${leo.name}" already exists.`
          return axios
                      .post(BASE_URL, leo)
                        .then(({ data }) => console.log(data));
                          })
                          .catch(console.log);*/

axios
  .get(constellationsUrl)
  .then(({ data }) => {
    const exists = data.find(({ name }) => name === leo.name);
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios
      .post(constellationsUrl, leo)
      .then(({ data }) => console.log(data));
  })
  .catch(console.log);
