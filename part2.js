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
console.log(verifyemail("rahul852369@gma23il.com"));