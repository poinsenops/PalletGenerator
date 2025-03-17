import colorComponent from "./components/colorComponent.js";
import Header from "./components/Header.js";

const root = document.getElementById('root');

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

root.insertAdjacentHTML('beforebegin', Header);
root.innerHTML = `
    ${colorComponent(getRandomColor())}
    ${colorComponent(getRandomColor())}
    ${colorComponent(getRandomColor())}
    ${colorComponent(getRandomColor())}
    ${colorComponent(getRandomColor())}
`;

