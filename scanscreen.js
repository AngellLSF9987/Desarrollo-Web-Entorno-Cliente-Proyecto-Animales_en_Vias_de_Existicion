// JavaScript para detectar si el usuario está en un dispositivo móvil
if (/Mobi/.test(navigator.userAgent)) {
    // Es un dispositivo móvil, puedes aplicar ajustes específicos aquí
    console.log("Estás en un dispositivo móvil");
} else {
    // No es un dispositivo móvil, puede ser un tablet o un desktop
    console.log("No estás en un dispositivo móvil");
}