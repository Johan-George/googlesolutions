/**
 * Moves east towards the enemy if available, otherwise tries going north or south if east is occupied by a friendly unit.
 * If an enemy unit is in attacking range then attack them. If your health is less than 50% retreat back west. If none of
 * of these are true then just wait
 * @param turnEvent: an object containing a 2D array representing the in-game grid and an object representing your unit
 */
this.onmessage = function (turnEvent) {

    let data = JSON.parse(turnEvent.data);
    let grid = data.grid;
    let me = data.unit;

    if (enemyInRange(grid, me)) {
        this.postMessage({ result: 'Attack' });
    } else {
        this.postMessage({ result: 'Wait' });
    }

}

/**
 *
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @param you: The unit you want to control
 * @returns true or false depending on if an enemy is in range of your unit
 */
function enemyInRange(grid, you) {
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            let other = grid[x][y];
            if (!((you.location.x === x && you.location.y === y) || other === null || you.team === other.team)) {
                if ((x >= you.location.x - you.attackRange && x <= you.location.x + you.attackRange) &&
                    (y >= you.location.y - you.attackRange && y <= you.location.x + you.attackRange)) {
                    return true;
                }
            }
        }
    }
    return false;
}
