function calculate(a,b,operation){
    return operation(a,b)
}

const add = (a,b) => a+b
const sub = (a,b) => a-b

console.log(calculate(6,4,add))

console.log(calculate(6,4,sub))
