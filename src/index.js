import validator from './validator.js';

const form =document.getElementById("boton");
    
form.addEventListener("click",function(e){
     e.preventDefault();
       formulario();
})

function formulario(){
  const nombre=document.getElementById("nombre").value;
  const tarjeta=document.getElementById("tarjeta").value; 
  const mes=document.getElementById("mes").value;
  const año=document.getElementById("año").value;

   //console.log(nombre1); 
   console.log(tarjeta);
   //console.log(mes1);
   //console.log(año1);
   
   const arrayTarjeta = tarjeta.split('');
   console.log(arrayTarjeta);
   
     //reversa de numero
   let reverserArrayTarjeta=arrayTarjeta.reverse();
   let resultado=[]
   console.log(reverserArrayTarjeta);

         //recorrer  el reverseArrayTarjeta
        //cada vuelta que pases vas a agarrar cada numero de casilla y lo vas a convertir
    for(let posicion=0;posicion<reverserArrayTarjeta.length;posicion++){
          console.log(posicion,reverserArrayTarjeta[posicion]);

         //Buscar posicines pares
        if (posicion %2 == 0) {
          // multiplicar posiciones pares ]);
          let multiplicacionPar=reverserArrayTarjeta[posicion]*2
          console.log(multiplicacionPar,"PAR");
          
           //el resultado de la multiplicacion es mayor a 10 sumar digitos
           if(multiplicacionPar>=10){
            let nuevaPosicion=multiplicacionPar.toString(); //convertir en string, para convertir en un numero
         console.log(typeof nuevaPosicion,"nuevaposicion");

             let sumaDigitos=nuevaPosicion.split('').reduce((r, n) => r + parseInt(n), 0);//Se declara nueva variable 
              resultado.push(sumaDigitos);
            } else{
              resultado.push(multiplicacionPar);
            }

          } else{                          //buscar posciones impares
          console.log("IMPAR");
          resultado.push(Number(reverserArrayTarjeta[posicion]))
        //  console.log(resultado,"IMPAR");
        }
          
             //sumar pares e impares
      let sumaPosciones=resultado.reduce((a, b) => a + b, 0);
      console.log(sumaPosciones,"suma");
// resultado dividir 10 (si es igual  a 10 debe de devolver valido y de contario devolver a invalido
             if(sumaPosciones % 10===0){
              alert("su tarjeta es validad")
             }else{
            alert("Su tarjeta no es valida");
             }
    }
       console.log(resultado,"resultado1234")  
       
}  
 //Funcion Maskify
       //maskify:(tarjetaNum)=>{
         //       tarjetaNum=tarjetaNum.split("")
  //for(let posciones=0;posicion<tarjetaNum.length-4;posicion++){
    //  tarjeta[posicion]="#"
 // }
 //tarjetaNum=tarjetaNum.join("")
 //console.log(tarjetaNum,"#");


       
       

  






