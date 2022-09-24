let dragItems = document.querySelectorAll('.box');
let droparea = document.querySelector('#droparea');
let count = document.getElementById('count');
count.innerHTML = "4";

droparea.addEventListener('dragover', function(e) {
    e.preventDefault();
})

droparea.addEventListener('dragleave', function(e) {
    e.preventDefault();
})

for(var i = 0; i<dragItems.length; i++) {
    dragItems[i].addEventListener('dragstart', function(e) {  
        e.dataTransfer.setData('developer', this.id)
        console.log(e.dataTransfer)
    })
}

droparea.addEventListener('drop', function(e) {
let index = e.dataTransfer.getData('developer')
let drgitem = document.getElementById(index)
droparea.appendChild(drgitem)
count.innerHTML --;
})