function startGame() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('rio').style.display = 'block';
}

function findClue() {
    document.getElementById('rio').style.display = 'none';
    document.getElementById('amazonas').style.display = 'block';
}

function endGame() {
    alert('Game Over');
    document.getElementById('start').style.display = 'block';
    document.getElementById('rio').style.display = 'none';
    document.getElementById('amazonas').style.display = 'none';
    document.getElementById('pantanoso').style.display = 'none';
    document.getElementById('cachoeira').style.display = 'none';
    document.getElementById('final').style.display = 'none';
}

function followRiver(direction) {
    if (direction === 'left') {
        document.getElementById('amazonas').style.display = 'none';
        document.getElementById('cachoeira').style.display = 'block';
    } else {
        document.getElementById('amazonas').style.display = 'none';
        document.getElementById('pantanoso').style.display = 'block';
    }
}

function retryRiver() {
    document.getElementById('pantanoso').style.display = 'none';
    document.getElementById('amazonas').style.display = 'block';
}

function exploreCity() {
    document.getElementById('cachoeira').style.display = 'none';
    document.getElementById('final').style.display = 'block';
}