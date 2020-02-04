// maintain current state of game 

function PCEINDEX(pce, pecNum) {
    return (pce *  10 + pecNum);
}

let GameBoard = {};

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE;
GameBoard.fiftyMove = 0;
GameBoard.hisPly = 0;
GameBoard.ply = 0;
GameBoard.castlePerm = 0;
GameBoard.material = new Array(2);
GameBoard.pList = new Array(14 * 10);
GameBoard.posKey = 0;

function GeneratePosKey() {

    let sq = 0;
    let finalKey = 0;
    let piece = PIECES.EMPTY;

    for(sq = 0; sq < BRD_SQ_NUM; ++sq) {
        piece = GameBoard.pieces[sq];
        if(piece != PIECES.EMPTY && piece != SQUARES.OFFBOARD) {
            finalKey ^= PieceKeys[(piece * 120) + sq]; 
        }
    }
}
