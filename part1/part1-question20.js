function generateDT() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let timer = setInterval(generateDT,1000);