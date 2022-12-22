const validator = {
       // Funcion Maskify
  maskify:function(tarjetaNum){
     tarjetaNum=tarjetaNum.split("")

     for(let posicion=0;posicion<tarjetaNum.length-4;posicion++){
     tarjetaNum[posicion]="#"
  
     }
     return tarjetaNum
 }
};

export default validator;