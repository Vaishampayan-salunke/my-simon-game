let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', function(){
    // console.log("Button clicked");
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    // delBtn.addEventListener("click", function() {
    //     ul.removeChild(item);
    // })

    item.appendChild(delBtn);  // adding delete button inside li
    ul.appendChild(item);    // adding items inside ul
    input.value = "";  // to reset after adding item
});

ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON") {
        let Listitem = event.target.parentElement;
        // ul.removeChild(item);
        Listitem.remove();
        console.log("delete button clicked");
    }   
})

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function(){
//         // console.log("Delete button clicked");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }