import '../styles/about.css';
import Karta from '../assets/karte.png';

const aboutRender = () => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("bg");

    const karta = document.createElement("img");
    karta.src = Karta;
    karta.id = "karta";

    const adresa = document.createElement("h2");
    adresa.innerHTML = "Trg bana Jelačića 10, Ivankovo";

    mainDiv.appendChild(karta);
    mainDiv.appendChild(adresa);

    return mainDiv;
}

export default aboutRender;