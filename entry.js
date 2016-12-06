require("./style.css");
// import { sayItWorks } from './content'
// sayItWorks();
$(document).ready(function(){
  $('.show-content').click(function() {
    $(this).parent().parent().children('p').toggle()
  });

  // $('.show-content').click(function() {
  //   $(this).parent().siblings('p').toggle()
  // });
});
