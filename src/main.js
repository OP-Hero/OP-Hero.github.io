document.getElementsByTagName("a")[0].href = window.location.host;

(function () {
    addLinks();
})();




function addLinks() {
    addLink("");
    addLink("Links", "links");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("Info", "subdomains");
    addLink("");
    addLink("----------------");
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
