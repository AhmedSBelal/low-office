



//////////////////////////////////////////////// services


var servBoxes = document.querySelectorAll(".serv-box");

var haveScale = -1;

for (let i = 0; i < servBoxes.length; i++) {
  servBoxes[i].addEventListener("click", function () {
    servBoxes.forEach((ele) => {
      if (ele.classList.contains("scale") && ele !== servBoxes[i]) {
        ele.classList.remove("scale");
      }
    });

    if (this.classList.contains("scale")) {
      this.classList.remove("scale");
      haveScale = -1;
    } else {
      this.classList.add("scale");
      haveScale = i;
    }
    
    if(haveScale != -1){

    for(let i = 0; i < servBoxes.length; i++) {

        if(i != haveScale){
            servBoxes[i].classList.add('blur');
        }else{
            servBoxes[i].classList.remove('blur');
        }

    }

    }else {

        servBoxes.forEach(
            (ele) => {
    
                if(!ele.classList.contains('scale')) 
                    ele.classList.remove('blur');
    
            })

    }

  });
}