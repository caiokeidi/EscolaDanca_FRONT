import axios from "axios";
// import jQuery from "jquery";

// var csrftoken = getCookie("csrftoken");

var postData = {
  username: "caiokeidi",
  password: 12345678,
};

// let axiosConfig = {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     "X-CSRFToken": csrftoken,
//   },
// };

export const login = async (setFunc) => {
  await axios
    .post("http://localhost:8000/aluno/login/", postData)
    .then((response) => {
      setFunc(response.data);
    });
};

export const getCursos = async(setFunc, header) => {
    await axios.get('http://localhost:8000/cursos/', header).then((response) => {
        setFunc(response.data)
    });
};


// function getCookie(name) {
//   var cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     var cookies = document.cookie.split(";");
//     for (var i = 0; i < cookies.length; i++) {
//       var cookie = jQuery.trim(cookies[i]);
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }
