function sendMessage(msg, encoder){
    //Valmistelua
    //Erilaisia toimenpiteit√§

    msg = encoder(msg)
    console.log(msg);
}

function myEncoder(message){
    message += "1234xcv"
    return message;
}
function specialEncoder(m){
    m += "yam"
    return m;
}

sendMessage("Hello!" , specialEncoder)