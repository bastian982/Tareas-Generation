function changeName(){
   let nombre = prompt("Ingresa tu nombre");
   if (nombre != null && nombre != ""){
    document.getElementById("nombre").textContent ="Hola " + nombre;
   }
}

