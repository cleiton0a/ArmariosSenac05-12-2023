async function authenticate() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usuario = {
    usuario: username, senha: password
  }
  const headers = {
    "Content-Type": "application/json", "accept": "application/json"
  }
  const response = await fetch("http://www.armariosapi.somee.com/api/Usuarios/Login", { headers: headers, method: "POST", body: JSON.stringify(usuario) })
  const responsejson = await response.json()
  console.log(responsejson)

  if (responsejson.token){
    localStorage.setItem('token',responsejson.token)
      window.location.href="/telalerqr"
  }
}


const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  authenticate()
})
