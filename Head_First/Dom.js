function init(){
var access = document.getElementById("code1");
alert(access.innerHTML);
//var code = access.innerHTML;
//alert(code);
access.innerHTML = "Hello, word";
alert(access);
var color = access.setAttribute("class", "redtext");
alert(access.innerHTML);
//access.getAttribute("id");
console.log(access.getAttribute("id"));
}
window.onload = init;