jQuery(document).ready(function(){
   
    jQuery(".mention-link").click(function(){
       event.preventDefault();
       if(jQuery(".mention-link").find('span').hasClass('fa-chevron-down')){
          
          jQuery('.mention-link').find('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
          jQuery('.mention-text').slideDown();
       }else{
          
          jQuery('.mention-link').find('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
          jQuery('.mention-text').slideUp();
       }
    });
 });