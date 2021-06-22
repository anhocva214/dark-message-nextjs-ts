// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = '';
//     localStorage.setItem("close_tab", true)
// });


function sound (){
    let sound = document.getElementById("new_message");
    sound.play();
}

