function addButton() {
    //label
    if (document.getElementById("input").value != "") {
        const label = document.createElement("button");
        label.className = "plain1";
        label.textContent = document.getElementById("input").value;

        //Counter
        const counter = document.createElement("h3");
        counter.className = "plain2";

        //container.count = "0";
        //const num = "0";
        //container.num1 = num;

        counter.textContent = "0";

        //container
        const container = document.createElement("div")
        container.className = "border";
        container.onclick = function(){add(counter);};
        container.oncontextmenu = function(){sub(counter);};
        container.addEventListener("contextmenu", event => event.preventDefault());


        container.appendChild(label);
        container.appendChild(counter);
        document.getElementById("buttonContainer").appendChild(container);
    }
}

function add(counter) {
    counter.textContent = parseInt(counter.textContent) + 1;
    
}

function sub(counter) {
    counter.textContent = parseInt(counter.textContent) - 1;
}