var rate;
function myfn(){
   var x = document.getElementById("amt").value;
   var z = document.getElementById("select").value;
   var p = Number(x);
   if(p<0)
  {
   alert("Enter a positive number");
  } 
   var r = Number(z);
//    if(document.getElementById("result").style.display=="none")
//   {document.getElementById("result").style.display="block";}
   var res = (p*rate*r)/100;
   document.getElementById("result").innerHTML = " "+String(res);
}
function updateTextInput(val) {
   rate = val;
   document.getElementById('textInput').innerHTML = rate + "%";
 }