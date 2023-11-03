// fixed header ================================================>
let header = $("#header"),
    heroH = $("#hero").innerHeight(),
    scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

$(window).on("scroll", function(){
    
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
});

function checkScroll(scrollPos){

    if( scrollOffset >= heroH ) {
        header.addClass("fixed");
    }else{
        header.removeClass("fixed");
    }
}



// Smooth scroll==============================================>
$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let blockId = $(this).data('scroll');
    let elementOfSet = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: elementOfSet + 1
    }, 1000);
   
});






// menu_toggle ====================================================>
let toggleBtn = document.querySelector(".toggle_btn");
let navClick = document.querySelector(".nav_click");
let dropdownMenu = document.querySelector(".dropdown_menu");
let body = document.querySelector("body");


toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('nav_click');
    
    if(toggleBtn.classList.contains('nav_click')){
        dropdownMenu.style.height = "240px";
        dropdownMenu.style.padding = "20px 10px";
    }else{
        dropdownMenu.style.height = "0";
        dropdownMenu.style.padding = "0";
        
    }
})


let menuList = document.querySelectorAll(".menu_list");

 for(let i=0; i<menuList.length; i++){
    menuList[i].addEventListener("click", () => {
        dropdownMenu.style.height = "0";
        toggleBtn.classList.remove('nav_click');
        dropdownMenu.style.padding = "0";
    })
}





// scroll top arrow ==============================================>
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// scroll top arrow end



// video play ==================================================>
let video = document.querySelector(".video");
let videoPlay = document.querySelector(".video_play");
let videoIcon = document.querySelector(".video_play_icon");
let videoPause = document.querySelector(".video_play_pause");

let control = document.getElementsByTagName('controls');
let productVideo = document.querySelector(".product_video");

productVideo.addEventListener("mouseover", () => {
    control.getAttribute.add('controls')
})

productVideo.addEventListener("mouseleave", () => {
    control.getAttribute.remove('controls')
})

videoPlay.addEventListener("click", () => {
    if(video.paused){
        video.play();
        videoIcon.style.display = "none";
        videoPause.style.display = "block";
    }else{
        video.pause();
        videoIcon.style.display = "block";
        videoPause.style.display = "none";     
    }
})






// photo change ==============================================>
let  btn = document.querySelectorAll(".btn");
let  portContentOne  = document.querySelectorAll(".port_content_one");
let portfolioBtn = document.querySelector("#portfolio_btn");
let furnitureBtn = document.querySelector("#furniture_btn");
let portBtnDoor = document.querySelector(".port_btn_door");
let portBtnFur = document.querySelector(".port_btn_furniture");
let port_one = document.querySelectorAll("#port_one");
let port_two = document.querySelectorAll("#port_two");

// console.log(portfolioBtn);
// console.log(furnitureBtn);
// console.log(portBtnDoor);
// console.log(portBtnFur);
console.log(port_one);
console.log(port_two);


portfolioBtn.addEventListener("click", () => {

    console.log("yok");
   
    for(let i = 0; i<port_two.length; i++){
        if(portBtnFur.classList != ('active')){
            portBtnDoor.classList.add('color');
            portBtnFur.classList.remove('color');
            port_two[i].classList.add('active'); 
            port_one[i].classList.remove('active'); 
            
        }else{
            portBtnDoor.classList.remove('color');
            portBtnFur.classList.add('color');
            // port_two[i].classList.add('active');  
            // port_one[i].classList.remove('active');
        }
        
    }
    
})

furnitureBtn.addEventListener("click", () => {

    console.log("howa");
    
    for(let i = 0; i<port_one.length; i++){
        if(portBtnDoor.classList != ('active')){
            portBtnDoor.classList.remove('color');
            portBtnFur.classList.add('color');
            port_one[i].classList.add('active'); 
            port_two[i].classList.remove('active'); 
            
    
        }else{
            portBtnDoor.classList.add('color');
            portBtnFur.classList.remove('color');
            // port_one[i].classList.remove('active');  
            // port_two[i].classList.add('active');  
            
        }
    }

})











for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){

        for(let j=0; j<btn.length; j++){
            btn[j].classList.remove('color');
        }
        this.classList.add('color');
        
        let caseFilter = this.getAttribute('case-filter');

        for(let k=0; k<portContentOne.length; k++){
            portContentOne[k].classList.remove('active');
            portContentOne[k].classList.add('change');

            if( portContentOne[k].getAttribute('case-item') == caseFilter){
                portContentOne[k].classList.remove('change');
                portContentOne[k].classList.add('active');
            }
        }
    })
}




































// zoom effect ===============================================>

// function imageZoom (imgId, resultId){
//     let img, lens, result, cx, cy;
//     img = document.getElementById(imgId);
//     result = document.getElementById(resultId);

//     lens = document.createElement("DIV"); 
//     lens.setAttribute("class", "img_zoom_lens");

//     img.parentElement.insertBefore(lens, img);
//     cx = result.offsetWidth / lens.offsetWidth;
//     cy = result.offsetHeight / lens.offsetHeight;

//     result.style.backgroundImage = "url('" + img.src + "')";
//     result.style.backgroundSize = (img.width * cx) + "px" + (img.height * cy) + "px";

//     lens.addEventListener("mousemove", moveLens);
//     img.addEventListener("mousemove", moveLens);

//     lens.addEventListener("touchmove", moveLens);
//     img.addEventListener("touchmove", moveLens);

//     function moveLens(e){
//         let pos, x, y;
//         pos = getCursorPos(e);
//         x = pos.x - (lens.offsetWidth / 2);
//         y = pos.y - (lens.offsetHeight / 2);

//         if (x > img.width - lens.offsetWidth) { x = img.width - img.offsetWidth;}
//         if (x < 0) { x = 0;}
//         if (y > img.height - lens.offsetHeight) { y = img.height - img.offsetHeight;}
//         if (y < 0) { y = 0;}

//         lens.style.left = x + "px";
//         lens.style.top = y + "px";
//         result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//     }

//     function getCursorPos(e){
//         var a, x = 0, y = 0 ;
//         e = e || window.Event;
//         a = img.BoundingClientRect();
//         x = e.pageX - a.left;
//         y = e.pageY - a.top;
//         x = x - window.pageX;
//         y = y - window.pageY;
//         return { x : x, y : y };
//     }
// }
