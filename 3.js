let size=(prompt("Informe um numero"));
let board = "";
for(let row=0;row<size;row++){
    board += row%2==0 ? " " : "";
    for(let col=0;col<size;col++){
        board += "# ";
    }
    board += "\n";
}
console.log(board);