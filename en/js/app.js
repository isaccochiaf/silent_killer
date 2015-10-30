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

     $('.btn').click(function () {

         // vimeoWrap = $('.vimeoWrap');
         //  vimeoWrap.html(vimeoWrap.html());
     });

     $('.btn-group li').click(function () {
         var target = "#" + $(this).data("target");
         $(this).addClass("active-section");
         $('.btn-group li').not(this).removeClass("active-section");

         $(".container").not(target).addClass("hide-01");
         $(target).removeClass("hide-01");



     });


 });
