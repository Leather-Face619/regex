var vali = (num)=>{
    return /^[6-9][\d]{9}$/.test(num)
}

// console.log(vali('9876543210'))
// console.log(vali('777777777'))
var findnum = (val)=>{
    var num = /\d+/gm

    return val.match(num)
}
console.log(findnum("hag1huh12hdja87adbj9"));
console.log(findnum("hag1h619uhgkdofgk74"));
