
// Dejo en la consola la lista de lineas y condiciones para luego impactarlas en el HTML y que el cliente pueda saber 
// y elegir cual le interesa y si califica, para luego ingresar en el calculador y saber cual seria su cuota

const listaCondiciones=[
    {
        nombre: "Adquisición Vivienda Nueva",
        montoMaximo: 10000000,
        ingresoMinimo: 40000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
    {
        nombre: "Adquisición Vivienda Usada",
        montoMaximo: 7000000,
        ingresoMinimo: 30000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
    {
        nombre: "Construcción",
        montoMaximo: 5000000,
        ingresoMinimo: 20000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
    {
        nombre: "Construcción con Terreno",
        montoMaximo: 7500000,
        ingresoMinimo: 35000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
        {
        nombre: "Refacción",
        montoMaximo: 100000,
        ingresoMinimo: 20000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 48,
        plazoMaximaMeses: 96
    },
    {
        nombre: "Ampliación",
        montoMaximo: 3000000,
        ingresoMinimo: 50000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 48,
        plazoMaximaMeses: 120
    },
    {
        nombre: "Materiales",
        montoMaximo: 500000,
        ingresoMinimo: 20000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 24,
        plazoMaximaMeses: 60
    },
];


//pongo en el HTML las lineas que tengo disponibles

//Accedo al DOM a traves del ID
let lineas = document.createElement("div");
lineas.className="card textCenter alineaCards";


    //Para cada linea del array voy a tener una card
    for (const linea of listaCondiciones){
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="container-fluid">
                <div class="row">
                    <div class="alineaCards  margenCards">
                        <div class="col-lg-12 ">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title">${linea.nombre}</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        `;
        lineas.appendChild(card);
    }


let insertaLineas=document.getElementById("lineas");
insertaLineas.appendChild(lineas);

//le inserto formato al titulo de condiciones y le cambio el texto
    let titulo=document.getElementById("tituloCondiciones");
    titulo.innerText="Condiciones de las lineas";
    tituloCondiciones.className = "textCenter tamañoTitulos margenCards";




//tabla para condiciones de cada linea

let lista = document.createElement("div");

//Para cada linea del array voy a tener una box
    for (const producto of listaCondiciones){
        let box = document.createElement("div");
        box.innerHTML = `
        <div class="container-fluid">
            <div class="row">
            <div class="alineaCards">
            <div class="col-md-12">
                <div class="card card-body margenCards">
                    <div class="textCenter">
                        <span class="card-title tamañoTitulos2 ">${producto.nombre}</span>
                    </div>
                    <ul>
                        <li class="card-text alineaInfo">Edad entre ${producto.edadMinima} y ${producto.edadMaxima}</li>
                        <li class="card-text alineaInfo">Plazo ${producto.plazoMinimoMeses} / ${producto.plazoMaximoMeses}meses</li>
                        <li class="card-text alineaInfo">Financiación hasta $ ${producto.montoMaximo}</li>
                        <li class="card-text alineaInfo">Ingreso minimo $ ${producto.ingresoMinimo}</li>
                    </ul>
                    <button>Más info</button>
                </div>
            </div>
            </div>
            </div>
        </div>
        `;
        lista.appendChild(box);
    }


let insertaLista=document.getElementById("lista");
insertaLista.appendChild(lista);

lista.className= "alineaCards";


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

        break;

    }

    else {

        alert("Comunicate con un representate para revisar tu casa");

        break;

    }

}
