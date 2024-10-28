/*let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(``)
console.log(`O primeiro valor do vetor é o ${num[1]}`)*/

let num = [8,1,7,4,2,9]
num.push(3)
num.sort()

//console.log(num)

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`);    
}*/
/*
for (let pos in num) {
    console.log(`A posiçao ${pos} tem o valor de ${num[pos]}`)        
    }*/

let pos = num.indexOf(6)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor está na posiçao ${pos}`)
}

