//función constructora de celdas para las naves espaciales
let shipCell = '';


function CellShip(x, y){
    this.x = x;
    this.y = y;
}

CellShip.prototype.drawCell = function (){

    shipCell = document.querySelector('.row'+ this.y +' .col'+ this.x)
    shipCell.classList.remove('td')
    shipCell.classList.add("spaceShip")
};