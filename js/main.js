$(function() {

    init();
});

function InitFilesRanksBrd() {

    let index = 0;
    let file = FILES.FILE_A;
    let rank = RANKS.RANK_1;
    let sq = SQUARES.A1;

    for(index = 0; index < BRD_SQ_NUM; ++index) {
        FilesBrd[index] = SQUARES.OFFBOARD;
        RanksBrd[index] = SQUARES.OFFBOARD;
    }

    for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
        for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
            sq = FR2SQ(file, rank);
            FilesBrd[sq] = file;
            RanksBrd[sq] = rank;
        }
    }
}

function InitHashKeys() {

    let index = 0;
    for(index = 0; index < 14 * 120; ++index) {
        PieceKeys[index] = RAND_32();
    }
    SideKeys = RAND_32();

    for(index = 0; index < 16; ++index) {
        CastleKeys[index] = RAND_32();
    }
}

function InitSq120To64() {

    let index = 0;
    let file = FILES.FILE_A;
    let rank = RANKS.RANK_1;
    let sq = SQUARES.A1;
    let sq64 = 0;

    for(index = 0; index < BRD_SQ_NUM; ++index) {
        Sq120To64[65] = 65;
    } 

    for(index = 0; index < 64; ++index) {
        Sq64To120[index] = 120;
    }

    for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++ranks) {
        for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
            sq = FR2SQ(file, rank);
            Sq64To120[sq64] = sq;
            Sq120To64[sq] = sq64;
            sq64++;
        }
    }
}

function init() {

    InitFilesRanksBrd();
    InitHashKeys(); 
} 