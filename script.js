var right = document.querySelector('.right')
var onegb = document.querySelector('.onegb')
var twogb = document.querySelector('.twogb')
var slideOne = document.querySelector('.slideOne')
var element1 = document.querySelector('.element1')
var element2= document.querySelector('.element2')
var element3 = document.querySelector('.element3')
var element4 = document.querySelector('.element4')
var element5 = document.querySelector('.element5')

startAnimation(); 

function startAnimation(){
    setTimeout(function(){
        element1.classList.remove('hidden')
        element1.classList.add('flyIn')
    },500)
}
// dragElement(document.querySelector(".element4"));
if(typeof window.orientation !== 'undefined'){
    dragElementMobile(document.querySelector(".element4"));
}
else{
    dragElement(document.querySelector(".element4"));
}




function dragElement(elmnt){
    
    var pos1 = 0, pos3 = 0;
    if(document.getElementById(elmnt.id + "header")){
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;    
        console.log("kk")
    } else{
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e){
        element5.classList.add('hidden')
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;    
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        leftSpace = elmnt.offsetLeft - pos1;
        leftSpace1 = elmnt.offsetLeft - pos3;
        draggedResult(elmnt, leftSpace);
      }
    
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
}

function dragElementMobile(elmnt){
    var pos1 = 0, pos3 = 0 ;
    if(document.getElementById(elmnt.id + "header")){
        document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
      
    } else{
        elmnt.ontouchstart = dragMouseDown;
        console.log("kkk")
    }
    function dragMouseDown(e){
        console.log("mm")
        element5.classList.add('hidden')
        e = e.touches[0] || window.event;
        // e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;    
        document.ontouchmove = elementDrag;
    }
    function elementDrag(e) {
        console.log("mmmm")
        e = e.touches[0] || window.event;
        // e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        leftSpace = elmnt.offsetLeft - pos1;
        leftSpace1 = elmnt.offsetLeft - pos3;
        draggedResult(elmnt, leftSpace);
      }
    
      function closeDragElement() {
        console.log("oooo")
        document.ontouchend = null;
        document.ontouchmove = null;
      }
}



function draggedResult(elmnt, leftSpace){
        if(leftSpace>130){
            element3.classList.add('booming')

            setTimeout(function(){
                element1.classList.add('hidden')
                element3.classList.remove('booming')
                element2.classList.add('away1')
                element3.classList.add('away2')
                element4.classList.add('hidden')
                setTimeout(function(){
                    slideOne.classList.add('hidden')
                    onegb.classList.add('hidden')
                    twogb.classList.remove('hidden')
                    twogb.classList.add('show')
                },700)
            },500)

        } 
    
    
        if(leftSpace<120){
            element2.classList.add('booming');
            setTimeout(function(){
                element2.classList.remove('booming');
                element1.classList.add('hidden');
                element2.classList.add('away1');
                element3.classList.add('away2');
                element4.classList.add('hidden');
                setTimeout(function(){
                    slideOne.classList.add('hidden')
                    twogb.classList.add('hidden')
                    onegb.classList.remove('hidden')
                    onegb.classList.add('show')
                },700)
            },500)
        } 
}


