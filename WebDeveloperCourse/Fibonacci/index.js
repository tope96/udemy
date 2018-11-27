function fibonacci(n) {
    var array = [0, 1];

    if (n === 1) {
        console.log("0");
    } else if (n === 2) {
        console.log("0, 1");
    } else {
        for (var i = 2; i < n; i++) {
            array.push(array[i - 2] + array[i - 1]);
        }
        var fib = "0, 1";

        for (var n = 2; n < array.length; n++) {
            fib += ", " + array[n];
        }
        console.log(fib);
    }


}

fibonacci(3);
