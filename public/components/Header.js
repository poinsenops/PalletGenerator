const Header = () => {
    return /* HTML */ `
    <header class="">
        <nav class="flex justify-between items-center p-4">
            <a href="index.html">Pallettes</a>
            <div class="flex items-center space-x-4">
                <a href="#"><i class="fa-solid fa-house"></i></a>
                <a href="">Saved Pallettes</a>
            </div>
        </nav>
    </header>
`;
}

export default Header();