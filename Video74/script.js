let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
   document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})
button.addEventListener("contextmenu", ()=>{
   document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
   alert("dont hack us by Right click please")
})
document.addEventListener("keydown" , (e)=>{
    console.log(e, e.key, e.keyCode)
})