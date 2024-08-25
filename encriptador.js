var botonEncriptarMensaje = document.querySelector(".presentacionDe_Enlaces_Boton_Encriptar");
var botonDesencriptarMensaje = document.querySelector(".presentacionDe_Enlaces_Boton_Desencriptar");
var muneco = document.querySelector(".con_muneco");
var seccionContenidoMuneco = document.querySelector(".presentacionDe_Texto_Encriptado");
var resultado = document.querySelector(".textoResultado");

botonEncriptarMensaje.onclick = encriptar;
botonDesencriptarMensaje.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var tex_tarea = recuperarTexto();
    resultado.textContent = encriptarTexto(tex_tarea);
}

function desencriptar(){
    ocultarAdelante();
    var tex_tarea = recuperarTexto();
    resultado.textContent = desencriptarTexto(tex_tarea);
}

function recuperarTexto(){
    var tex_tarea = document.querySelector(".tex_tarea");
    return tex_tarea.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    seccionContenidoMuneco.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const copiar_Mensaje = document.querySelector(".copiarMensaje");
copiar_Mensaje.addEventListener("click", copiar = () =>{
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
})


