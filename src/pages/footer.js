import '../styles/footer.css';
import Logo from "../assets/githubLogo.png";

const footerRender = () => {
    const footer = document.createElement("div");
    footer.classList.add("footer");

    const gitLogo = document.createElement("img");
    const gitLink = document.createElement("a");

    gitLogo.classList.add("logo");
    gitLink.classList.add("link");

    gitLogo.src = Logo;
    gitLink.innerText = "@spoljooooo";
    gitLink.href = "https://github.com/spoljoooooo";

    footer.appendChild(gitLogo);
    footer.appendChild(gitLink);

    return footer;
}

export default footerRender;