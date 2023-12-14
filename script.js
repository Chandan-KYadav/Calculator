function solve(val){
    var output = document.getElementById('display-box');
    output.value += val ;
}

function result(){
    var num1 = document.getElementById('display-box').value;
    var num2 = eval(num1)
    document.getElementById('display-box').value = num2;
}

function clearScreen(){
    document.getElementById('display-box').value = '';
}

function back() {
    var ev = document.getElementById('display-box');
    ev.value = ev.value.slice(0,-1);
}