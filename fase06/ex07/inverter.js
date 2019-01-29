function inverter(peixe){   
if (typeof peixe == "object")
return peixe.reverse()
else 
var a=peixe.split("");
var b=a.reverse();
var c=b.join("");
return  c
}
