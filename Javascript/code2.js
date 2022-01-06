document.getElementById("name").focus();

function blonde(){
    function get_joke_of_the_day() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             let joke = JSON.parse(this.response);
             // Access the result here
             document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text
             document.getElementById("copyright").innerHTML = "©" + joke.contents.copyright
         }
        };
        xhttp.open("GET", "https://api.jokes.one/jod?category=blonde", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
        xhttp.send();
    }
    
    get_joke_of_the_day()
}
function animal(){
    function get_joke_of_the_day() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             let joke = JSON.parse(this.response);
             // Access the result here
             document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text;
             document.getElementById("copyright").innerHTML = "©" + joke.contents.copyright
         }
        };
        xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
        xhttp.send();
    }
    
    get_joke_of_the_day()
}
function knockknock(){
    function get_joke_of_the_day() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             let joke = JSON.parse(this.response);
             // Access the result here
             document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text
             document.getElementById("copyright").innerHTML = "©" + joke.contents.copyright
         }
        };
        xhttp.open("GET", "https://api.jokes.one/jod?category=knock-knock", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
        xhttp.send();
    }
    
    get_joke_of_the_day()
}
function compliment(){
    let name = document.getElementById("name").value;

    let text1 = "Don't think I didn't notice your hair " + name + ". It looks extra nice today.";
    let text2 = "OMG " + name + "! You are so awesome! Keep it up!";
    let text3 = "Steel panther - The burden of being wonderful was totally written about you " + name + ".";
    let text4 = "Chewbacca loves you. He loves everyone but he extra loves you " + name + ".";
    let text5 = "Unicorns would let you ride them. You are that special. Now you know."
    let text6 = "All the single people in your area want to meet you. It's not a scam...it's the truth " + name + "."
    let text7 = "You can go the distance " + name + "!";
    let text8 = "If you were a video game item, you would be legendary.";
    let text9 = "You could beat Goku " + name + ". I actually belive in that.";
    let text10 = "I'd cook dinner for you.";
    let text11 = "You smell nice."
    let text12 = "I think I'm in love with you.";
    let text13 = "I would go to another castle for you."
    let text14 = "You seem cool."
    let text15 = "If I had 7 dragon balls, I'd wish for you."

    let array = [text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15];
    let item = array[Math.floor(Math.random()*array.length)];

    document.getElementById("joke").innerHTML = item
}