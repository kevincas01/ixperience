var num1=0;
var num2=1;

var sum=0;

let message="Fibonnaci Sequence: "

message+= 0 +" "+ 1 +" "
for(let i=1;i<10;i++){
    sum=num1+num2;
    message+= sum+" "
    
    num1=num2;
    num2=sum;
}


console.log(message)