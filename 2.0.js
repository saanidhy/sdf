var score_1=0;
var score_2=0;
function back(){
    window.location="index.html";
}
function sendq(){
l_1=document.getElementById("question1").value;
l_2=document.getElementById("question2").value;
 var question=l_1+"x"+l_2;
 localStorage.setItem("question" , question);
 

 localStorage.setItem("num1" , l_1);
 localStorage.setItem("num2" , l_2);

}