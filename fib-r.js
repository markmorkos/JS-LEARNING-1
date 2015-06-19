document.getElementById('fib-r').onclick = function() {
    alert(chislo + "-e chislo fibonachi:\n" + fib_r(chislo));
}

var chislo = 10; //TUT VOT VVOD

function fib_r(digit) {
    if (digit <= 2)return 1;
    return fib(digit - 1) + fib(digit - 2)
}
