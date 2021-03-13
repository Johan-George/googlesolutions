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

    let closestOtherTeam = findClosestEnemy(me, grid);

    if(closestOtherTeam.distance <= me.attackRange) {
        this.postMessage({result: "Attack"});
    } else {
        this.postMessage({result: findMoveDirection(closestOtherTeam.direction, grid, me)});
    }

}
/**
 * @param location: The x,y location you want to move to in the form of an object: {x: number, y: number}
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @return true or false depending on if a tile is occupied by a unit
 */
function locationOccupied(location, grid) {

    return grid[location.x][location.y] !== null

}

/**
 * @param location: The x,y location you want to move to in the form of an object: {x: number, y: number}
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @return true or false depending on if a tile is in bounds of the in-game grid
 */
function isInBounds(location, grid) {

    return location.x >= 0 && location.x < grid.length && location.y >= 0 && location.y < grid[0].length

}

/**
 * @param location: The x,y location you want to move to in the form of an object: {x: number, y: number}
 * @param grid: A 2D array representing the in-game grid: Array<Array<Unit>>
 * @return true or false depending on if a tile is both in bounds and is unoccupied
 */
function locationValid(location, grid) {

    return !locationOccupied(location, grid) && isInBounds(location, grid);

}

/**
 * @param you: The unit you want to control
 * @return true or false depending on if your unit is less than 50% health
 */
function healthLessThan50Percent(you) {

    return ((you.health / you.maxHealth) * 100) < 50;

}

function findClosestEnemy(you, grid) {

    var closest = { x: 0, y: 0, distance: 1000, direction: "West" };

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            let other = grid[x][y];
            if (!((you.location.x === x && you.location.y === y) || other === null || you.team === other.team)) {

                var distance = Math.floor(Math.sqrt(Math.pow(you.location.x - x, 2) + Math.pow(you.location.y - y, 2)));

                if (distance < closest.distance) {

                    var direction = "West";

                    //check if should use y or x direction
                    //if y distance is greater, use y direction, else use x
                    if(Math.abs(you.location.y - y) > Math.abs(you.location.x - x)) {
                        //using y direction
                        if (y - you.location.y < 0) {
                            direction = "North";
                        } else {
                            direction = "South";
                        }
                    } else {
                        //using x direction
                        if (x - you.location.x < 0) {
                            direction = "West";
                        } else {
                            direction = "East";
                        }
                    }

                    closest = { x: x, y: y, distance: distance, direction: direction };

                }

            }
        }
    }

    return closest;
}

function getDirectionCoord(dir, you) {
    switch (dir) {
        case "West":
            return { x: you.location.x + 1, y: you.location.y };
        case "East":
            return { x: you.location.x - 1, y: you.location.y };
        case "North":
            return { x: you.location.x, y: you.location.y + 1 };
        case "South":
            return { x: you.location.x, y: you.location.y - 1 };
        default:
            return { x: you.location.x - 1, y: you.location.y };
    }
}

function findMoveDirection(desireDirection, grid, you) {

    if (locationValid(getDirectionCoord(desireDirection, you), grid)) {
        return desireDirection;
    } else if (locationValid(getDirectionCoord("East", you), grid)) {
        return "East";
    } else if (locationValid(getDirectionCoord("North", you), grid)) {
        return "North";
    } else if (locationValid(getDirectionCoord("South", you), grid)) {
        return "South";
    } else if (locationValid(getDirectionCoord("West", you), grid)) {
        return "West";
    }

}