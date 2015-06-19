document.getElementById('fib').onclick = function() {
    alert(chislo + "-e chislo fibonachi:\n" + fib(chislo));
}

var chislo = 10; //TUT VOT VVOD

function fib(digit) {
    if (digit <= 2)return 1;
    var fibone = 1;
    var fibtwo = 1;
    var result;
    for (var i = 2; i < digit; i++) {
        result = fibone + fibtwo;
        fibone = fibtwo;
        fibtwo = result;
    }
    return result;
}