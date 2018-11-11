'use strict';

let testData = [
{Bin: "", Category: "Resistors, Trim Potentiometers", Subcategory:""},
    {Bin: "", Category: "Trim Potentiometers", Subcategory: ""},
    {Bin: "", Category: "Resistors", Subcategory: ""},
    {Bin: "", Category: "Resistors, Trim Potentiometers", Subcategory: ""},
    {Bin: "", Category: "Trim Potentiometers", Subcategory: ""}
];
let globalData = [];

// Start up page set-up
document.querySelector ('#search-btn').addEventListener ('click', search);

d3.csv("data/ece-catalog.csv")
    .then(function(data) {
        console.log (data);
        generateCategory (data);
        globalData = data;
    })
    .catch (function (error) {
        console.log (error);
    });

// generateCategory (testData);

function generateCategory (data) {
    let categories = [];
    data.forEach ((item) => {
        if (categories.indexOf (item.Category) == -1) {
            categories.push (item.Category);
        }
    });
    categories.forEach ((category) => {
        let option = document.createElement ("option");
        option.textContent = category;
        option.value = category;
        document.querySelector ('#chooseCategory').append (option);
    });
}

function search () {
    let query = document.querySelector ('#search-home input').value;
    let categorySelected = document.querySelector ('#chooseCategory').value;
    let header = Object.getOwnPropertyNames(globalData [0]);
    let filteredData = globalData.filter ((item) => {
        let itemString = JSON.stringify (item);
        return (itemString.indexOf (query) >= 0 && itemString.indexOf (categorySelected) >= 0);
    });
    console.log (filteredData);
}


