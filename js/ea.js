var rad = document.myForm.example;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function () {
        (prev) ? console.log(prev.value) : null;
        if (this !== prev) {
            prev = this;
        }
        if (this.value == 'bt1') {
            var element1 = document.getElementById("bt1");
            element1.classList.remove("hidden");
            element1.classList.add("block");

            var element2 = document.getElementById("bt2");
            element2.classList.remove("block");
            element2.classList.add("hidden");
        }
        if (this.value == 'bt2') {

            var element1 = document.getElementById("bt1");
            element1.classList.remove("block");
            element1.classList.add("hidden");

            var element2 = document.getElementById("bt2");
            element2.classList.remove("hidden");
            element2.classList.add("block");

        }
    });
}

function onSubmitBT1() {
    var target = document.getElementById('strTarget').value;
    var n_pop = document.getElementById('N').value;
    var n_gen = document.getElementById('DB').value;


    if (parseFloat(n_pop) < 1) {
        document.getElementById("msg-error1").innerHTML = 'Cá thể ban đầu phải > 0';
    }
    else if (parseFloat(n_gen) < parseFloat(n_pop)) {
        document.getElementById("msg-error1").innerHTML = 'Số lượng cá thể mới phải > Cá thể ban đầu';
    } else {
        document.getElementById("msg-error1").innerHTML = ''
        onSubmitSearch(target, n_pop, n_gen)
    }
}

function checkValidate() {
    let rs = true
    var knapsackValue = document.getElementById('knapsackValue').value;
    var countItem = document.getElementById('countItem').value;
    var beginN = document.getElementById('beginN').value;
    var newN = document.getElementById('newN').value;
    var maxValue = document.getElementById('maxValue').value;

    if (parseFloat(countItem) > 20) {
        document.getElementById("msg-error").innerHTML = 'Số lượng đồ vật không được > 20';
        rs = false
    } else if (parseFloat(maxValue) < parseFloat(countItem)) {
        document.getElementById("msg-error").innerHTML = 'Giá trị cao nhất phải > Số lượng đồ vật';
        rs = false
    }
    else if (parseFloat(knapsackValue) < 1) {
        document.getElementById("msg-error").innerHTML = 'Sức chứa của túi phải > 0';
        rs = false
    }
    else if (parseFloat(beginN) < 1) {
        document.getElementById("msg-error").innerHTML = 'Cá thể ban đầu phải > 0';
        rs = false
    }
    else if (parseFloat(beginN) > Math.pow(2, countItem)) {
        document.getElementById("msg-error").innerHTML = 'Cá thể ban đầu không hợp lệ';
        rs = false
    }
    else if (parseFloat(newN) < parseFloat(beginN)) {
        document.getElementById("msg-error").innerHTML = 'Số lượng cá thể mới phải > Cá thể ban đầu';
        rs = false
    }


    return rs
}


function onSubmitBT2() {
    var knapsackValue = document.getElementById('knapsackValue').value;
    var countItem = document.getElementById('countItem').value;
    var maxValue = document.getElementById('maxValue').value;
    var beginN = document.getElementById('beginN').value;
    var newN = document.getElementById('newN').value;
    let rsCheck = checkValidate()

    if (rsCheck) {
        document.getElementById("msg-error").innerHTML = ''
        let strHTML = ''
        let value = 0
        let arrWeight = []
        // for (let i = 0; i < countItem; i++) {
        //     value = Math.floor(Math.random() * (maxValue - 1 + 1)) + 1
        //     strHTML += "  <div class='item'><p>" + value + "</p></div> "
        //     arrWeight.push(value)
        // }
        // console.log("arrWeight.length !== countItem", arrWeight.length, countItem);
        let i = 0
        while (i < countItem) {
            value = Math.floor(Math.random() * (maxValue - 1 + 1)) + 1
            if (!arrWeight.includes(value)) {
                strHTML += "  <div class='item'><p>" + value + "</p></div> "
                arrWeight.push(value)
                i++
            }
        }

        // console.log("arrItem", arrItem);
        document.getElementById("list-item").innerHTML = strHTML;
        onSubmitKnapsack(beginN, knapsackValue, arrWeight, newN)
    }
}