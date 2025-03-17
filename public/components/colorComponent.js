const colorComponent = (color) => {
    return /* HTML */ `
    <div style="background-color: ${color};">
        <button>Lock Color</button>
        <p>${color}</p>
    </div>`;
}

export default colorComponent;