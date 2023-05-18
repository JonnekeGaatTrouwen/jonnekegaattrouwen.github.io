function loadJSON() {
    console.log('test');
    fetch('./test.json').then((response) => {
        console.log("hi there");
        console.log(response);
        document.getElementById('json').innerHTML = JSON.stringify(response);
    })
}