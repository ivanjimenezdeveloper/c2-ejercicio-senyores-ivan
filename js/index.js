import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");
const anyadirInformacionSenyor = (
  senyorElemento,
  nombre,
  foto,
  profesion,
  estado,
  twitter
) => {
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;

  const profesionElemento = senyorElemento.querySelector(
    ".profesion-contenido"
  );
  profesionElemento.textContent = profesion;

  const estadoElemento = senyorElemento.querySelector(".estado-contenido");
  estadoElemento.textContent = estado;

  const twitterElemento = senyorElemento.querySelector(".twitter-contenido");
  twitterElemento.textContent = twitter;
};

const anyadirInicial = (senyorElemento, nombre) => {
  const inicialElemento = senyorElemento.querySelector(".inicial");

  const palabrasNombre = nombre.split(" ");

  if (palabrasNombre[0].length < 3) {
    inicialElemento.textContent = palabrasNombre[1].charAt(0);
  } else {
    inicialElemento.textContent = palabrasNombre[0].charAt(0);
  }
};

const actualizarCantidadSenyores = (senyores) => {
  const cantidadSenyoresElemento = document.querySelector(".cantiadSenyores");

  cantidadSenyoresElemento.textContent = senyores.length;
};

for (const { nombre, foto, profesion, estado, twitter, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");

  anyadirInformacionSenyor(
    senyorElemento,
    nombre,
    foto,
    profesion,
    estado,
    twitter
  );

  anyadirInicial(senyorElemento, nombre);

  if (marcado) senyorElemento.classList.add("marcado");

  principal.append(senyorElemento);
}

actualizarCantidadSenyores(senyores);
