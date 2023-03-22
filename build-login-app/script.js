const btn = document.getElementsByTagName('button');


function buttonClick() {
    if(btn) {
        setTimeout(() =>{
            alert("You have clicked this, you can close the alert browser now!");
        },0);
    }
    return btn;
}
buttonClick();