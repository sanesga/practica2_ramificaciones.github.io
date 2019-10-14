function validarDNI() {
  var datos = new String();
  datos = document.getElementById("dni").value;

  var dni = datos.trim();
  console.log(dni);
  console.log(dni.length);

  if (!dni == "") {
    //si no está vacío
    if (dni.length == 9) {
      //verificamos longitud

      alert("Longitud correcta");

      if (/^\d{8}[a-zA-Z]$/.test(dni)) {
        //verificamos el patrón (8 dígitos y una letra)

        alert("Patrón correcto");

        var letra = dni.charAt(dni.length - 1); //verificamos que la letra sea correcta
        console.log(letra);

        var numeroDni = dni.substring(0, dni.length - 1);
        console.log(numeroDni);

        var resto = numeroDni % 23;

        console.log("Resto: " + resto);

        var asignacion = new Map([
          [0, "T"],
          [1, "R"],
          [2, "W"],
          [3, "A"],
          [4, "G"],
          [5, "M"],
          [6, "Y"],
          [7, "F"],
          [8, "P"],
          [9, "D"],
          [10, "X"],
          [11, "B"],
          [12, "N"],
          [13, "J"],
          [14, "Z"],
          [15, "S"],
          [16, "Q"],
          [17, "V"],
          [18, "H"],
          [19, "L"],
          [20, "C"],
          [21, "K"],
          [22, "E"]
        ]);

        var letraCorrecta = asignacion.get(resto);

        if (letraCorrecta == letra) {
          alert("La letra es correcta");
          alert("El DNI es correcto");
        } else {
          alert(
            "la letra es incorrecta. La letra correcta para este dni es: " +
              letraCorrecta
          );
        }
      } else {
        alert("Patrón incorrecto");
      }
    } else {
      alert("Longitud incorrecta");
    }
  } else {
    alert("El campo dni no puede estar vacío");
  }
}
