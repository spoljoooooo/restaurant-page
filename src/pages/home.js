import '../styles/home.css';
import Krug from '../assets/krug.png'

const home = () => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("bg-transparent");

    const krugLogo = document.createElement("img");
    const paragraphUnderLogo = document.createElement("h1");

    krugLogo.src = Krug;
    paragraphUnderLogo.innerHTML = "KRUG est. 2019";

    mainDiv.appendChild(krugLogo);
    mainDiv.appendChild(paragraphUnderLogo);

    return mainDiv;
}

export default home;