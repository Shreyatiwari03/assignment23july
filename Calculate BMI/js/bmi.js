let compareBMI
let jBMI=0
let tBMI=0
let jHeight=1.70
let tHeight=1.66

let jWeight=60
let tWeight=66

jBMI=jWeight/(jHeight*jHeight)
tBMI=tWeight/(tHeight*tHeight)

if(jBMI>tBMI){
    compareBMI=true
}else{
    compareBMI=false
}
console.log(`Jeff’s BMI :${jBMI} and Todd’s BMI :${tBMI}`)
console.log(`is Jeff’s BMI higher than Todd’s?: ${compareBMI}`)
