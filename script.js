var display = document.getElementById('display');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            display.innerHTML = eval(display.innerHTML);
             
        } else if (pushed == 'AC') {
            // All Clear
            display.innerHTML = '0';
             
        } else {
            if (display.innerHTML == '0') {
                display.innerHTML = pushed;
                 
            } else {
                display.innerHTML += pushed;   
            }
        }
    }