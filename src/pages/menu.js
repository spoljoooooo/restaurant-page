import '../styles/menu.css'
import Pizza1 from '../assets/pizza1.png';
import Pizza2 from '../assets/pizza2.png';
import Pizza3 from '../assets/pizza3.png';
import Pizza4 from '../assets/pizza4.png';
import Pizza5 from '../assets/pizza5.png';
import Pizza6 from '../assets/pizza6.png';

const menuRender = () => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("menu");

    const item1 = document.createElement("div");
    const item2 = document.createElement("div");
    const item3 = document.createElement("div");
    const item4 = document.createElement("div");
    const item5 = document.createElement("div");
    const item6 = document.createElement("div");

    item1.classList.add("card");
    item2.classList.add("card");
    item3.classList.add("card");
    item4.classList.add("card");
    item5.classList.add("card");
    item6.classList.add("card");

    const pizza1 = document.createElement("img");
    const pizza2 = document.createElement("img");
    const pizza3 = document.createElement("img");
    const pizza4 = document.createElement("img");
    const pizza5 = document.createElement("img");
    const pizza6 = document.createElement("img");

    const itemName1 = document.createElement("p");
    const itemName2 = document.createElement("p");
    const itemName3 = document.createElement("p");
    const itemName4 = document.createElement("p");
    const itemName5 = document.createElement("p");
    const itemName6 = document.createElement("p");

    pizza1.src = Pizza1;
    pizza2.src = Pizza2;
    pizza3.src = Pizza3;
    pizza4.src = Pizza4;
    pizza5.src = Pizza5;
    pizza6.src = Pizza6;

    itemName1.innerHTML = "Margherita";
    itemName2.innerHTML = "Hawaiian";
    itemName3.innerHTML = "Pepperoni";
    itemName4.innerHTML = "Buffalo";
    itemName5.innerHTML = "Supreme";
    itemName6.innerHTML = "The Works";

    item1.appendChild(pizza1);
    item1.appendChild(itemName1);
    item2.appendChild(pizza2);
    item2.appendChild(itemName2);
    item3.appendChild(pizza3);
    item3.appendChild(itemName3);
    item4.appendChild(pizza4);
    item4.appendChild(itemName4);
    item5.appendChild(pizza5);
    item5.appendChild(itemName5);
    item6.appendChild(pizza6);
    item6.appendChild(itemName6);

    mainDiv.appendChild(item1);
    mainDiv.appendChild(item2);
    mainDiv.appendChild(item3);
    mainDiv.appendChild(item4);
    mainDiv.appendChild(item5);
    mainDiv.appendChild(item6);

    return mainDiv;
}

export default menuRender;