//1: Nhập vào tên của bạn, in ra Hello + tên ! , viết tên của b ơ phần comment

let name ='Phan Anh';
console.log('Hello ' + name )
//2: Nhập vào năm, in ra năm đó có phải năm nhuận không?
let leapYear=(year)=>{
    if (year % 4===0) return 'yes'
    else return 'no'
}

console.log(leapYear(2021));
//3: Nâng cao:
// Cho điểm 5 môn Physics, Chemistry, Biology, Mathematics and Computer. Tính toán điểm trung bình (%) và in Grade (cấp) theo bảng sau:

// Điểm trung bình (%) >= 90% : Grade A

// Điểm trung bình (%) >= 80% : Grade B

// Điểm trung bình (%) >= 70% : Grade C

// Điểm trung bình (%) >= 60% : Grade D

// Điểm trung bình (%) >= 40% : Grade E

// Điểm trung bình (%) < 40% : Grade F

// Ví dụ: physics = 10, chemistry = 9.5, biology = 9.2, mathematics = 10, computer = 9. Thì điểm trung bình (%) là 95.4. => Kết quả: Grade A
// Đầu vào: physics, chemistry, biology, mathematics, computer
// Đầu ra: grade 
// Gợi ý
// Điểm trung bình (%) = ((physics + chemistry+ biology + mathematics  +computer) / 50) * 100
// Và dùng if ... else để tính grade 

let grade = (physics, chemistry, biology,mathematics,computer)=>{
    let averageGrade=((physics+chemistry+biology+mathematics+computer)/5)*10;
    if (averageGrade>=90) return 'Grade A'
    else if (averageGrade>=80) return 'Grade B'
    else if (averageGrade>=70) return 'Grade C'
    else if (averageGrade>=60) return 'Grade D'
    else if (averageGrade>=50) return 'Grade E'
    else if (averageGrade>=40) return 'Grade F'
}
console.log(grade(10,7,8,8,10))