// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Y cada vez que intenté e intenté", time: 29 },
  { text: "Algo nuevo", time: 35 },
  { text: "Fue algo bueno", time: 37 },
  { text: "Y yo la amé y la amé", time: 43 },
  { text: "Cada vez a mi manera", time: 47 },
  { text: "Que dilemaaa", time: 52 },
  { text: "Y cada vez", time: 57 },
  { text: "Y otra vez", time: 63 },
  { text: "Siento que la vida se me va", time: 67 },
  { text: "Cada madrugada al despertar", time: 70 },
  { text: "Cuando veo que no estás acá", time: 75 },
  { text: "Recuerdo los momentos que viví", time: 81 },
  { text: "Y ahora sé que no regresarán", time: 84 },
  { text: "Siento que la vida se me vaaaa", time: 90 },
  { text: "Para siempre", time: 96 },
  { text: "Para siempre", time: 102 },
  { text: "Para siempre <3", time: 108 },
  { text: "Y yo la amé y la amé", time: 124 },
  { text: "Cada vez a mi manera", time: 128 },
  { text: "Que dilemaaaaa", time: 132 },
  { text: "Y aprendí que el dolor  el dolorr no es algo ajeno", time: 140 },
  { text: "Ni algo eternooo", time: 147 },
  { text: "Y cada vez", time: 153 },
  { text: "Y otra vez", time: 159 },
  { text: "Siento que la vida se me va", time: 164 },
  { text: "Cada madrugada al despertar", time: 167 },
  { text: "Cuando veo que no estas acaaaaa", time: 169 },
  { text: "Recuerdo los momentos que viví", time: 177 },
  { text: "Y ahora sé que no regresarán", time: 180 },
  { text: "Siento que la vida se me vaaaa", time: 182 },
  { text: "Para siempre", time: 190 },
  { text: "Para siempre", time: 198 },
  { text: "Para siempre <3", time: 200 },
  { text: "Y la vida se nos vaaaa", time: 206 },
  { text: "Que importaaa esta ciudaaaad", time: 212 },
  { text: "Que importaaa esta ciudaaaad", time: 215 },
  { text: "Que importaaa los demaaaassss", time: 221 },
  { text: "Cuando solooo hay que amaaaaarrrr...", time: 225 },
  { text: "Cuando solooo hay que amaaaaarrrr...", time: 230 },
  { text: "Siento que la vida se me va", time: 242 },
  { text: "Cada madrugada al despertar", time: 246 },
  { text: "Cuando veo que no estas acaaaaa", time: 248 },
  { text: "Siento que la vida se me va", time: 255 },
  { text: "Cada madrugada al despertar", time: 260 },
  { text: "Cuando veo que no estas acaaaaa", time: 263 },
  { text: "Recuerdo los momentos que viví", time: 271 },
  { text: "Y ahora sé que no regresarán", time: 274 },
  { text: "Siento que la vida se me vaaaa", time: 277 },
  { text: "Siento que la vida se me vaaaa", time: 285 },
  { text: "Cada madrugada al despertar", time: 286 },
  { text: "Cuando veo que no estas acaaaaa", time: 292 },
  { text: "Recuerdo los momentos que viví", time: 298 },
  { text: "Y ahora sé que no regresarán", time: 301 },
   { text: "Siento que la vida se me vaaaa", time: 306 },
  { text: "Para siempre", time: 310 },
  { text: "Para siempre", time: 316 },
  { text: "Para siempre <3", time: 320 },
  { text: "TE AMO AMORR", time: 328 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 297 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 297
setTimeout(ocultarTitulo, 328000);