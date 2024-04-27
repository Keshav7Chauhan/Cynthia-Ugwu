// 1. Selection of an Element
// document.querySelector("h1") 
// iska mtlb html ke andr kisi query ko slct krlo. Agr baar-baar querySelector nhi likhna ho to isko variable (var) ke andr lga do.
// var a = document.querySelector("h1") 
// console.log(a)

// 2. Changing HTML
// var a = document.querySelector("h1")
// a.innerHTML = "Changed HTML"

// 3. Changing CSS
// var a = document.querySelector("h1")
// a.style.color = "green"
// a.style.backgroundColor = "black"


// 4. Event Listener
// var a = document.querySelector("h1")
// a.addEventListener("click", function(){  
    // function ki body ke andr code likhte h
    // console.log("hey")

    // a.innerHTML = "hello"
    // a.style.color = "green"
    // a.style.backgroundColor = "black"
// })



// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")

// var flag = 0

// btn.addEventListener("click", function(){
//     if(flag==0){
//     bulb.style.backgroundColor = "yellow"
//     console.log("Cliocked")
//     flag = 1
// }else{
//     bulb.style.backgroundColor = "transparent"
//     console.log("Agail clieckedf")
//     flag = 0
// }
    
// })


// var h = document.querySelectorAll("h1")
// console.log(h)

// h.forEach(function(e){
//     console.log(e)
// })
    
// var h = document.querySelector("h1")
// h.textContent = "hello"


var box = document.querySelector("#box")
box.innerHTML = "<h1>hello</h1>"

