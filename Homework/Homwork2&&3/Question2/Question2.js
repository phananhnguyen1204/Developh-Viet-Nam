function typefOfTriangle(a,b,c){
    if(Math.abs(b-c)>=a || a>=b+c){
        console.log('Không tồn tại tam giác');
    } else{
        if(a===b && b===c) console.log('Tam giác đều');
        else if((a-b)*(b-c)*(c-a)===0) console.log('Tam giác cân');
        else console.log('Tam giác thường');
    }
}