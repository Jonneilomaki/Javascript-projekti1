var tuotteet = new Array();


function add_element(){
if (document.getElementById('syöttö').value.length < 3){
    var input = document.getElementById('syöttö');
    input.style.borderColor = 'red';
    alert("Liian lyhyt syöttö! Syötä vähintään 3 merkkiä!");
    console.log (tuotteet);
    return false;
}
tuotteet.push(document.getElementById('syöttö').value);
document.getElementById('syöttö').value='';
var input = document.getElementById('syöttö');
input.style.borderColor = 'black';
console.log (tuotteet);
disp();
}
function remove_element(index_no){
var syöttöjä=tuotteet.splice(index_no,1);
console.log (tuotteet);
disp();
}

function validate(index_no) {
var syöttöjä = tuotteet[index_no];
const vaihto = document.getElementById(index_no);
vaihto.style.color='green';

}


function disp(){
var str='';
var str2='';
str = 'Items on the list: ' + tuotteet.length + '<br>';
for (i=0;i<tuotteet.length;i++) 
{
str2 += "<li id='"+tuotteet.indexOf(tuotteet[i])+"'><a href=# onClick='validate("+tuotteet.indexOf(tuotteet[i])+")'><input type='checkbox' id='boxi'></a>" + tuotteet[i] + " <a href=# onClick='remove_element("+tuotteet.indexOf(tuotteet[i])+")'><button> Remove</button></a></li>" + "<br >";
var lista = document.getElementById("disp");
localStorage.setItem("x",lista);
const tiedot = localStorage.getItem("x");
console.log(lista.innerHTML);
}


document.getElementById('disp1').innerHTML=str;
document.getElementById('disp').innerHTML=str2;


}


console.log (tuotteet);