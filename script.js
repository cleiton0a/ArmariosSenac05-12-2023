async function authenticate() {
  try {
    // Get values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Create user object for authentication
    const usuario = {
      usuario: username,
      senha: password
    };

    // Set headers for the API request
    const headers = {
      "Content-Type": "application/json",
      "accept": "application/json"
    };

    // Make the API request using HTTPS
    const response = await fetch("https://www.armariosapi.somee.com/api/Usuarios/Login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(usuario)
    });

    // Check if the response is not OK
    if (!response.ok) {
      // Handle non-successful responses
      const errorMessage = await response.text();
      throw new Error(`Error: ${response.status} - ${errorMessage}`);
    }

    // Parse the JSON response
    const responsejson = await response.json();
    console.log(responsejson);

    // If authentication is successful, store the token and redirect
    if (responsejson.token) {
      localStorage.setItem('token', responsejson.token);
      window.location.href = "/telalerqr";
    }
  } catch (error) {
    console.error('Error during authentication:', error);
  }
}

// Attach the event listener to the form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  authenticate();
});


