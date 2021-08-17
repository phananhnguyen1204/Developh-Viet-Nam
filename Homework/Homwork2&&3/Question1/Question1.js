/* 1. Sử dụng vòng lặp, bạn hãy in tất cả các số chính phương nhỏ hơn 1000. */

//Solution 1:
for(let i=1;Math.pow(i,2)<1000;i++){
    console.log(Math.pow(i,2));
}
//Solution 2:
let i=1;
while(Math.pow(i,2)<1000){
  console.log(Math.pow(i,2));
  i++;
}

//Solution 3:
for(let i=1;i<Math.ceil(Math.sqrt(1000));i++){
    console.log(i**2);
  }

  //Solution 4:

for(let i=1; i*i<1000;i++){
    console.log(i*i);
}   


let n=1;
while(n*n<1000){
    console.log(n*n)
    n++;
}    


//SOlution 2:

function typeOfTriangle(x,y,z){
    if(0<=x,y,z<=10**9){
        if(x==y&y==z){
            return 'Tam giác đều';
        } else if(x==y||y==z||z==x){
            return 'Tam giác cân';
        } else if(x+y>z || x+z>y || z+y>x){
            return 'Tam giác thường';
        } else{
            return'Không tồn tại tam giác';
        }
    } else{
        return 'Error';
    }
}
console.log(typeOfTriangle(7,7,7));


//Solution 3:
function countDigits(num){
    if(0<=num <=10**9){
        return num.toString().length;
    }
    else console.log('Error');

}
console.log(countDigits(50));

//Solution 4:

function divisibility(a,b){
    if(0<= a<=10**9  && 0<= b<=10**9){
        let c=a%b;
        if(c!==0){
            let step= b-c;
            return step;
        } else{
            return 0;
        }
    } else{ 
        return 'Error';
    }
}
console.log(divisibility(5,3));


// Solution 5:

function isSpecialNumber(a){
    let uocLe=[];
    let uocChan=[];
    
    for(let i=1; i<=a;i++){
        if(a%i==0){
            if(i%2==0){
                uocChan.push(i);
            } else {
                uocLe.push(i);
            }
             
        }
    }
    if(uocChan.length===uocLe.length){
        return  a+ ' là số đặc biệt';
    } else {
        return a + ' không là số đặc biệt'
    }
}
console.log(isSpecialNumber(8));

// Solution 6:

function makePlaylist(song,artist){
    if(0<= song.length, artist.length<=10**3){
        let playList={};
        for(let i=0; i<song.length && i<artist.length;i++){
            playList['(song[i])']= 'artist[i]';
            return playList;
        };
       

    } else{
        return 'Error';
    }
}
console.log(['Happy for you','Lạ Lùng','Let her go'],['Vũ','Vũ','Passenger']);


// Solution 7:
const PHIM=
[
    {
        "name": "Paris, Texas",
        "country": "USA",
        "year": 1984,
        "director": "Wim Wenders",
        "watchedStatus": true
    },
    {
        "name": "Three Seasons",
        "country": "Vietnam",
        "year": 1999,
        "director": "Tony Bui",
        "watchedStatus": false
    },
    {
        "name": "Chungking Express",
        "country": "Hong Kong",
        "year": 1994,
        "director": "Wong Kar-wai",
        "watchedStatus": true
    },
    {
        "name": "Cemetery of Splendour",
        "country": "Thailand",
        "year": 2015,
        "director": "Apichatpong Weerasethakul",
        "watchedStatus": false
    },
    {
        "name": "The Scent of Green Papaya",
        "country": "Vietnam",
        "year": 1992,
        "director": "Tran Anh Hung",
        "watchedStatus": false
    },
    {
        "name": "Parasite",
        "country": "South Korea",
        "year": 2019,
        "director": "Bong Joon-ho",
        "watchedStatus": true
    },
    {
        "name": "Before Sunrise",
        "country": "USA",
        "year": 1995,
        "director": "Richard Linklater",
        "watchedStatus": true
    },
    {
        "name": "Breathless",
        "country": "France",
        "year": 1960,
        "director": "Jean-Luc Godard",
        "watchedStatus": false
    },
    {
        "name": "Cyclo",
        "country": "Vietnam",
        "year": 1994,
        "director": "Tran Anh Hung",
        "watchedStatus": true
    }
];
const phimVietNam=[];
phimVietNam.push(PHIM[1].name,PHIM[4].name,PHIM[8].name)

console.log(phimVietNam);

console.log('Đạo diễn nhiều phim nhất: Tran Anh Hung')
