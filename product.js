/*function x1(){
    x=5;
    var y=6;
}
x1();/*  global varهتتعرف كل xلازم اعمل كول للفانكشن علشان ساعتها ال */
/*console.log(x);*/
var alaa="Alaa sherif"
/*change every lower to upper and reverse*/
// var result=""
// for(var i=0;i<alaa.length;i++){
//     console.log(i);
//   if(alaa[i].toLowerCase()==alaa[i]){
//     result+=alaa[i].toUpperCase();
//   }else{
//     result+=alaa[i].toLowerCase();
//   }
// }
/*document.write("alaa</br>") 
document.write("sherif") */
/*var text=prompt("Enter the string want to print");
for(var i=1;i<7;i++){
    document.write(`<h${i}>${text}</h${i}></br>`)
}*/
var i=0;
var sum=0;
while(i<100 ){
    sum=prompt("Enter number: ");
    if(!isNaN(sum)){
      i=i+sum;
      alert(i);
    }else{
      alert("Is not a number Try again!");
    }
}
if(i>100){
    alert("Exceede Number");
}