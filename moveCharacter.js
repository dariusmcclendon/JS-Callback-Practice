let element = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250
move(element).to(x, y)
document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
        console.log('going west')
    }//end if
    if(e.key === 'ArrowRight'){
        direction = 'east'
        console.log('going east')
    }//end if
    if(e.key === 'ArrowUp'){
        direction = 'north'
        console.log('going north')
    }//end if
    if(e.key === 'ArrowDown'){
        direction = 'south'
        console.log('going south')
    }//end if
})
function moveCharacter(){
    if(direction === 'west'){
        element.src = 'assets/green-character/west.gif'
        x = x -1
    }
    if (direction === 'east'){
        element.src = 'assets/green-character/east.gif'
        x = x + 1
    }
    if (direction === 'north'){
        element.src = 'assets/green-character/north.gif'
        y = y + 1
    }
    if (direction === 'south'){
        element.src = 'assets/green-character/south.gif'
        y = y - 1
    }
    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    
        
    }
    document.addEventListener('keyup', function(e){
        direction = null
    })


setInterval(moveCharacter, 1)