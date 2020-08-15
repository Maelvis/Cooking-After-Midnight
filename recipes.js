document.addEventListener('DOMContentLoaded', function() {

// Splitting the ingredients and method columns into separate tabs and hiding them if not in use 

let methodTab = document.getElementsByClassName('methodtab');
let ingredientsTab = document.getElementsByClassName('ingredientstab');
let methodButton = document.getElementsByClassName('methodbutton');
let ingredientsButton = document.getElementsByClassName('ingredientsbutton');


// Opening the method tab
function openMethod() {
    for (i = 0; i < ingredientsTab.length; i++) {
        ingredientsTab[i].style.display = 'none';
        ingredientsButton[i].style.backgroundColor = '#F4900C';
    }
    
    for (i = 0; i < methodTab.length; i++) {
        methodTab[i].style.display = 'block';
        methodTab[i].style.backgroundColor = '#FFCC4D';
        methodButton[i].style.backgroundColor = '#FFCC4D';
    }

    }

for (i = 0; i < methodButton.length; i++) {
    methodButton[i].addEventListener('click', openMethod)
}

// Opening the ingredients tab
function openIngredients() {
    for (i = 0; i < methodTab.length; i++) {
        methodTab[i].style.display = 'none';
        methodButton[i].style.backgroundColor = '#F4900C';
    }
    
    for (i = 0; i < methodTab.length; i++) {
        ingredientsTab[i].style.display = 'block';
        ingredientsTab[i].style.backgroundColor = '#FFCC4D';
        ingredientsButton[i].style.backgroundColor = '#FFCC4D';
    }
}

    for (i = 0; i < ingredientsButton.length; i++) {
        ingredientsButton[i].addEventListener('click', openIngredients)
    }
    
    
    
    })