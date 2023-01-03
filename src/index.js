import validator from "./validator.js";

const form = document.getElementById("boton");

form.addEventListener("click", function (e) {
  e.preventDefault();
  formulario();
});

function formulario() {
  const nombre = document.getElementById("nombre").value;
  const tarjeta = document.getElementById("tarjeta").value;
  const mes = document.getElementById("mes").value;
  const año = document.getElementById("año").value;

  //console.log(nombre1);
  //console.log(tarjeta);
  //console.log(mes1);
  //console.log(año1);

  const arrayTarjeta = tarjeta.split("");
  //console.log(arrayTarjeta);

  //reversa de numero
  let reverserArrayTarjeta = arrayTarjeta.reverse();
  let resultado = [];
  //console.log(reverserArrayTarjeta);

  //declarion de variable para llamar a fuera de for
  let sumaPosciones;
  //recorrer  el reverseArrayTarjeta
  //cada vuelta que pases vas a agarrar cada numero de casilla y lo vas a convertir
  for (let posicion = 0; posicion < reverserArrayTarjeta.length; posicion++) {
    // console.log(posicion, reverserArrayTarjeta[posicion]);
    
    //Buscar posicines pares
    if (posicion % 2 == 0) {
      // multiplicar posiciones pares ]);
      let multiplicacionPar = reverserArrayTarjeta[posicion] * 2;
      // console.log(multiplicacionPar, "PAR");

      //el resultado de la multiplicacion es mayor a 10 sumar digitos
      if (multiplicacionPar >= 10) {
        let nuevaPosicion = multiplicacionPar.toString(); //convertir en string, para convertir en un numero
        console.log(nuevaPosicion,"nuevaposicion");
        //transporformar nueva posicion que es un numero a un array
        let arrayPosicion = nuevaPosicion.split("");
        console.log(arrayPosicion);

        //Crear una variable para sumar la posicion cero y uno de arrayPosicion
        let suma=arrayPosicion;
        // buscar como sumar los posiciones de un array
        arrayPosicion=parseInt(suma[0]) + parseInt(suma[1]);
        //para ambas posciones debo transformar a numero los string
       let numeros=arrayPosicion.toString();
       
        console.log(numeros,"sumaMultiplicacion");

        //resultado.push(aqui va a el nombre de la varible donde guardare la suma);*/
        // let sumaTotal=numeros;

         //sumaTotal= numeros  + reverserArrayTarjeta
         ;
         //console.log(sumaTotal,"sumaMultiplicacion");




        /*let sumaDigitos = nuevaPosicion
          .split("")
          .reduce((r, n) => r + parseInt(n), 0); //Se declara nueva variable
        resultado.push(sumaDigitos);*/
      } else {
        resultado.push(multiplicacionPar);
      }
    } else {
      //buscar posciones impares
      //console.log("IMPAR");
      resultado.push(Number(reverserArrayTarjeta[posicion]));
      //  console.log(resultado,"IMPAR");
    }

    //sumar pares e impares
    //+++sumaPosciones = resultado.reduce((a, b) => a + b, 0);
    //++++console.log(sumaPosciones, "suma");
  }

  // resultado dividir 10 (si es igual  a 10 debe de devolver valido y de contario devolver a invalido
  if (sumaPosciones % 10 === 0) {
    alert("su tarjeta es validad");
  } else {
    alert("Su tarjeta no es valida");
  }
  console.log(resultado, "resultado1234");
}

//tarjetaNum=tarjetaNum.join("")
//console.log(validator.maskify("4137894711752094"));
