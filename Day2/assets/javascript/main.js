
const box1 = document.querySelector('#check1');
const radio = document.querySelector('#radio');


var button=document.getElementById("button");

button.addEventListener("click",function(){
    console.log(box1.checked)
    if(box1.checked){
        var randomColor = Math.floor(Math.random()*16777215).toString(16)
        var change=document.getElementsByClassName("changecol");
        for(var i = 0; i < change.length; i++){
            change[i].style.color="#"+randomColor;
        }
    }
    if(radio.checked){
        
        document.getElementById("image2").style.display="block";
    }

    
});


var button2=document.getElementById("button");


