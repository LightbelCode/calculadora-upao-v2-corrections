$(document).ready(function() {
    $(".promedio").val("0");
    $(".nota4").addClass("disabled");
    $(".btnFinal").click(function() {
      var nota1 = document.forms["calPromedio"]["nota1"].value;
      var nota2 = document.forms["calPromedio"]["nota2"].value;
      var nota3 = document.forms["calPromedio"]["nota3"].value;
      if (nota1 !== "" && nota2 !== "" && nota3 !== "") {
        $(".btnFinal").addClass("disabled");
        $(".btnClear").addClass("disabled");
        $(".nota4").removeClass("disabled");
        var nota = obtenerFinal();
        if (nota > 20) {
          alert("La nota para poder aprobar el curso excede de 20.");
        } else {
          $(".nota4").val(nota);
          calcular();
          if ($(".promedio").val() >= 10.5) {
            mostrarConfeti();
            $(".mensaje").text("!FELICITACIONES APROBASTE!");
          }
        }
      } else {
        alert("Ingresar las 3 primeras notas.");
      }
    });
  
    $(document).on("keyup", "input", function() {
      if (this.value > 20) {
        this.value = "";
      }
      if (this.value.length > 5) {
        alert("Sólo puedes ingresar dos decimales.");
        this.value = "";
      }
    });
  
    $(document).on("mousedown", function() {
      ocultarConfeti();
    });
  
    $(document).on("mouseup", function() {
      ocultarConfeti();
    });
  
    $(document).on("click", function() {
      ocultarConfeti();
    });
  
    $(document).on("scroll", function() {
      ocultarConfeti();
    });
  });
  
  function calcular() {
    var nota1 = document.forms["calPromedio"]["nota1"].value;
    var nota2 = document.forms["calPromedio"]["nota2"].value;
    var nota3 = document.forms["calPromedio"]["nota3"].value;
    var nota4 = document.forms["calPromedio"]["nota4"].value;
    var promedio = document.forms["calPromedio"]["promedio"];
    var resultado = nota1 * 0.25 + nota2 * 0.20 + nota3 * 0.30 + nota4 * 0.25;
    if (!isNaN(resultado)) {
      if (nota1 <= 20 && nota2 <= 20 && nota3 <= 20 && nota4 <= 20) {
        if (resultado > 0) {
          promedio.value = parseFloat(resultado).toFixed(2);
        } else {
          promedio.value = "0";
        }
      } else {
        alert("Ingrese un valor igual o menor que 20");
        promedio.value = "0";
      }
    }
    if ($(".promedio").val() >= 10.5) {
      $(".promedio").addClass("aprobado");
      if ($(".promedio.aprobado")) {
        $(".promedio").css("color", "blue");
        $(".icon").html(
          "<img src='images/smiling-face-joypixels.gif' alt='Aprobado'>"
        );
      }
    } else {
      $(".promedio").removeClass("aprobado");
      $(".promedio").css("color", "red");
      $(".icon").html(
        "<img src='images/crying-face-joypixels.gif' alt='Desaprobado'>"
      );
    }
  }
  
  function obtenerFinal() {
    var nota1 = document.forms["calPromedio"]["nota1"].value;
    var nota2 = document.forms["calPromedio"]["nota2"].value;
    var nota3 = document.forms["calPromedio"]["nota3"].value;
    var suma = nota1 * 0.25 + nota2 * 0.20 + nota3 * 0.30;
    var restante = 10.5 - suma;
    var resultado = restante / 0.25;
    if (resultado % 1 == 0) {
      return resultado;
    } else {
      return Math.trunc(resultado) + 1;
    }
  }
  
  function mostrarConfeti() {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => crearConfeti(i), i * 150); // Aumentar velocidad de caída a 150ms
    }
  }
  
  function crearConfeti(index) {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");
    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.top = Math.random() * 100 + "vh";
    confeti.style.background = getRandomColor();
    confeti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confeti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Ajustar la duración del confeti
    document.body.appendChild(confeti);
    confetis.push(confeti);
  }
  
  function getRandomColor() {
    const colors = ["#FFC107", "#F44336", "#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FF5722"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  let confetis = []; // Arreglo para almacenar los confetis activos
  
  function ocultarConfeti() {
    confetis.forEach(confeti => {
      confeti.remove();
    });
  }
  function desactivarConfeti() {
    confetis = [];
  }

  
  
  // Mostrar section de carga
  window.addEventListener("load", function() {
    document.querySelector(".intermediate-section").style.display = "block";
  });
  