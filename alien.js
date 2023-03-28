

function Alien(x,y){
    this.x = x;
    this.y = y;
}

//busca la celda donde se mueve el alien y la "pinta"
Alien.prototype.drawAlien = function() {
    let allienCell = document.querySelector(`.row${this.y} .col${this.x}`)
    allienCell.classList.add('allien')
}

//busca la celda en zona support para pintar alien+support
Alien.prototype.drawAlienCell = function() {
  let aliencelinsupo = document.querySelector('.row' + this.y + ' .col' + this.x)


    //aliencelinsupo.classList.remove("spaceSupporter")
    aliencelinsupo.classList.add("allien")
    aliencelinsupo.classList.add("spaceSupporter")
   
}

//gestiona el movimiento del alien a través del evento keydown
Alien.prototype.moveAlien = function(move){
    switch(move){
        case "ArrowLeft": 
            //if controla los limites de los bordes
            if(alien.x > limitLeft){
                //izq actualiza x -1
                alien.x--;
                //pinta alien en posicion donde se mueve
                alien.drawAlien();
                //recoge posicion x & y para despintar alien
                notalien.x = alien.x+1;
                notalien.y = alien.y;
                notalien.clearAlien();
            }
        break;
        case "ArrowRight": 
            if(alien.x < limitRight){
                alien.x++;
                alien.drawAlien()
                notalien.x = alien.x-1;
                notalien.y = alien.y;
                notalien.clearAlien()
            }
        break;
        case "ArrowUp":
            if(alien.y === 1){
                if(alien.x === 4 || alien.x === 9 || alien.x === 14){
                   console.log('win!!!!!')
                    notalien.y = alien.y;
                    notalien.x = alien.x;
                    notalien.clearAlien()
                    // FUNCIÓN WIN!!!!! MENSAJE!
                }
            }else{
                alien.y--;
                alien.drawAlien();
                notalien.y = alien.y+1;
                notalien.x = alien.x;
                notalien.clearAlien();
            }
        break;
        case "ArrowDown":
            if(alien.y < limitBottom){
                alien.y++;
                alien.drawAlien()
                notalien.y = alien.y-1;
                notalien.x = alien.x;
                notalien.clearAlien()
            }
        break;
        case "Space":
            if(alien.y >= 4 && alien.y <= 8){
                alien.y = alien.y-2;
                alien.drawAlien()
                notalien.y = alien.y+2;
                notalien.x = alien.x;
                notalien.clearAlien()
            }
        break;
    }
}





/////////////////////////////////////////////////////////////////////////////////////


function NotAlien(x,y){
    this.x = x;
    this.y = y;
}

//busca la celda que deja atrás el alien y la "despinta"
NotAlien.prototype.clearAlien = function(isLastCell) {
    let emptyCell = document.querySelector(`.row${this.y} .col${this.x}`)
    
    if(isLastCell)
    emptyCell.classList.remove('spaceSupporter')
    
    emptyCell.classList.remove('allien') 
    emptyCell.classList.add('td')
} 
