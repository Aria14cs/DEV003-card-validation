const validator = {
  // Funcion Maskify
  maskify: function (tarjeta2) {
    tarjeta2 = tarjeta2.split("");

    for (let posicion = 0; posicion < tarjeta2.length - 4; posicion++) {
      tarjeta2[posicion] = "#";
    }
    return tarjeta2.join("");
  },
};

export default validator;

 
