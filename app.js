function gen() {
    let random = [];
    for (let i = 65; i < 91; i++) {
        random.push(i);
    }
    for (let i = 97; i < 123; i++) {
        random.push(i);
    }
    for (let i = 48; i < 57; i++) {
        random.push(i);
    }
    let capcha = [];
    for (let i = 0; i < 6; i++) {
        capcha.push(String.fromCharCode(random[Math.floor(Math.random() * random.length)]));
    }
    document.getElementById("show").innerHTML = `${capcha[0]} ${capcha[1]} ${capcha[2]} ${capcha[3]} ${capcha[4]} ${capcha[5]}`;
}
gen();
document.getElementById("regen").addEventListener("click", function () {
    gen();
});
document.getElementById("sub").addEventListener("click", function () {
    let val = document.getElementById("capcha").value;
    let trueVal = document.getElementById("show").innerHTML;
    let x = true;
    for(let i=0;i<6;i++){
        if(val[i] != trueVal[2*i]){
            x = false;
        }
        console.log(trueVal[2*i]);
    }
    if(x){
        document.getElementById("success").style.display = "block";
        setTimeout(function(){
            document.getElementById("success").style.display = "none";
        },5000);
    }
    else{
        document.getElementById("failure").style.display = "block";
        setTimeout(function(){
            document.getElementById("failure").style.display = "none";
        },5000);
    }
});