

//Armo la lista de lineas de credito disponibles

const listaLineas = [ "Adquisición Vivienda", "Construcción", "Construcción con Terreno", "Refacción", "Ampliación"];
console.log(listaLineas);

//Agrego una nueva linea al final (push) porque en orden de prioridad (monto a prestar) es la menos importante

listaLineas.push("Materiales");
console.log(listaLineas);

//elimino la linea adquisición porque voy a generar 2 lineas una para vivienda usada y una para nueva

listaLineas.shift();

listaLineas.unshift("Adquisición Vivienda Nueva","Adquisición Vivienda Usada");

//verifico como queda mi lista final

console.log(listaLineas);

for (let i = 0; i < listaLineas.length; i++) {
    console.log("Linea " + (i+1) + " : " + listaLineas[i]);
}

//creo 2 lista para mostrar prestamos Hipotecarios con Hipoteca x un lado y prestamos personales por otro

const listaHipotecarios = listaLineas.slice(0,4);

//busco que n° de indice es Refacción para armar la de personales
console.log( listaLineas.indexOf("Refacción"));//4

const listaPersonales = listaLineas.slice(4,7);

//Genero la info para que el usuario las vea

alert("Tenemos " + listaLineas.length + " lineas de creditos disponibles para ofrecerte: " + listaLineas.join(", "));

 document.write("<h2> Tenemos " + listaLineas.length + " lineas de creditos disponibles para ofrecerte: " + listaLineas.join(", ") +"</h3>" );

alert("Estas lineas son con Hipoteca: " + listaHipotecarios);
alert("Estas lineas son con Pagaré: "+ listaPersonales);

//Le consultamos que esta buscando para saber si tenemos esa linea
//armo un array para la tasa que mantiene el orden de la lista de las lineas
const tasaInteres = [25, 30, 22,26, 40, 46, 50];

let linea=prompt("Que linea te interesa");
let check = listaLineas.indexOf(linea);

if(check != -1){
    alert("Tenemos una linea para " + linea + " con una tasa del " + tasaInteres[check] + "% anual que puede servirte");
}else{
    alert("Por el momento no contamos con una linea que pueda servirte")
}

//pedimos al cliente que ingrese la linea que le interesa y calcule su cuota

function calcular(capital, Interes, anos) {

    let cuota = ((capital / anos / 12) * (1 + Interes)).toFixed(2);

    alert("Para un prestamo de " + capital + " a " + (anos * 12) + " meses y una tasa del 20%, su cuota mensual sera de " + cuota);

    document.write("<h4> La cuota Mensual sera de " + cuota + "</h4>");

}


for (let i = 1; i <= 10; i++) {

    let IngresoNetoFamiliar = parseInt(prompt("Ingreso Neto Familiar"));

    let AntiguedadLaboral = parseInt(prompt("Antiguedad Laboral"));

    if (IngresoNetoFamiliar < 20000 && AntiguedadLaboral < 3) {

        alert("No califica para esta linea");

        break;

    }

    else if (IngresoNetoFamiliar >= 20000 && IngresoNetoFamiliar < 1000000 && AntiguedadLaboral >= 3) {

        let capital = prompt("Introduzca el monto del prestamo a solicitar \n Monto minimo 2000000\n Monto máximo 10000000");

        let Interes = 0.2;

        let anos = prompt("Lo va a pagar en 10 o 20 años");

        calcular(capital, Interes, anos);

        continue;

    }

    else {

        alert("Comunicate con un representate para revisar tu casa");

        break;

    }

}


