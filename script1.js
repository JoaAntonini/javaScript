
//Defino variables
// IngresoMinimo = 20000; y antiguedadMinima = 3; 



let IngresoNetoFamiliar;
let AntiguedadLaboral;

for(let i=1; i<=10; i++){
    IngresoNetoFamiliar= parseInt(prompt("Ingreso Neto Familiar"));
    AntiguedadLaboral = parseInt(prompt("Antiguedad Laboral"));
    if(IngresoNetoFamiliar < 20000 && AntiguedadLaboral<3){
        alert("No califica para esta linea");
        break;
    }
    else if(IngresoNetoFamiliar >=20000 && IngresoNetoFamiliar < 300000 && AntiguedadLaboral>=3){
        alert("El monto maximo de tu crédito es de $ "+  ((IngresoNetoFamiliar * 0.35) * 20));
        break;
    }
    else if(IngresoNetoFamiliar >=300000 && IngresoNetoFamiliar < 1000000 && AntiguedadLaboral>=3){
        alert("Por tu ingreso podes acceder al credito plus por $ "+ ( ((IngresoNetoFamiliar * 0.35) * 20) * 1.2));
        break;
    }
    else alert("Comunicate con un representate para revisar tu casa");
    break
}


