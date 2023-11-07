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
    

    let $this = $(this),
        blockId = $this.data('scroll'),
        elementOfSet = $(blockId).offset().top;

    $(".header_nav .nav_link").removeClass("nav_active");
    $this.addClass("nav_active");

    $("html, body").animate({
        scrollTop: elementOfSet + 1
    }, 1000);

    setTimeout(function() {$this.removeClass("nav_active")}, 2000);

   
});

// let sections = document.querySelectorAll('section');
// let navLink = document.querySelectorAll('.nav_link a');

// console.log(navLink);


//     window.addEventListener("scroll", () => {
//         sections.forEach(sec => {
//             let top = window.scrollY;
//             let offset = sec.offsetTop;
//             let height = sec.offsetHeight;
//             let id = sec.getAttribute('id');

//             if(top >= offset && top < offset + height){
//                 navLink.forEach(link => {
//                     link.classList.remove('nav_active');
//                 });

//                 document.querySelector(`.nav_link a[href='#${id}']`).classList.add('nav_active');
//             };
//         });

//     });

    // window.onscroll = () => {


        // sections.forEach(sec => {
        //     let top = window.scrollY;
        //     let offset = sec.offsetTop - 150;
        //     let height = sec.offsetHeight;
        //     let id = sec.getAttribute('id');

        //     if(top >= offset && top < offset + height){
        //         navLink.forEach(link => {
        //             link.classList.remove('nav_active');
        //         });

        //         document.querySelector(`.nav_link a[href='#${id}']`).classList.add('nav_active');
        //     };
        // });
    // };





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
let port_btn_door = document.querySelector(".port_btn_door");
let port_btn_furniture = document.querySelector(".port_btn_furniture");
let door = document.querySelector(".door");
let furniture = document.querySelector(".furniture");


console.log(btn);

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        
        let caseFilter = this.getAttribute('case-filter');

        for(let k=0; k<portContentOne.length; k++){
            portContentOne[k].classList.remove('active');
            portContentOne[k].classList.add('change');
            port_btn_door.classList.add('color');
            port_btn_furniture.classList.remove('color');
            door.classList.add('nav_active');
            furniture.classList.remove('nav_active');
            setTimeout(function() {
                door.classList.remove("nav_active")
            }, 2000);

            if( portContentOne[k].getAttribute('case-item') == caseFilter){
                portContentOne[k].classList.remove('change');
                portContentOne[k].classList.add('active');
                port_btn_door.classList.remove('color');
                port_btn_furniture.classList.add('color');
                door.classList.remove('nav_active');
                furniture.classList.add('nav_active');
                setTimeout(function() {
                    furniture.classList.remove("nav_active")
                }, 2000);    
            };  
        }; 
    });
    
    
   
};


