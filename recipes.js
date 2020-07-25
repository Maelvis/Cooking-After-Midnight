document.addEventListener('DOMContentLoaded', function() {

// Splitting the ingredients and method columns into separate tabs and hiding them if not in use 

let methodTab = document.getElementsByClassName('methodtab');
let ingredientsTab = document.getElementsByClassName('ingredientstab');


// Opening the method tab
function openMethod() {
    for (i = 0; i < ingredientsTab.length; i++) {
        ingredientsTab[i].style.display = 'none';
    }
    
    for (i = 0; i < methodTab.length; i++) {
        methodTab[i].style.display = 'block';
    }
}
let methodButton = document.getElementsByClassName('methodbutton')
for (i = 0; i < methodButton.length; i++) {
    methodButton[i].addEventListener('click', openMethod)
}

// Opening the ingredients tab
function openIngredients() {
    for (i = 0; i < methodTab.length; i++) {
        methodTab[i].style.display = 'none';
    }
    
    for (i = 0; i < methodTab.length; i++) {
        ingredientsTab[i].style.display = 'block';
    }
}
let ingredientsButton = document.getElementsByClassName('ingredientsbutton')
    for (i = 0; i < ingredientsButton.length; i++) {
        ingredientsButton[i].addEventListener('click', openIngredients)
    }
    
    
 
    
    
    })