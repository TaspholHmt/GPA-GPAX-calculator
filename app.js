function main(){
    GPAX = +document.getElementById("GPAX").value;

    g1 = +document.getElementById("g1").value;
    g2 = +document.getElementById("g2").value;
    g3 = +document.getElementById("g3").value;
    g4 = +document.getElementById("g4").value;
    g5 = +document.getElementById("g5").value;
    console.log("เกรดย่อย" +  g1,g2,g3,g4,g5)

    totalG = g1+g2+g3+g4+g5
    console.log(totalG)

    u1 = +document.getElementById("u1").value;
    u2 = +document.getElementById("u2").value;
    u3 = +document.getElementById("u3").value;
    u4 = +document.getElementById("u4").value;
    u5 = +document.getElementById("u5").value;
    console.log("เกรดย่อย" +  u1,u2,u3,u4,u5)

if (u5 == 0){
    totalU = u1+u2+u3+u4
}else if (u5 > 0){
    totalU = u1+u2+u3+u4+u5
}
    console.log(totalU)

    // x = ((g1 * u1) + (g2 * u2) + (g3 * u3) + (g4 * u4) + (g5 * u5))
    // console.log(x)
    // result = ((GPAX*totalU)-x)/u5
    result = (((g1 * u1) + (g2 * u2) + (g3 * u3) + (g4 * u4) + (g5 * u5)) / totalU);
    console.log(result.toFixed(2))
    document.getElementById("result").innerHTML = result
}