var btns = ["E","+","-","C","*","/"];

function createBtn(value) {
    const display = document.getElementById("Display");

    const btn = document.createElement("button");
    const lbl = document.createTextNode(value);
    btn.className = "btn";
    btn.appendChild(lbl);

    if (value == "E") {
        btn.onclick = () => {
            const display = document.getElementById("Display");

            var value = display.value + "";
            if( value.length > 2 && (   value.includes("+") || 
                                        value.includes("-") || 
                                        value.includes("*") || 
                                        value.includes("/")))
            {
                display.value = eval(value);
            }
            else
            {
                alert("Calculo invalido!");
            }
            
        };
    }
    else if (value == "C") {
        btn.onclick = () => display.value = "";
    }
    else {
        btn.onclick = () => display.value += value;
    }


    const father = document.getElementById("Calculadora");
    father.appendChild(btn);

}



function genetareBtn() {

    btns.forEach(btn => createBtn(btn));
    

    for (i = 1; i < 10; i++) {
        createBtn(i);

    }

    createBtn(".");
    createBtn("0");



}



genetareBtn();

