function maiusculo(palavra){
 return palavra.toUpperCase().slice(0, 3) +palavra.slice(3)   
}
console.log(maiusculo("maiusculo"))