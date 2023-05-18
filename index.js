function loadJSON() {
    console.log('test');
    fetch('./test.json').then((response) => {
        console.log("test");
        console.log(response);
        console.log(response.body);
        response.json().then((x) => {
            console.log('here', x);
        })
        document.getElementById('json').innerHTML = JSON.stringify(response);
    })

    fetch('./test.json').then((response) => response.json())
    .then((json) => console.log('what?', json));
}