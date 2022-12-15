import navbarRender from "./pages/navbar";
import footerRender from "./pages/footer";
import home from "./pages/home";
import aboutRender from "./pages/about";
import menuRender from "./pages/menu";
import './styles/style.css';

const content = document.body;

const homeMain = home();
const aboutMain = aboutRender();
const menuMain = menuRender();

content.appendChild(navbarRender());

const render = (element) => {
    content.appendChild(element);
    content.appendChild(footerRender());
}

const remove = () => {
    content.removeChild(content.lastChild);
    content.removeChild(content.lastChild);
}

render(homeMain);

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", e => {
    remove();
    render(homeMain);
});

const aboutBtn = document.querySelector(".aboutUsBtn");
aboutBtn.addEventListener("click", e => {
    remove();
    render(aboutMain);
});


const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", e => {
    remove();
    render(menuMain);
});


