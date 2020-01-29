function call2 (name){
    console.log(name);
    console.log('88')
}

function sum (n1,n2){
    console.log(n1+n2);
}

function sub (n1,n2){
    console.log(n1-n2);
}

function mul (n1,n2){
    console.log(n1*n2)
}

module.exports.call1=call2
module.exports.sum=sum
module.exports.sub=sub
module.exports.mul=mul 
