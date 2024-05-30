
// function isPalindrome(num){
//     if(num == undefined  || num < 0)
//         return false;

//     let tmp = num;
//     let rev = 0;
//     while(tmp != 0){
//         let rem = tmp % 10;
//         tmp = Math.floor(tmp / 10);
//         rev = rev * 10 + rem;
//     }
//     if(rev == num)
//         return true;

//     return false;
// }

// console.log(isPalindrome(141));

let isPalindrome = function(x) {
    if(x == undefined  || x < 0)
        return false;

    let tmp = x;
    let rev = 0;
    while(tmp != 0){
        rev = rev * 10 + (tmp % 10);
        tmp = Math.floor(tmp / 10);
    }
    if(rev == x)
        return true;

    return false;
};

console.log(isPalindrome(121));