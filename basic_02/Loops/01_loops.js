// For Loops

for (let index = 0; index < 10; index++) {
            let element = index;
            if (element == 5) {
                    console.log("5 is better");
            }
//            console.log(element);

}


for (let i = 1; i <= 10; i++) {
            console.log(`Outer loop value: ${i}`);
           for (let j = 1; j <= 10; j++) {
            // console.log(`Inner Loops value ${j} and inner loops ${i}`);
            // console.log(i + '*' + j + '='+ i*j);
           }
}

let myArray = ['superman', 'batman', 'flash']
for (let heroes = 0; heroes < myArray.length; heroes++) {
            const element = myArray[heroes];
            // console.log(element);
}

// break and continue

// for (let num = 0; num <=20; num++) {
//             if (num == 5) {
//                         console.log(`Detected 5`);
//                         break
//             }
//             console.log(`value of i is ${num}`)
            
// }



for (let num = 0; num <=20; num++) {
            if (num == 5) {
                        console.log(`Detected 5`);
                        continue
            }
            console.log(`value of i is ${num}`)
            
}
