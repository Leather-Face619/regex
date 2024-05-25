//d = matches all digits
// D = matches all non digits
// s = matches all whitespace
// S = matches all non whitespace
// (?: ) = non capturing groups

var verifyemail = (value)=>{
    var email = /[a-z,A-Z,0-9]+(?:[.@][a-z,A-z,0-9])*\.[com,in]+/
    return email.test(value)
}

console.log(verifyemail("hag@hagasdsad.com"))
console.log(verifyemail("rahul852369@gmail.com"));
console.log(verifyemail("rahul852369@gmail.in"));
console.log(verifyemail("rahul852369@gmail.ai"));
console.log(verifyemail("rahul852sd369@gma23il.com"));
// console.table("hahahahah");

var date = (value)=>{
    // var date = /\d{2}\/\d{2}\/\d{4}/
    var date = /^([12][0-9]|[1-9]|0[1-9])\/([0-9]|1[0-2])\/((19|20)[0-9]|1[0-9])[1-9]/
    return date.test(value)
}

console.log(date("11/4/2016"))
console.log(date("12/12/1920"))
console.log(date("5/13/2024"))
