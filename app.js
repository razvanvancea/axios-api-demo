const axios = require("axios");

(async () => {
  getEmployees();
})();

function getEmployees() {
  axios
    .get("https://qa-automation-practice.herokuapp.com/api/v1/employees")
    .then(function (response) {
      response.data.forEach((element) => {
        console.log(element.firstName);
      });
    })
    .catch(function (error) {
      //handle error
      console.log(error);
    });
}

// GET with JWT Token
function getUsers() {
  axios
    .get("http://localhost:8787/api/users", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// GET with JWT Token v2
function getUsersV2() {
  let config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    },
  };

  axios
    .get("http://localhost:8787/api/users", config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// SETTING DEFAULT GLOBAL CONFIG
function getUsersDefaultGlobalConfig() {
  axios.defaults.headers.common["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  axios
    .get("http://localhost:8787/api/users")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Post with params, v1
function createEmployee() {
  axios.post(
    "https://qa-automation-practice.herokuapp.com/api/v1/employees",
    {
      firstName: "Jean",
      lastName: "Pablo",
      email: "jp@yahoo.com",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// Post with params, v2
function createEmployeeV2() {
  axios({
    method: "post",

    url: "https://qa-automation-practice.herokuapp.com/api/v1/employees",
    data: {
      firstName: "Claude",
      lastName: "Valdes",
      email: "cvaldes@yahoo.com",
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
