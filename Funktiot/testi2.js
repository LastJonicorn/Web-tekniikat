p = document.querySelector("p");
document.querySelector("button").addEventListener("click" , () => p.textContent="Tekstiä");

const funk = x =>{
    x-1;
    return x+5;
}

palautus = funk(10);