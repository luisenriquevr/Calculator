function init(){
	alert("This is the firt time I program in HTML, CSS or JS.\nThank you for this opportunity.");
}
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult(0);
}