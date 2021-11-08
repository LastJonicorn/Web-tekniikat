//a
let h2 = document.querySelector("h2");
h2.textContent = "Let's manipulate DOM again!";
//b
let viiva = document.createElement("hr");
h2.parentElement.insertBefore(viiva,h2);
//c
let article = document.querySelector("article");
article.childNodes[1 , 3].textContent = "Muutettu teksti";

/*let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
p1.textContent = p2.textContent
p2.textContent = temp*/

//d
let content = document.getElementById("content");
let ul = document.createElement("ul");
content.appendChild(ul)

for (let i = 1; i < 6; i++){
    let li = document.createElement("li")
    li.textContent = "Number" + i
    ul.appendChild(li)
}

/*
let button = documnet.querySelector("button")

button.addEventListener("click" , function1)
button.addEventListener("click" , function2)  

Pystyy lisäämään useamman eventin samalle napille
ja html ja js pysyy erillisenä tiedostona
*/