function getconvert() {
    let giatri=document.getElementById('number').value;
    a=parseInt(giatri);
    let b=a/23000;
    document.getElementById('result').innerHTML='Result: ' +b;

}