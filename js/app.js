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

 });
