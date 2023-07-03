// This is our main function
function fizzbuzz() {
    let numbers = {3: "Fizz", 5:"Buzz"};
    for(let i = 1; i <= 100; i++) {
        let str = "";
        for(const key of Object.keys(numbers)) {
            if(i % key == 0) {
                str += numbers[key];
            }
        }
        if(str === "") {
            console.log(i);
        } else {
            console.log(str);
        }
    }

}

// Now, we run the main function:
fizzbuzz();

