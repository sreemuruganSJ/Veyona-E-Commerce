//Searching an element for all product

var maincontainer = document.querySelector(".mainproduct");
var elements = maincontainer.querySelectorAll("div");
var search = document.getElementById("search");

search.addEventListener("keyup", function(event){
    var enteredvalue = event.target.value.toUpperCase()

    for(i=0; i<elements.length ; i=i+1){

        var elementname = elements[i].querySelector("p").textContent

        if(elementname.toUpperCase().indexOf(enteredvalue)<0){
            elements[i].style.display = "none";
        }

        else{
            elements[i].style.display = "block";
        }
    }
})