function loadJSON() {
    console.log('test');
    fetch('./test.json').then((response) => {
        console.log("hi there");
        console.log(json);
        document.getElementById('json').innerHTML = JSON.stringify(json);
    })
}