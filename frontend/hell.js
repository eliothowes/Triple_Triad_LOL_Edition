/////////////TOP LEFT ////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
if (position.id === "top-left") {
    gameBoardData[0][0] = card 
        if (gameBoardData[0][0].right_value > gameBoardData[0][1].left_value) {
            if (currentPlayer === 'Player'){
            ++playerScore
            } else {
            ++cpuScore
            }
        }
        if (gameBoardData[0][0].bottom_value > gameBoardData[1][0].top_value) {
            if (currentPlayer === 'Player'){
            ++playerScore
            } else {
            ++cpuScore
            }
        }
//////////////////////////////////////////////////////////////////////////////////////
////////TOP CENTER//////////////////////////////////////////////////////////////
} else if (position.id === "top-center") {
    gameBoardData[0][1] = card
        if (gameBoardData[0][1].left_value > gameBoardData[0][0].right_value){
            if (currentPlayer === 'Player'){
            ++playerScore
            } else {
            ++cpuScore
            }
        }
        if (gameBoardData[0][1].right_value > gameBoardData[0][2].left_value) {
            if (currentPlayer === 'Player'){
            ++playerScore
            } else {
            ++cpuScore
            }
        }
        if (gameBoardData[0][1].bottom_value > gameBoardData[1][1].top_value) {
            if (currentPlayer === 'Player'){
            ++playerScore
            } else {
            ++cpuScore
            }
        }
//////////////////////////////////////////////////////////////////////////////////////
/////////TOP RIGHT////////////////////////////////////////////////////////////////////
} else if (position.id === "top-right") {
    gameBoardData[0][2] = card
    if (gameBoardData[0][2].left_value > gameBoardData[0][1].right_value){
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[0][2].bottom_value > gameBoardData[1][2].top_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
/////////MIDDLE LEFT//////////////////////////////////////////////////////////////////
} else if (position.id === "middle-left") {
    gameBoardData[1][0] = card
    if (gameBoardData[1][0].top_value > gameBoardData[0][0].bottom_value){
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[1][0].right_value > gameBoardData[1][1].left_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[1][0].bottom_value > gameBoardData[2][0].top_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
/////////MIDDLE CENTER///////////////////////////////////////////////////////////////
} else if (position.id === "middle-center") {
    gameBoardData[1][1] = card
    if (gameBoardData[1][1].top_value > gameBoardData[0][1].bottom_value){
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[1][1].right_value > gameBoardData[1][2].left_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[1][1].bottom_value > gameBoardData[2][1].top_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[1][1].left_value > gameBoardData[1][0].right_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
////////MIDDLE RIGHT//////////////////////////////////////////////////////////////
} else if (position.id === "middle-right") {
    gameBoardData[1][2] = card
    if (gameBoardData[1][2].top_value > gameBoardData[0][2].bottom_value){
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[1][2].left_value > gameBoardData[1][1].right_value){
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[1][2].bottom_value > gameBoardData[2][2].top_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
///////BOTTOM LEFT/////////////////////////////////////////////////////////////////
} else if (position.id === "bottom-left") {
    gameBoardData[2][0] = card
    if (gameBoardData[2][0].right_value > gameBoardData[2][1].left_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[2][0].top_value > gameBoardData[1][0].bottom_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
////////BOTTOM CENTER/////////////////////////////////////////////////////////////////
} else if (position.id === "bottom-center") {
    gameBoardData[2][1] = card
    if (gameBoardData[2][1].left_value > gameBoardData[2][0].right_value){
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[2][1].right_value > gameBoardData[2][2].left_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[2][1].top_value > gameBoardData[1][1].bottom_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
//////////////////////////////////////////////////////////////////////////////////////
///////BOTTOM RIGHT////////////////////////////////////////////////////////////////
} else if (position.id === "bottom-right") {
    gameBoardData[2][2] = card
    if (gameBoardData[2][2].top_value > gameBoardData[1][2].bottom_value){
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
    if (gameBoardData[2][2].left_value > gameBoardData[2][1].right_value) {
        if (currentPlayer === 'Player'){
        ++playerScore
        } else {
        ++cpuScore
        }
    }
}