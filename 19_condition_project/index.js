var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#answer");

btn.addEventListener('click', function() {
    let c = msg.value.toLowerCase();
    let reply = "";
    if(c.match("hello")){
        reply ="hello there!";
    }
    else if(c.match("your name")){
        reply="zahid hasan";
    }
    else if(c.match("your age")){
        reply="28";
    }
    else if(c.match("are you single")){
        reply="yes i am single"
    }
    else if(c.match("your country")){
        reply ="bangladesh"
    }
    else{
        reply ="i dont know, i have some fixed answer(ask me? hello,your name,your age,your country,are you single)"
    }

    result.innerHTML =reply;

    var voice = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(voice);

});
