function CalculatePrice() {
    var total = 0;
    var Size = document.getElementsByName("size");
    Size.forEach(function (size) {
        if (size.checked) {
            if (size.value === "small")
                total += 10;
            if (size.value === "large")
                total += 25;
        }
    });
    var toppings = document.getElementsByName("topping");
    toppings.forEach(function (topping) {
        if (topping.checked) {
            switch (topping.value) {
                case "chocolate":
                    total += 5;
                    break;
                case "caramel":
                    total += 6;
                    break;
                case "berries":
                    total += 10;
                    break;
            }
        }
    });
    var Marshmellow = document.getElementById("marshmellow");
    if (Marshmellow.checked) {
        total += 5;
    }
    var result = document.getElementById("result");
    result.textContent = "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C: ".concat(total, " \u0433\u0440\u043D");
}
