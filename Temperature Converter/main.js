const celcius=document.getElementById('celcius')
const farenhite=document.getElementById('farenhite')
const kelvin=document.getElementById('kelvin')
const reset=document.getElementById('btn')

celcius.addEventListener("input",()=>{
    const c=celcius.value;
    console.log(typeof(c))
    if(c=="")
    {
        rst()
    }
    else 
    {
        const exp1=`(${c}*(9 / 5)) + 32` ;
        let ans1= eval(exp1);
        ans1 = ans1.toFixed(3);
        farenhite.value=ans1 ;
    
       const  exp2=`( ${c} + 273.15 )`
       let ans2=eval(exp2)
       ans2 = ans2.toFixed(3)
       kelvin.value=ans2 ;
    }
})


farenhite.addEventListener("input",()=>{
    
    const f=farenhite.value ;
    if(f=="")
    {
        rst()
    }
    else 
    {
        const exp1=`(${f}-32)*(5/9)` ;
        let ans1= eval(exp1);
        ans1 = ans1.toFixed(3)
        celcius.value=ans1 ;
    
       const  exp2=`( (${f} + 459.67)*(5/9) )`
       let ans2=eval(exp2)
       ans2 = ans2.toFixed(3)
       kelvin.value=ans2 ;
    }



})


kelvin.addEventListener("input",()=>{

    const k=kelvin.value ;
    if(k=="")
    {
        rst()
    }
    else 
    {
        const exp1=`${k}-273.15` ;
        let ans1= eval(exp1)
        ans1 = ans1.toFixed(3)
        celcius.value=ans1 ;
    
       const  exp2=`( (${k}*(9/5)) -459.67 )`
       let ans2=eval(exp2)
       ans2 = ans2.toFixed(3)
       farenhite.value=ans2 ;
    }
})


const rst=()=>{
    celcius.value=null
    farenhite.value=null
    kelvin.value=null

}
reset.addEventListener('click',()=>{
    celcius.value=null
    farenhite.value=null
    kelvin.value=null
})

