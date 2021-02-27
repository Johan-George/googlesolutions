# All You Need to Know About Javascript

To get started coding your Scripting Siege units, it would help to know the basics of Javascript, the language you will have to code in. This guide will try to cover the bare basics you'll need to know to write meaningful code to control your units. Keep in mind however that there is a lot to know about Javascript to fit into this guide. We’ve tried our best to give a deep overview of Javascript in a way that’s concise yet understandable. However, if you feel that this guide may be too fast for you, feel free to look for resources to learn at your own pace. There are many good free guides online particularly on Youtube. You could also use them to supplement what you’ve learned from reading this. We highly recommend you do so since there may be some stuff we missed here that could be useful to you. In particular, we recommend this full and free [Javascript course](https://youtu.be/PkZNo7MFNFg) by *freecodecamp*.

### Getting Started

One of the beautiful things about Javascript is that it is a very easy language to set up. As long as you have a browser on your computer, you can write and run Javascript code. Open up your browser and right-click any page. Then click inspect element which should open up a console somewhere (this can vary depending on your browser). In that console, you can start writing random J code and instantly see what it does. The reason this exists is because Javascript is the language of the web. Practically all websites or web applications use Javascript in one way or another. For this reason, you’ll typically see Javascript partnered with HTML and CSS (two languages specialized in designing web pages). Yet, Javascript isn’t just limited to the web, it has evolved for you to use it just about anywhere. This is part of the reason it is now one of the most popular languages among developers. Anyways, if you want to get started writing and playing around with Javascript, we recommend using an IDE (integrated development environment). This is basically a fancy text editor to help you code. One of the more popular IDEs for Javascript developers is [vscode](https://code.visualstudio.com/) which is completely free and provides useful tools for you to code more efficiently. Although you can also use an online IDE like the one provided by [Sololearn](https://code.sololearn.com/web/). Sololearn has a [free Javascript course](https://www.sololearn.com/learning/1024) you can use to help you better understand the concepts here or learn even further. Anyways, now that you some background knowledge of Javascript, let’s start learning.

### Variables in Javascript

You can use variables in Javascript to store information with the desired name for it. The basic syntax for declaring a variable is like so:

```Javascript
let number = 19;
```
> Note that we end the statement with a semicolon. It is a good convention but not required. However, other programming languages will require this.

Just like in math class, you'll define variables using a *let* statement. After you define the variable you can use it without that *let* word before it. Keep in mind that you cannot have a variable name with spaces, numbers, or some special characters. Also, note that in Javascript *=* does not mean equality but instead it is used to assign or reassign a value to a variable. For example, we can do this:

```Javascript
number = 20;
```

To give that number variable a new value of 20. Variables can hold anything from booleans (`true` or `false`), text (commonly known as strings), numbers, or even objects (we will discuss what those are later). Now if you wanted to increase the value stored in number by 1 you would do something like this:

```Javascript
number = number + 1;
```

Remember that *=* does not mean equality but instead we use it to give a variable a new value. So what we are doing here is setting the value of `number` to whatever value is in number plus 1. Javascript gives us a useful shortcut to increase a number variable by 1:

```Javascript
number++;
```

You can also use a similar statement to decrease the value of `number` by 1:

```Javascript
number--;
```
Although, there is also another shortcut if you want to increase or decrease the value of a variable by a value not equal to 1:

```javascript
number += 12;
Number -= 12;
```


### Conditional Statements

Remember how we mentioned that we can store true or false values in variables? We can use true or false values to create what are called *if statements*. An *if statement* is pretty much some code that tells Javascript *if this is true, then do this*. An if statement can optionally have an else statement following it to give instructions if whatever you were checking is false. As an example, we can do the following:

```Javascript
let isRainingOutside = true;
let result = '';
if(isRainingOutside){
    
    result = 'Bring an umbrella!';

}else{
    
    result = 'What a nice day!';

}
```
> Notice that we gave the result variable a value that is some text in quotation marks. This is how you set a variable to have a string (text) value.

So what we are doing here is setting `isRainingOutside` to true. Then we tell Javascript, if `isRainingOutside` is true, then set `result` to the value `'Bring an umbrella!'` otherwise, we set it to `'What a nice day!'`. This isn't too useful because we know the value of `isRainingOutside` ahead of time. Yet when you read game data from Scripting Siege this won't be the case. Also, Javascript has what is called `conditional operators` which are used to test certain conditions about data. For example, we can do something like this:

```Javascript
let age = 19;
let result = ''
if(age >= 19){
    result = "Here's some alcohol.";
}else{
    result = "Hey that's illegal you can't drink!";
}
```
> Notice in the string values we have single quotes inside. If you intend to use text that contains single quotes, you need to wrap it in double-quotes. This way, you don't confuse Javascript into thinking you are trying to make another string.

Here, we say that if age is greater than or equal to 19 then we give the person some alcohol, otherwise we don't. But let's say the person may or may not like alcohol to begin with, we can't just give them alcohol if they don't want it. We can solve this issue like so:

```Javascript
let age = 19;
let likesAlcohol = false;
let result = '';
if(age >= 19 && likesAlcohol){
    result = "Here's some alcohol.";
}else if(age >= 19 && !likesAlcohol){
    result = "Oh you don't like alcohol my bad."
}else{
    result = "Hey that's illegal you can't drink!";
}
```
This is a little more involved, but we'll go through it step by step. We first check if their age is greater than or equal to 19, and (&& means and) the `likesAlcohol` variable is true. If this is the case then we set `result` to `"Here's some alcohol."`. If this is false, we then check if they're 19 and don't like alcohol (! means not). In which case we set `result` to `"Oh you don't like alcohol my bad."` . Otherwise, if that's not true then their age must be less than 19, meaning they are not legal drinking age (at least where we are sorry Americans). If this is true then we set `result` to `"Hey that's illegal you can't drink!"`. You may be wondering what that `else if` part does. What it does is if the first condition in the `if` statement is not met, then it checks the condition in the `else if`. Otherwise, if neither is true then we do whatever is in the `else` statement. If the first condition is met, then Javascript doesn't even check the `else if` condition. In this example, we only used 1 `else if` statement but you can use as much as you need. Small note, notice how in Javascript *&&* means and, if you wanted to say *or* you would you use *||*. Also, if you want to compare if two things are equal, you would use this operator `===`.

### Arrays

An array in Javascript is simply a list of any values you want. They take this basic syntax:

```Javascript
let nums = [9, 12, 3, 4, 1];
```

Javascript numbers each item in the array in order from 0 to the number of items - 1. So in this example, we have 5 items where item 0 is 9, item 1 is 12, item 2 is 3, item 3 is 4, and item 4 is 1. The number associated with the item is known as its index. Using the index we could access individual items using this syntax:

```Javascript
let number = nums[1];
```
In this case, we will be getting item 1 which has a value of 12. It's also important to understand that an array can also contain a bunch of inner arrays (usually called a 2D array). In Scripting Siege, you will see that we will use these 2D arrays to represent data about the in-game, grid. More precisely, you will encounter an array containing a bunch of inner arrays representing columns in the grid. In each of these inner arrays is data representing all the units on that column. For now, let us give you a simpler example of a 2D array:

```Javascript
let grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let item = grid[0][1];
```
> Note that the way we formatted the 2D array is just for readability, we could have defined it on one line but doing it this way is easier to read

It may look a little funky seeing two consecutive square brackets with indexes in them, yet it is much simpler than it looks. Remember a 2D array is just an array with a bunch of inner arrays. So when we say `grid[0]`, we are getting the inner list at index 0. Then when we add `[1]` to the end of that, we are getting the element at index 1 of that inner array. Or in other words, `grid[0]` is itself an array, so we can retrieve items from particular indexes like so: `grid[0][1]`. So here we are getting the 2nd item of the 1st array within the grid array. This item would have the value 2.

### For loops

Next, let's have a look at what a *for loop* is. A for loop is just a way to tell Javascript to repeat some code a certain amount of times. It follows the following syntax:

```Javascript
let num = 0;
for(let i = 0; i < 10; i++){

    num = i;

}
```
This might look like a bit much but once you start to break it down it's pretty straightforward. In the brackets after the *for* word, we declare a variable called `i` with a value of 0. Then we give a conditional statement, `i < 10` meaning as long as i is less than 10 keep repeating what is in the curly braces (these: { ). Then after that, we say `i++` meaning we want to increase the` i `variable by 1 after each time we run code in the curly braces. So in this example, the code in the curly braces will run 10 times, since `i` will go from 0 to 9. Notice we can also use the value of `i` within the curly braces. You'll find that using the value of `i` could be pretty useful once you start coding more. For example, you could use it to look through the items in an array:

```Javascript
let sum = 0;
let nums = [1, 2, 3, 4, 5];
for(let i = 0; i < nums.length; i++){
    sum += nums[i];
}
```
In this for loop, the i variable goes from 0 to the number of items in `nums` minus 1. This is because the loop's condition *i < nums.length* will no longer be true when i is equal to the number of items in nums (`nums.length`), so the loop will not run at that point. This is exactly what we want because the indexes in `nums` range from 0 to the number of items in `nums` minus 1. Javascript also gives us an alternate way to look through all the items in an array:

```Javascript
let sum = 0;
let nums = [3, 1, 9, 2, 5];
for(let num of nums){
    sum += num;
}
```

This time, in the brackets after the *for* word it says `let num of nums`. What this means is that we execute the code (`sum += num`) once for each number in `nums`. Each time we execute the code, the value of num is a unique item in the `nums` array, going in order. In other words, the first time it executes the code `num` is 3, then the next time we execute the code `num` is 1, then `num` is 9, then `num` is 2, then finally in the last time the loop executes `num` is 5.

### Functions

In programming, a function is a collection of related code that you can reuse whenever you want. Like functions in math class, they can take input and give back output, although you don't necessarily need to give an output if you don't need to. To create a function, you would do something like this:

```Javascript
function sum(nums){
    let sum = 0;
    for(let num of nums){
    
        sum += num;

    }   
    return sum;
}
```
Here, our function accepts an input called `nums` which we assume is an array of numbers. If it's not an array an error will probably occur, in which case it won't run. Also, if the array contains items that aren't numbers then you will probably get unexpected behavior. Thus, it is important to make sure you give this function the right input whenever you use it. Going to the contents of the function, we add all the numbers in the array to get the sum. You will notice at the end, we have this line of code: `return sum`. This is saying that the output of our function will be the sum. When we want to use this function, we would do something like this:

```Javascript
let mySum = sum([1, 2, 3, 4]);
```

Here, we use the `sum` function with an array of numbers as an input. Then we store the output of the function in a variable called `mySum`.

### Objects

Next, let's discuss objects in Javascript. An object is just a collection of related variables and functions that you store as a single variable. They are typically used to model a real-world thing. For example, we can create an object to represent a dog:

```Javascript
let myDoggo = {

    name: 'Steve',
    ownerName: 'Bobbert',
    collarColor: 'red',
    age: 5

};
```

Here, we create an object representing a dog and store it as a variable called `myDoggo`. If we want to access variables in the `myDoggo` object we would do something like this:

```Javascript
let name = myDoggo.name;
let owner = myDoggo.ownerName;
let collarColor = myDoggo.collarColor;
let age = myDoggo.age;
```

An object can even contain functions in them if you need them to. For example, if you had a *bark* function in that dog object, you would use it like so:

```Javascript
myDoggo.bark();
```

### Bonus Tips to Maintain Your Code

The more you code, the more you'll realize that things can get pretty wild as you start coding more complex stuff. For example, you'll come to realize you'll very rarely do things right the first time. As well, sometimes it could be easy to forget exactly how some of the code you wrote works. Here, we'll show you some small tips to help you out with both of these issues. To help remember how your code works, programming languages including Javascript have a feature called comments. These are little notes you can write in your code for personal use:

```Javascript
// This is a single-line comment. The code below me declares a variable called number with a value of 42.
let number = 42;
/*
This is a multi-line comment
I can type random text in as many
lines as I see fit
*/
```
Anything wrapped between the `/*` and the `*/` or following a `//` will be ignored because Javascript knows those are just personal notes. Although useful, they won't help you if there is a bug in your code. A small tool that can help you debug your code is the use of print statements. Print statements tell Javascript to print out data to the console in your browser. To do this, you would simply type the following:

```Javascript
let myData = 42;
console.log(myData);
```
Note that you can print out practically anything you want this way. So if something goes wrong you can print out the values of certain data to check their state when you run your code. Recall in the beginning we mentioned a Javascript console in your browser. This is where the `console.log` statements print out the data. Javascript will also print out errors in the console if something goes very wrong that would cause it to stop. Although it can be a little frustrating to see it can give useful hints for you to find what went wrong.

### Conclusion

In this guide, we went over the fundamental Javascript concepts you need to help you get started coding your units in Scripting Siege. If you understood these concepts you should be ready to start writing your own code that can be used in the game. Just make sure you have a look at the [documentation](./Getting%20Started%20With%20Coding%20a%20Scripting%20Siege%20Unit.md) to see how exactly to get started.


