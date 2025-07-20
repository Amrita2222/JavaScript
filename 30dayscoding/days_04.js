
// Activity 1: For loop
// let num1 = 0;
// for (let i = 0; i < 10; i++) {
//    num1 += 1;
//     console.log(` ${num1}`);
// }

// let table_num = 5;
// for(let j = 1; j<10; j++){
//     console.log(`${table_num} * ${j} = ${table_num * j}`);  
// }

// Activity 2: while loop

// let sum = 0,
//     i = 1;

//     while (i <= 10) {
//         sum += i;
//         i++;
//      }
//     console.log(`Sum of numbers from 1 to 10 is: ${sum}`);


    let print_num = 10;

    while (print_num >= 1) {
        console.log(` ${print_num}`);
        print_num -= 1;
    }

// Activity 3: do-while loop
    let num3 = 1;

    do {
        console.log(` ${num3}`);
        num3++;
    } while (num3 <= 10);

  
    let num4 = 5;
    let fact = 1;
    let originalNum = num4; 
    do {
        fact *= num4;
        num4--;
    } while (num4 >= 1);    
    console.log(`Factorial of ${originalNum} is: ${fact}`); 
   
//  Activity 4: Nested loop

let n =5;
for (let k = 1; k <= n; k++) {
    let star = ' ';
    for (let j = 1; j <= k; j++) {
      star += '*';

      console.log(star);
    } 
}