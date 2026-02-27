

(function () {
    addLinks();
})();




function addLinks() {
    addLink("Check out my modrinth", "https://modrinth.com/user/OP_Hero");
    addLink("-----------------------------");
    addLink("Join my Discord server", "https://discord.gg/7TNTK6uBdP");
    addLink("-----------------------------");
    addLink("Follow me on GitHub", "https://github.com/OP-Hero");
    addLink("-----------------------------");
    
    addLink("----That's it for now----");
    addLink("");
    addLink("");
    addLink("");
    addLink("");
}


function addLink(text, link = false) {
    let card = document.getElementById("links");
    let linkElem = document.createElement("a");
    
    if (link) {
        linkElem.href = link;
    }
    
    linkElem.innerHTML = text;
    linkElem.classList.add("link");
    let br = document.createElement("br");
    
    card.appendChild(linkElem);
    card.appendChild(br);
    card.appendChild(br);
}
