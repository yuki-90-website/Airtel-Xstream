function send() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("coment").value;
    var sent = "The message " + text + " was sent successfully by " + name + "!";
    window.alert(sent);
    console.log(sent);
}