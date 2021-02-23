###Getting Started With Coding a Scripting Siege Unit

This guide will teach you how to get started writing real code to use for your scripting siege units. By the end of this guide, you will be able to learn to code in javascript by just playing a video game!

###How this works

Every turn, the game will send a message with specific data about everything on the grid and the unit whose turn started. This data is in the form of a JSON payload. All it is is some text representing the data in a specific format, specifically in the form of a javascript object. For you to read this data, (or at least in a non-infuriating way) you need to first convert it to a real javascript object and not a text representation of it. Fortunately, it’s as easy as a single line of code:
```javascript
let data = JSON.parse('JSON goes here');
```
With this data, you can analyze it to make the best decision possible for your unit. Once you’ve figured out what you want to do, you will send a message back to the unit telling it what you want them to do. But, if the game does not recognize what move your code is telling it to perform, then your unit will just wait around confused about what you told them. The same is true if you tell it to perform an action that is not possible like attacking when nothing is in range. As well, you need to make sure you are sending one message at a time. If you try to cheat the system and send multiple messages for one turn the game will only accept the first one. Also, if your code takes too long to return an action then your unit will just wait. In the heat of the battle, your unit can't wait for you forever! As a last note for the more knowledgeable or curious among you, the code you will be writing is for the game to create a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#web_workers_api). Although you don’t have to necessarily understand Web Workers to write your own code for this game.

###Receiving and Sending messages

In your code, you need to provide a function (a collection of related code) to perform whenever you receive a message. Within the function, you would post a message back to the server using the `postMessage` function with text representing the action. For example, you use a code file that looks something like this:

```javascript
this.onmessage = function (turnEvent){

  this.postMessage({result: 'Forward'});

}
```
Here, whenever we get a message indicating it’s our unit’s turn, we just tell it to go forward.

###Reading Message Data

In the code example above, you will notice in our function there is something called `turnEvent` in brackets. This indicates that our function will take the game data as an object called `turnEvent`. Within the `turnEvent` object is the data the game gives you about the state of the game. Recall that the data sent is in the form of JSON and we need to first convert it to a javascript object to more easily read it. We would so like this:

```javascript

let data = JSON.parse(turnEvent.data);

```
For you to understand the data you will receive, let's have a look at the format of the data so we can discuss its significance:

```json
{
   "grid": [
       [],
       [],
       [],
       [],
       [],
       [
           {"id":0,"team":2,"location":{"y":5,"x":2},"maxHealth":100,"health":100,"defense":10,"strength":15,"attackRange":4},
           {"id":1,"team":1,"location":{"y":5,"x":5},"maxHealth":100,"health":100,"defense":10,"strength":15,"attackRange":4}
       ],
       [],
       [],
       [],
       [],
       [],
       [],
       [],
       [],
       [],
       [],
       [],
       [],
       [],
       []
   ],
   "unit": {
             "id": 1,
             "team": 1,
             "location": {"y":5,"x":5},
             "maxHealth": 100,
             "health": 100,
             "defense": 10,
             "strength": 15,
             "attackRange": 4
           }
}
```
> Note I indented it this way just for the sake of clarity. In reality, the JSON data will be in one line. Also, it would all be wrapped in quotation marks.

This might look like quite a bit to unpack for some of you but we do our best to explain what this data format represents. Everything in the curly braces (these: `{}`) represents a javascript object. An object is just a collection of related data each with a name to refer to each of them by. Data within an object can be anything from text, a true or false value, an array (a list of data), or even other objects. You will notice in these objects, we have some text in quotation marks followed by a colon and some data. The text in the quotes is the name of the data right of the colon. When we convert the JSON data to a real object, we will use those names to access the data. For instance, we have some data in the object called *grid*, and another called *unit*. The data called *grid* is a list containing inner lists, some of which contains data representing units. Each inner list represents all the units on a given row in the game. You will notice in the above example, only the sixth list contains objects. In that sixth list, there are two objects representing units. This would mean on the sixth row, there are two units. Within these unit objects, you will see that you are given the exact location on the grid that these units are on. Note that the x and y values range from 0-19, representing 20 rows and 20 columns. Since the numbering starts from 0, the sixth row will be row number 5, the first row will be number 0, etc (programming languages tend to number stuff starting at 0). Lastly, the *unit* data in the outer object (the object that contains the grid data), is just a representation of the unit you are controlling. Now that you have an idea of what data the game sends, we can go over how to use it. The below code takes the *unit* data and stores it in a variable called *you*.

```javascript
let data = JSON.parse(turnEvent.data);
let you = data.unit;
```

Then, to get the health of the unit stored as *you* you would simply do this:

```javascript
let health = you.health;
```

To get the x value of the location of the unit you would do the following:

```javascript
let xLocation = you.location.x;
```

To get a specific unit in the grid is a bit more involved than what we just did, but we will go into more detail about it. Here's how you'd get the first unit in the sixth row:

```javascript
let data = JSON.parse(turnEvent.data);
let grid = data.grid;
// Get the sixth row of the grid and get the first unit found in that row. Remember we count stuff starting at 0, so the sixth row will be number 5, and the first column will be number 0
let person = grid[5][0];
```

First, we get the grid data within the data object. This grid data is a list of lists (as seen in the JSON data above), which we store as a variable called grid. Then we get the sixth item of the list (another list) and get the first item of that inner list. This would be a single unit object as seen in the JSON data above. We would then store it in a variable called person so we can do operations like what you've seen above. The tables below are a summary of all that exists in the data we send you:

**The Data Sent From Each Turn**

| Data | Definition                                                                                                                                                              |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| grid | An array (list) of lists. Each inner list represents a list of all the units in a given row (ex. the first list represents all the units in the first row in the game). |
| unit | A unit object representing the stats of the unit you are controlling (ex. health, defense, attack range, etc).                                                            |

**The Contents of all Unit objects**

| Data        | Definition                                                                                                      |
|-------------|-----------------------------------------------------------------------------------------------------------------|
| id          | An id for the unit (number).                                                                                    |
| team        | The team the unit is on (number).                                                                               |
| location    | An object containing the x (number) and y (number) values of the location of the unit.                          |
| maxHealth   | The maximum health of the unit (number).                                                                        |
| health      | Current health of the unit (number).                                                                            |
| defense     | The defense of the unit (A number. How much damage it can take in a single attack before it loses some health). |
| strength    | The strength of the unit (A number. How much damage it can deal in a single attack).                            |
| attackRange | How many tiles in any direction a unit can attack (number).                                                     |

###Sending Back a Response

Once you’ve decided what you want your unit to do, you have to post a message back to it to tell it about it. You would do this by simply calling the `postMessage` function like so:

```javascript
this.postMessage({result: 'Your action here'});
```
Remember that the game only accepts a set of recognized actions that you can send back to it. The following lists all the commands that can be sent back to the game. You would simply replace the ``Your action here`` in the code above with the name of the action in the quotes:

| Action   | Definition                                                                                                               |
|----------|--------------------------------------------------------------------------------------------------------------------------|
| Attack   | Attack the first enemy unit in range if any. Otherwise, just wait.                                                       |
| Wait     | End the turn without acting.                                                                               |
| Forward  | Walk one tile towards the enemy. If the tile is occupied by another unit or the area is out of bounds wait.              |
| Backward | Walk one tile away from the enemy. If the tile is occupied by another unit or the area is out of bounds wait.            |
| Left     | Walk one tile towards the top of the grid. If the tile is occupied by another unit or the area is out of bounds wait.    |
| Right    | Walk one tile towards the bottom of the grid. If the tile is occupied by another unit or the area is out of bounds wait. |

###Conclusion

In this guide, we went over all you need to know to start coding the behavior of your scripting siege units. With this knowledge, you will be able to write more complex custom behavior to your units to perform better in the game and learn to code in the process. You can find some example code to get you started [here](INSERT_LINK_HERE). Good luck and have fun!

