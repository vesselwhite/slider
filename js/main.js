const img = document.querySelectorAll('.project-content__img');
const buttonPreviosSlide = document.querySelector('.slaider__previos');
const dotButton = document.querySelectorAll('.slaider__dot');
buttonNextSlide = document.querySelector('.slaider__next');
const imgInfo = document.querySelectorAll('.changeable-info');
const slideName = document.querySelectorAll('.project-content__subtitle')
let active = 0;

const listOfImgInfo = [
    [
        '<span class="project-characterstics__subtitle changeable-info"> Rostov-on-Don <br>LCD admiral</span>',
        '<span class="project-characterstics__subtitle changeable-info"> 81 m2 </span>',
        '<span class="project-characterstics__subtitle changeable-info"> 3.5 months </span>',
        '<span class="project-characterstics__subtitle changeable-info"> Upon request </span>',
    ],
    [
        '<span class="project-characterstics__subtitle changeable-info"> Sochi <br>LCD Thieves</span>',
        '<span class="project-characterstics__subtitle changeable-info"> 105 m2 </span>',
        '<span class="project-characterstics__subtitle changeable-info"> 4 months </span>',
        '<span class="project-characterstics__subtitle changeable-info"> Upon request </span>',
    ],
    [
        '<span class="project-characterstics__subtitle changeable-info"> Rostov-on-Don <br> Patriotic </span>',
        '<span class="project-characterstics__subtitle changeable-info"> 93 m2 </span>',
        '<span class="project-characterstics__subtitle changeable-info"> 3 months </span>',
        '<span class="project-characterstics__subtitle changeable-info"> Upon request </span>',
    ],
];

function changeImgInfo(){
    for(i = 0; i , i < imgInfo.length; i++){
        imgInfo[i].innerHTML = listOfImgInfo[active][i];
    }
}

function chooseSlide(array){
    array.forEach((element, iterator) => {
        element.addEventListener('click', ()=>{
            for(i = 0; i < img.length; i++){
                img[i].classList.remove('active');
            }
            img[iterator].classList.add('active');
            active=iterator;
            changeImgInfo();
        })
    });
}

buttonPreviosSlide.addEventListener('click', ()=>{
    img[active].classList.remove('active');
    if(active == 0){
        active = img.length-1;
    }
    else {
        active--;
    }
    img[active].classList.add('active');
    changeImgInfo();
})

buttonNextSlide.addEventListener('click', ()=>{
    img[active].classList.remove('active');
    if(active+1 == img.length){
        active = 0;
    }
    else{
        active++;
    }
    img[active].classList.add('active');
    changeImgInfo();
})

chooseSlide(dotButton);
chooseSlide(slideName);