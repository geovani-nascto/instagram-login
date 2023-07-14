let img = document.querySelector('.hidden');

setInterval(() => {
    if(img.style.opacity == 1){
        img.style.opacity = 0;
    } else{
        img.style.opacity = 1;
    }
}, 3000);