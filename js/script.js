document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
            document.body.style.overflow = "visible";
        }
    }, 2000);
  
};



let horizontScroll2 = document.querySelector('.container-news');
        let leftbtn_2 = document.getElementById('leftbtn-news');
        let rightbtn_2 = document.getElementById('rightbtn-news');

        rightbtn_2.addEventListener('click', ()=> {
            horizontScroll2.style.scrollBehavior = "smooth";
            horizontScroll2.scrollLeft += 300;

        });

        leftbtn_2.addEventListener('click', ()=> {
            horizontScroll2.style.scrollBehavior = "smooth";
            horizontScroll2.scrollLeft -= 300;

        });


let horizontScroll = document.querySelector('.container');
        let leftbtn = document.getElementById('leftbtn');
        let rightbtn = document.getElementById('rightbtn');

        rightbtn.addEventListener('click', ()=> {
            horizontScroll.style.scrollBehavior = "smooth";
            horizontScroll.scrollLeft += 300;

        });

        leftbtn.addEventListener('click', ()=> {
            horizontScroll.style.scrollBehavior = "smooth";
            horizontScroll.scrollLeft -= 300;

        });




$(window).on('load', function(){ 
    $('#video-container').vide('./assets/video/club_2', { 
        overlay: true,
        overlayColor: false, // отключаем цвет наложенного слоя
    }); 
    $('#video-container').append('<div class="video-overlay"></div>'); // добавляем наложенный слой
});