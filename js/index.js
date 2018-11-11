'use strict';

let testData = [
    ['Part #', 'Description', 'Cost'],
    ['Part #', 'Description', 'Cost'],
    ['Part #', 'Description', 'Cost'],
    ['Part #', 'Description', 'Cost']
];
console.log ("hello");

d3.csv("data/ece-catalog.csv")
    .then(function(data) {
        console.log(data); // [{"Hello": "world"}, …]
    })
    .catch (function (error) {
        console.log (error);
    });

function generateCategory () {
    document.querySelector ('#chooseCategory');
}
