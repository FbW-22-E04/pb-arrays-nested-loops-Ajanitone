//Q1

for (let i = 0; i < 4; i++) {
    let asteriskStr = "";
    for (let y = 0; y <= i; y++) {
        asteriskStr += "*";
    }
    console.log(asteriskStr);
}

//Q2

const ARR_Q2 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < ARR_Q2.length; i++) {
   console.log(`row ${i}`);
   for (let y = 0; y < ARR_Q2[i].length; y++) {
       console.log(` ${ARR_Q2[i][y]}`);
   }
}

//Q3

const ARR_Q3a = [];

for (let i = 1; i <= 4; i++) {
   for (let y = 1; y <= 3; y++) {
       let strNums = i.toString();
       ARR_Q3a.push(strNums);
   }
}

console.log(ARR_Q3a.join(" "));

const ARR_Q3b = [];

for (let i = 0; i <= 2; i++) {
   for (let y = 0; y <= 4; y++) {
       strNums = y.toString();
       ARR_Q3b.push(strNums);
   }
}

console.log(ARR_Q3b.join(" "));

//BONUS CHALLENGE

let firstOutput = "";
let secondOutput = "";
for(let i = 1; i <= 5; i++) { 
    if(i < 5) {
        firstOutput += (i * 111);
        secondOutput += i - 1;
    }
    if(i === 5) { 
        for(let j = 0; j < 2; j++) {
            secondOutput += secondOutput.substr(0, 5);
        }
    }
}
console.log(firstOutput.split("").join(" "));
console.log(secondOutput.split("").join(" "));