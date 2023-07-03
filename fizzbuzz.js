// This is our main function

function addBeforeFirstB(str) {
    let index = 0;
    while(index < str.length) {
        if (str.charAt(index) === 'B') {
            break;
        }
        index++;
    }
    if(index <= 0) {
        return "Fezz" + str;
    } else if (index >= str.length) {
        return str + "Fezz";
    } else {
        return str.slice(0, index) + "Fezz" + str.slice(index);
    }
}

function revOrder(str, divider) {
    let newstrn = "";
    for(let i = divider; i <= str.length; i += divider) {
        let removed = str.slice(i - divider, i);
        newstrn = removed + newstrn;
    }
    return newstrn;
}
function fizzbuzz() {

   const input = prompt("Please enter the rules you want to apply");


    let dict = {
        3: (strn) => strn + "Fizz",
        5:(strn) => strn + "Buzz",
        7: (strn) => strn + "Bang",
        11: (strn) => "Bong",
        13: (strn) => addBeforeFirstB(strn),
        17: (strn) => revOrder(strn, 4)
    };

    numbers = [3,5,7,13,17,11];

    for(let i = 1; i <= 255; i++) {
        let str = "";
        for(const num of numbers) {
            if(i % num === 0) {
                str = dict[num](str);
            }
        }
        if(str === "") {
            console.log(i);
        }
        else {
            console.log(str);
        }
    }

}



// Now, we run the main function:
fizzbuzz();

