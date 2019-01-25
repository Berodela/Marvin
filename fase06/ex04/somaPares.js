

function somaPares(min, max){
y=[]
b=0
min=Math.round(min)
max=Math.floor(max)
    for (i=min; i<= max; i++)
        if (i%2==0)
        y.push(i)
    for(w=0;w<y.length;w++){
       b= y[w]+ b}
    return b
}