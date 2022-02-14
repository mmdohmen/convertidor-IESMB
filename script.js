// mensaje por CONSOLA
console.log("%cCOTIZADOR", "color:green; font-size:x-large")
console.info("debes ACTUALIZAR las CONSTANTES en forma PERIODICA")
console.error("o implementar WEBSCRAPPING")
console.warn("los VALORES calculados son APROXIMADOS")

// declaro CONSTANTES
const fecha = "febrero de 2022"
const dolar = 1
const euro = 0.9
const chileno = 820
const real = 5.5
const peso = 115

// FUNCIONES
function calcular() {
    // muestro la FECHA de las cotizaciones
    window.document.formulario.fecha.value = fecha
    // capturo el numero ingresado en los campos
    dolares = window.document.formulario.dolares.value;
    euros = window.document.formulario.euros.value;
    chilenos = window.document.formulario.chilenos.value;
    reales = window.document.formulario.reales.value;
    pesos = window.document.formulario.pesos.value;
    console.log(dolares)
    // calculos
    if (dolares != 0) {
        uss(dolares)
    } else {
        if (euros != 0) { dolares = dolar / euro * euros }
        if (chilenos != 0) { dolares = dolar / chileno * chilenos }
        if (reales != 0) { dolares = dolar / real * reales }
        if (pesos != 0) {
            dolares = dolar / peso * pesos / 1.65
            window.document.formulario.impPais.checked = true;
            window.document.formulario.retencion.checked = true;
        }
        uss(dolares)
    }
}


function uss(dolares) {
    // capturo el estado de los checkbox
    var impuesto = document.getElementById("impPais").checked;
    var retencion = document.getElementById("retencion").checked;
    if (impuesto) {
        impuesto = 0.3
    } else {
        impuesto = 0
    }
    if (retencion) {
        retencion = 0.35
    } else {
        retencion = 0
    }
    console.log(impuesto)
    // calculos
    euros = dolares * euro
    chilenos = dolares * chileno
    reales = dolares * real
    pesos = dolares * peso * (1 + impuesto + retencion)

    // muestro los valores calculados
    window.document.formulario.dolares.value = dolares
    window.document.formulario.euros.value = euros.toFixed(2)
    window.document.formulario.chilenos.value = chilenos.toFixed(2)
    window.document.formulario.reales.value = reales.toFixed(2)
    window.document.formulario.pesos.value = pesos.toFixed(2)

    // inhabilito los cuadros de texto
    window.document.formulario.fecha.disabled = true
    window.document.formulario.dolares.disabled = true
    window.document.formulario.euros.disabled = true
    window.document.formulario.chilenos.disabled = true
    window.document.formulario.reales.disabled = true
    window.document.formulario.pesos.disabled = true
}


function habilitar() {
    window.document.formulario.dolares.disabled = false
    window.document.formulario.euros.disabled = false
    window.document.formulario.chilenos.disabled = false
    window.document.formulario.reales.disabled = false
    window.document.formulario.pesos.disabled = false
    window.document.formulario.impPais.checked = false;
    window.document.formulario.retencion.checked = false;
}

// boton p/ cambiar el fondo del h1
function fondo() {
    console.log('boton presionado ...')
    function random() { return Math.floor(Math.random() * (255 + 1)) }
    const colorRandom = 'rgb(' + random() + ',' + random() + ',' + random() + ')'
    document.querySelector("h1").style.backgroundColor = colorRandom
    var botonF = document.getElementById("botonFondo");
    botonF.style.backgroundColor="#000";
    botonF.style.color="white";
    
}

