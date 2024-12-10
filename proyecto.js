function smoothScroll(event, sectionId) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
    });
}

const ctm=document.querySelector("#consumo");
const ctd=document.querySelector(".consumo-diario");
const nps=document.querySelector(".num-panel");
const bat=document.querySelector(".num-bat");
const calculate = document.querySelector("#calculate");
const resultados = document.querySelector("#resultados");
//const reset = document.querySelector("#reset");
//const form = document.querySelector("form");

calculate.addEventListener("click", (e) => {
    e.preventDefault();

    if (!ctm.value || ctm.value == 0) {
        resultados.classList.remove("d-block");
        resultados.classList.add("d-none");
        alert("Por favor ingresa un valor válido en el consumo.");
        return;
    }

    resultados.classList.remove("d-none");
    resultados.classList.add("d-block");
   
    
    let wp=600;
    let hsp=4;
    let wbat=1800;
    let consumoDiario = Math.ceil((ctm.value * 1000) / 30);
    ctd.value = `${consumoDiario} wh`;
    let numPaneles = Math.ceil(consumoDiario * 1.3 / (hsp * wp));
    nps.value = `${numPaneles} Paneles solares de 600 Vatios`;
    let numBaterias = Math.ceil(consumoDiario * 1.3 / wbat);
    bat.value = `${numBaterias} baterías de 150AH`;

    /* ctd.value=Math.ceil(ctm.value * 1000 / 30);
    ctd.value = `${consumoDiario} pesos`;
    nps.value=Math.ceil(ctd.value * 1.3 / (hsp * wp));
    bat.value=Math.ceil(ctd.value * 1.3 / (wbat)); */
});
