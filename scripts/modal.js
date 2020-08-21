const modal = document.querySelector('.modal-overlay')
const boxs = document.querySelectorAll('.box')
const image = document.querySelectorAll('.box img').innerText

for(let box of boxs){
    box.addEventListener("click", function (){
        modal.classList.add("active")
        
    })
}

document.querySelector('.close-modal').addEventListener("click", function (){
    modal.classList.remove("active")
})