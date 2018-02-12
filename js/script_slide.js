// скролл
    $(document).ready(function() {
   $('a[href^="#_"]').on('click',function () {
          var target = $($(this).attr("href"));
          if (target.length>0){
              var scroll = target.offset().top;
              $('html,body').animate( { scrollTop: scroll }, 800 );
              return false;
          }
      });
})


 

    
   