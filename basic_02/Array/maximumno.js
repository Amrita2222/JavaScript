
// let integernumber = [2,54,65,76,87,98,78,67,56,4,53,42,7,5];
// integernumber.sort();
// console.log(integernumber);
// let length = integernumber.length;
// let bignumber = integernumber[13]
// console.log(bignumber);
// console.log(length);
/*
integernumber.reverse();
 let bignumber =integernumber[0];
 console.log(bignumber);
*/


function missing(arr){
            let missingnumber = [];
            
            let minimum = Math.min(...arr);
            let maxmium = Math.max(...arr);
            
     for(let i= minimum; i<maxmium; i++){
         if(arr.indexOf(i) <0){
            missingnumber.push(i);
         }
              
    }
     return missingnumber;
}
        
        console.log(missing([1, 2, 3, 5]));