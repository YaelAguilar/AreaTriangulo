
let base;
let altura;
let area;

function getValues(){

    let baseElement = document.getElementById("base");
    let alturaElement = document.getElementById("altura");
    base = baseElement.value;
    altura = alturaElement.value;

    area = ( base * altura ) / 2;
    console.log(area);

    let areaElement = document.getElementById("resultado").value = area

}

export{getValues};
