function loadJSON() {
    console.log('test');
    fetch('./test.json').then((response) => response.json).then(json => {
        console.log(json);
        document.getElementById('json').innerHTML = JSON.stringify(json);
    })
}