function aumentarFonte() {
    document.documentElement.style.fontSize = "30px";
}

function diminuirFonte() {
    document.documentElement.style.fontSize = "10px";
}

function alterarHref() {
    const elLink = document.getElementById("link");
    elLink.href = pegaLinks();
}

function pegaLinks() {
    const links = [
        "https://www.google.com/",
        "https://twitter.com/",
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.reddit.com/"
    ]

    const numero = Math.round(Math.random() * (links.length - 1));
    return links[numero];
}