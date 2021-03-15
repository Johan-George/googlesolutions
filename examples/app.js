/**
 * @param location: The x,y location you want to move to in the form of an object: {x: number, y: number}
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @return true or false depending on if a tile is occupied by a unit
 */
function locationOccupied(location, grid){

    return grid[location.x][location.y] !== null

}

/**
 * @param location: The x,y location you want to move to in the form of an object: {x: number, y: number}
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @return true or false depending on if a tile is in bounds of the in-game grid
 */
function isInBounds(location, grid){

    return location.x >= 0 && location.x < grid.length && location.y >= 0 && location.y < grid[0].length

}

/**
 * @param location: The x,y location you want to move to in the form of an object: {x: number, y: number}
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @return true or false depending on if a tile is both in bounds and is unoccupied
 */
function locationValid(location, grid){

    return !locationOccupied(location, grid) && isInBounds(location, grid);

}

/**
 *
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @param you: The unit you want to control
 * @returns true or false depending on if an enemy is in range of your unit
 */
function enemyInRange(grid, you){
    for(let x = 0; x < grid.length; x++){
        for(let y = 0; y < grid[0].length; y++){
            let other = grid[x][y];
            if(!((you.location.x === x && you.location.y === y) || other === null || you.team === other.team)){
                if((x >= you.location.x - you.attackRange && x <= you.location.x + you.attackRange) &&
                    (y >= you.location.y - you.attackRange && y <= you.location.x + you.attackRange)){
                    return true;
                }
            }
        }
    }
    return false;
}

/**
 * @param you: The unit you want to control
 * @return true or false depending on if your unit is less than 50% health
 */
function healthLessThan50Percent(you){

    return ((you.health / you.maxHealth) * 100) < 50;

}

/**
 * Moves east towards the enemy if available, otherwise tries going north or south if east is occupied by a friendly unit.
 * If an enemy unit is in attacking range then attack them. If your health is less than 50% retreat back west. If none of
 * of these are true then just wait
 * @param turnEvent: an object containing a 2D array representing the in-game grid and an object representing your unit
 */
this.onmessage = function (turnEvent){

    let data = JSON.parse(turnEvent.data);
    let grid = data.grid;
    let me = data.unit;

    let north = {x: me.location.x, y: me.location.y - 1};
    let south = {x: me.location.x, y: me.location.y + 1};
    let east = {x: me.location.x + 1, y: me.location.y};
    let west = {x: me.location.x - 1, y: me.location.y};

    if(healthLessThan50Percent(me)){
        this.postMessage({result: 'West'});
    }else if(enemyInRange(grid, me)){
        this.postMessage({result: 'Attack'});
    }else if(locationValid(east, grid)){
        this.postMessage({result: 'East'});
    }else if(locationValid(north, grid)){
        this.postMessage({result: 'North'});
    }else if(locationValid(south, grid)){
        this.postMessage({result: 'South'});
    }else{
        this.postMessage({result: 'Wait'});
    }

}
