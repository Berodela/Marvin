
function entreNumeros(num){
    y=[]
    if (num>0)
    for (i=0; i<=num; i++)
        y.push(i) 
    for (i=num; i<=0; i++)
        y.push(i)
    return y
}
