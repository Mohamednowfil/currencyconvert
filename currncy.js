let select= document.querySelectorAll(".currency")
let btn = document.getElementById("btn")
let input = document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res=> displaydropdown(res))

function displaydropdown(res){
      let cur=  Object.entries(res);
      for(i=0;i<cur.length;i++){
         let opt = `<option value="${cur[i][0]}">${cur[i][0]}</option>`
         select[0].innerHTML += opt
         select[1].innerHTML += opt
 }
}

btn.addEventListener('click',()=>{
    let cur1= select[0].value 
    let cur2= select[1].value
    let inputvalue = input.value
    if(cur1===cur2){
        alert("Both are same currency")
    }else{
        convert(cur1,cur2,inputvalue)
    }
})

function convert(cur1,cur2,inputvalue){const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputvalue}&from=${cur1}&to=${cur2}`)
      .then(resp => resp.json())
      .then((data) => {


        document.getElementById("result").value= Object.values(data.rates)[0]
      });}




/* let select = document.querySelectorAll(".currency")
let btn = document.getElementById("btn")
let input = document.getElementById("input")
fetch('https://api.frankfurter.app/currencies')
.then(res=> res.json())
.then(res=> displaydropdown(res))

function displaydropdown(res){
    let cur= Object.entries(res)
  for(let i = 0;i<cur.length; i++){
    let opt = `<option value="${cur[i][0]}">${cur[i][0]}</option>`
    
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
    
  }
}
btn.addEventListener('click', ()=>{
   let cur1= select[0].value
   let cur2= select[1].value
   let inputvalue = input.value

   if(cur1===cur2){
    alert("same currency")
   }
   else{
    convert(cur1,cur2,inputvalue)
   }
})
 
function convert(cur1,cur2,inputvalue){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputvalue}&from=${cur1}&to=${cur2}`)
  .then(resp => resp.json())
  .then((data) => {
   document.getElementById('result').value=Object.values(data.rates)[0]
   
  });
}

*/
