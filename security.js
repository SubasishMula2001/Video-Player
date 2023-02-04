// secure ctrl+u,ctrl+shift+i

    document.onkeydown = function(e) {

            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keyCode === 83 || e.keyCode === 68 || e.keyCode == 123)) {

               return false;

            }

           else if(e.ctrlKey && e.shiftKey && e.keyCode === 73){

            return false;

           }
           else if(e.ctrlKey && e.shiftKey && e.keyCode === 73){

            return false;

           }
           else if (e.keyCode == 123) { // Prevent F12
              return false;
          } 
          else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Prevent Ctrl+Shift+I        
              return false;
          }
          else if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { // Prevent Ctrl+Shift+J      
              return false;
          }

    };



  // secure right click



  document.oncontextmenu = function(){

    return false;

  }

  $(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});
