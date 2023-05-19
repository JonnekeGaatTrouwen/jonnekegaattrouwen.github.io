function displayLocation(locationKey) {
    console.log('Fetching location', locationKey);

    fetch('./locations.json').then((response) => response.json())
    .then((json) => {
        console.log('JSON:', json);
        document.getElementById(id).innerHTML = json[locationKey];
    });

    // const locations = {
    //     "mark":"M1",
    //     "jonneke":"K2",
    //     "vrouw":"V9",
    //     "kind":"L21",
    //     "einde":"P7"
    // }

    // document.getElementById('answer').innerHTML = locations[locationKey];
}

const puzzleKeys = {
    'mark': '80bccbeacaacb2bccda43b',
    'jonneke': 'ksnlebjmiyhawcebliyahnjmsckw',
    'kind': 'ksnlebjmiyhawc'
}

function submitCode(page, nextLocation) {
    const key = puzzleKeys[page];
    const wrongAnswerIndices = [];

    let submittedCode = '';

    for (let i = 0; i < key.length; i++) {
        submittedCode += document.getElementById(`codeChar${i}`).value.toLowerCase();
        console.log("Vraag", i, "- Correct answer:", key[i], "- Answer given: ", document.getElementById(`codeChar${i}`).value);

        document.getElementById(`codeChar${i}`).style.borderColor = 'black';
        document.getElementById(`codeChar${i}`).style.backgroundColor = 'white';

        if (document.getElementById(`codeChar${i}`).value !== key[i]) {
            wrongAnswerIndices.push(i);
        }
    }

    if (submittedCode.length !== key.length) {
        return;
    }

    if (submittedCode === key) {
        console.log("Correct");
        document.getElementById('codePage').style.display = 'none';
        document.getElementById('error').style.display = 'none';
        document.getElementById('answerPage').style.display = 'block';

        displayLocation(nextLocation);
    } else {
        console.log("Incorrect");
        wrongAnswerIndices.map(i => {
            document.getElementById(`codeChar${i}`).style.borderColor = 'red';
            document.getElementById(`codeChar${i}`).style.backgroundColor = '#fce6e6';
        })

        document.getElementById('error').style.display = 'block';
    }
}

function moveToNextInput(index) {
    if (document.getElementById(`codeChar${index}`).value.length) {
        document.getElementById(`codeChar${index + 1}`).focus();
    }
}