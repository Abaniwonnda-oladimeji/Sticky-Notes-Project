var container2 = document.querySelector('.container2');
var container3 = document.querySelector('.container3');
var checkIcon = document.querySelector('#check-icon');
var xICon = document.querySelector('#x-icon');
var i = 0;
var createButton = document.querySelector('.create-button');

let lastRotation = ''
function typeNote(){
    if(container3.style.display == 'none'){
        container3.style.display = 'block'
    }
    else{
        container3.style.display = 'none'
    }
}
createButton.addEventListener('click', function(){
    typeNote()
})
xICon.addEventListener('click', function(){
   typeNote(); 
})
checkIcon.addEventListener('click',function(){
    createNote();
})

function createNote(){
var noteText = document.querySelector('#note-text').value; 
var note = document.createElement('div')
var writing = document.createElement('h1')
writing.innerHTML = noteText

note.setAttribute('style', 'width:250px; height:250px; font-size:13px; padding:25px; word-wrap:break-word; margin-top:10px; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.6)')
note.style.margin = margin()
note.style.transform = rotate()
note.style.backgroundColor = color()
note.appendChild(writing)

container2.insertAdjacentElement('beforeend', note)
note.addEventListener('mouseenter', function(){
    
    note.style.transform = 'scale(1.1)'
})
note.addEventListener('mouseleave', function(){
    console.log(getComputedStyle(note))
    note.style.transform = 'scale(1.0)'
    note.style.transform = lastRotation
})
note.addEventListener('dblclick', function(){
    note.remove();
})
document.querySelector('#note-text').value = ''; 
}
function margin(){
var random_margin = ['-5px','1px','5px','10px','15px','20px']
return random_margin[Math.floor(Math.random() * random_margin.length)]
}
function rotate(){
var random_rotate = ['rotate(3deg)','rotate(1deg)','rotate(-1deg)','rotate(-3deg)','rotate(-5deg)','rotate(-10deg)']
return lastRotation = random_rotate[Math.floor(Math.random() * random_rotate.length)]
}

function color(){
    var random_color = ['#ffdb58',  '#8cb369',  '#6fa5db', '#f984ef', '#f0c3a0', '#c29e5e']
    if (i > random_color.length -1 ){
        i = 0
    }
    return random_color[i++]
}