async function authenticate() {
  try {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usuario = {
      usuario: username,
      senha: password
    };

    const headers = {
      "Content-Type": "application/json",
      "accept": "application/json"
    };

    // Use Axios to make the API request
    const response = await axios.post("https://www.armariosapi.somee.com/api/Usuarios/Login", usuario, {
      headers: headers
    });

    // Check if the response is not OK
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Parse the JSON response
    const responsejson = response.data;
    console.log(responsejson);

    // If authentication is successful, store the token and redirect
    if (responsejson.token) {
      localStorage.setItem('token', responsejson.token);
      window.location.href = "/telalerqr";
    }
  } catch (error) {
    console.error('Error during authentication:', error.message);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  authenticate();
});



