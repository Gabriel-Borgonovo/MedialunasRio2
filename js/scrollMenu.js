const $header = document.querySelector(".header");
const $links = document.querySelectorAll(".header_nav a");
const $burguerMenu = document.querySelector(".burguer_menu");
const $titles = document.querySelector(".slider-titles");
const $message = document.querySelector(".message-days");
//console.log($links);

export default function scrollMenu(){

    window.addEventListener("scroll", ()=> {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(scrollTop > 80){
            $header.classList.add("bg-scroll");
            $links.forEach(link => {
                link.classList.add("link-scroll");
              });
            $burguerMenu.classList.add("burguer-scroll");
        }else{
            $header.classList.remove("bg-scroll");
            $links.forEach(link => {
                link.classList.remove("link-scroll");
              });
            $burguerMenu.classList.remove("burguer-scroll");
        }

        if(scrollTop > 120){
          $titles.classList.add("disapear");
        }else{
          $titles.classList.remove("disapear");
        }

        if(scrollTop > 600){
          $message.classList.add('message-fixed');
        }else{
          $message.classList.remove('message-fixed');
        }

});

}