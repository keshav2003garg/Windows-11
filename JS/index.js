const taskBar = document.querySelector(".taskbar");
const startMenu = document.querySelector(".startMenu");
taskBar.addEventListener('click', ()=>{
    if(startMenu.style.bottom=="-1000px"){
        startMenu.style.bottom="-340px"
    }
    else{
        startMenu.style.bottom="-1000px"
    }
    
})