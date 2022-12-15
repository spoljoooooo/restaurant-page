import '../styles/style.css';
import '../styles/navbar.css';
import home from './home';

const navbarRender = () => {
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("homeBtn");
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menuBtn");
    const aboutUsBtn = document.createElement("button");
    aboutUsBtn.classList.add("aboutUsBtn");

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(aboutUsBtn);

    homeBtn.innerText = "Home";
    menuBtn.innerText = "Menu";
    aboutUsBtn.innerText = "About Us";

    return navbar;
}

export default navbarRender;