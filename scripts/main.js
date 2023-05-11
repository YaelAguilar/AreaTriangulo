import { getValues } from "./getValues.js";

const formulario = document.querySelector("#formulario");

formulario.addEventListener( "submit", validarFormulario )

function validarFormulario(e){
    e.preventDefault();
    console.log('calculando...')

    getValues();
}
