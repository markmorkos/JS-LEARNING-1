document.getElementById('gold').onclick = function() {
   console.log("Zolotoe sechenije:\n" + gold(chislo));
}

function gold() {
    var result = (fib_r(1000)/fib_r(999)).toFixed(10);
    return result;
}