 $(document).ready(function () {


     $(".box").click(function () {
         $("img", this).fadeIn();
         $("#description").fadeIn("2000");
         $("#reload").fadeIn("3000");
         var typetb = $(this).data("typetb");
         var perctb = $(this).data("perctb");
         document.getElementById('type').innerHTML = typetb;
         document.getElementById('perc').innerHTML = perctb;


     });
     $("#reload").click(function () {
         $(".box > img").fadeOut();

     });

     /* $('.btn').click(function () {
          
          var iframe = document.querySelector(".profilo");
             iframe.src = iframe.src;
          //vimeoWrap = $('.vimeoWrap');
          //vimeoWrap.html(vimeoWrap.html());
      });*/



     $('.btn-group li').click(function () {
         var target = "#" + $(this).data("target");

         $(this).addClass("active-section");
         $('.btn-group li').not(this).removeClass("active-section");

         $(".container").not(target).addClass("hide-01");
         $(target).removeClass("hide-01");



         var $frame = $(target).find("iframe");
         var allframes = $(".main-video-box").find("iframe");
         // saves the current iframe source
         var vidsrc = $(this).data('videosrc');


         // sets the source to nothing, stopping the video
         allframes.attr('src', '');

         // sets it back to the correct link so that it reloads immediately on the next window open
         $frame.attr('src', vidsrc);




     });


 });
