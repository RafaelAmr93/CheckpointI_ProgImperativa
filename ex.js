//constantes com mensagens padronizadas
const ready = () => console.log("Prato pronto, bom apetite!!!");
const notReady = () => console.log("Tempo insuficiente!");
const burned = () => console.log("O prato queimou!");
const kabum = () => console.log("KABUMMM!!!");

//seletor de preparo e tempo em segundos
let cookingSelector = 1;
let seconds = 10;

switch (cookingSelector) {
  case 1:
    popcorn(seconds);
    break;
  case 2:
    pasta(seconds);
    break;
  case 3:
    meat(seconds);
    break;
  case 4:
    bean(seconds);
    break;
  case 5:
    chocolateTruffle(seconds);
    break;
  default:
    console.log("Prato inexistente!");
}

function popcorn(int) {
  if (int >= 30) return kabum();
  if (int > 20) return burned();
  if (int < 10) return notReady();
  return ready();
}

function pasta(int) {
  if (int >= 24) return kabum();
  if (int > 16) return burned();
  if (int < 8) return notReady();
  return ready();
}

function meat(int) {
  if (int >= 45) return kabum();
  if (int > 30) return burned();
  if (int < 15) return notReady();
  return ready();
}

function bean(int) {
  if (int >= 36) return kabum();
  if (int > 24) return burned();
  if (int < 12) return notReady();
  return ready();
}

function chocolateTruffle(int) {
  if (int >= 24) return kabum();
  if (int > 16) return burned();
  if (int < 8) return notReady();
  return ready();
}
