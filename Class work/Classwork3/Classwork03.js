/*    1. Chúng ta có array 4 thành viên của Beatles bao gồm ["John", "Paul", "George", "Ringo"].
Bạn Xan muốn trở thành thành viên thứ 5 của The Beatles,
hãy giúp thêm bạn Xan vào trong array trên nhé, 
sử dụng cú pháp đã học về array[index]?   */

// Solution1: 

const BEATLES=['John','Paul','George','Ringo'];
BEATLES.push('Phan');
console.log(BEATLES);

/*  2. Cho một array gồm n số hạng.
 Các bạn hãy viết chương trình tính giá trị trung bình cộng của n số hạng này 
 sử dụng kiến thức về array và loop? */

 //Solution 2:

 const arr=[1,2,3,4,5,6,7,8,9];
 let sum=0;
 for(let i=0;i<arr.length;i++){
     sum+=arr[i];
 }

 let mean=sum/arr.length;
 console.log(mean);

 /* 5. Cuối buổi hôm trước chúng mình đã nói về Collatz Sequence:
cho một số nguyên dương n > 1, nếu đó là số chẵn, hãy chia cho 2, 
nếu đó là số lẻ, hãy nhân 3 và cộng thêm 1. 
Lặp đi lặp lại bước đó cho đến khi giá trị cuối cùng của dãy số bằng 1. 
Bạn hãy thử viết lại chương trình kiểm tra dãy đó có đúng không với n = 1000?  */

// Solution 5:

function collatz(n){
    while(n!==1){
        if (n%2==0){ n/=2; console.log(n);}
        else {n=n*3+1; console.log(n);}
    }
    return n;
}

console.log(collatz(1000));

 