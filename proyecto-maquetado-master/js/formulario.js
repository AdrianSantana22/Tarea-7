const expresiones={
	username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	celu: /^\d{7,14}$/, // 7 a 14 numeros.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos = {
	usuario: false,
	telefono: false,
	password: false,
	correo: false
}

function Registro() {


    // Obtenemos los valores ingresados en los campos de nombre de usuario, telefono, contraseña y correo
    var username = document.getElementById("username").value;
    var celu = document.getElementById("cel").value;
    var password = document.getElementById("password").value;
    var correo = document.getElementById("email").value;
    // Comprobamos si los campos están vacíos

    if (username == "" && password == "" && celu=="" && correo=="" ) {
      document.getElementById("error-message").innerHTML = "Por favor, complete todos los campos";

      return false;
    }else
      alert("Registro de sesión exitoso");
	  window.location="PaginaWeb.html";
    
  }