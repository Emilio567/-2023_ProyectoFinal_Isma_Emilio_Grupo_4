const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    if (passwordInput.getAttribute('type') === 'password') {
       passwordInput.setAttribute('type', 'text');
        this.setAttribute('src', ojoabierto.png);
        this.setAttribute('alt', '.');
    } else {
       passwordInput.setAttribute('type', 'password');
       this.setAttribute('src', ojocerrado.png);
        this.setAttribute('alt', '.');
 }
});

function guardarDatos(event) {
    event.preventDefault(); 
  
    const usuario = document.getElementById("usuario").value;
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const ck1 = document.getElementById("ck1").checked;
    const ck2 = document.getElementById("ck2").checked;
  
    
    if (password1 !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }
  
    
    if (!email.includes("@")) {
      alert("El correo electrónico debe contener el símbolo @");
      return;
    }
  
    
    if (!ck2) {
      alert("Debes aceptar las condiciones generales");
      return;
    }
  
    
    const usuarioObj = {
      usuario: usuario,
      nombre: nombre,
      fecha: fecha,
      email: email,
      password: password1,
      recibirInformacion: ck1,
      aceptarCondiciones: ck2
    };
  
    const usuarios = [];
    usuarios.push(usuarioObj);
  
    console.log(usuarios);
  }
  
  function mostrarPassword(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
  
    if (input.type === "password") {
      input.type = "text";
      toggle.src = "ojoabierto.png";
    } else {
      input.type = "password";
      toggle.src = "ojocerrado.png";
    }
  }