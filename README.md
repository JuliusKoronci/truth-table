## Truth Table

[![Build Status](https://api.travis-ci.org/JuliusKoronci/truth-table.svg?branch=master)](https://api.travis-ci.org/JuliusKoronci/truth-table)
[![Coverage Status](https://coveralls.io/repos/github/JuliusKoronci/truth-table/badge.svg?branch=master)](https://coveralls.io/github/JuliusKoronci/truth-table?branch=master)

Many times, we need to make a decision, retrieve a value, call a function based on a combination 
of values/options/arguments.

Imagine your boss gives you an excel table with 5 columns and 40 rows of combinations of ui 
states(checkboxes, dropdowns...). In human language, if this is checked and this is selected than 
do this :).

What are our options in this case:

1. writing a bunch of if else's
2. using a switch statement
3. rewriting the excel into a tree and parsing it

The most common solution seen is the if table, sometimes you find a few switch statements and the 
last time I had to deal with this topic, I rewrote the table into a tree.

All of these solutions work but they have 2 big problems. They are impossible to read and maintain.

After showing my tree solution to my colleague..he actually came up with a great approach and 
I decided to write a small utility to help with this task.

We can call it a Truth table a decision tree, it doesn't really match the mathematical definition 
but matches google search queries :)

``` 
yarn add ts-truth-table
```

### Example

Imagine we have 2 checkboxes, 1 dropdown and an input field on our website. The value of the input 
field will change based on the checkboxes and dropdown values.

| Checkbox 1        | Checkbox 2           | Dropdown value  |  Input value |
| ----------------- | -------------------- | --------------- | ------------ |
|          true     |            false     |     1           |      value 1 |
|          true     |            true      |     1           |      value 2 |
|          false    |            true      |     1           |      value 3 |
|          false    |            false     |     1           |      value 4 |
|          true     |            false     |     2           |      value 5 |
|          true     |            true      |     2           |      value 6 |
|          false    |            true      |     2           |      value 7 |
|          false    |            false     |     2           |      value 8 |


We can immediately see how much work this will be and how hrd it will be to work with and the 
dropwdown can hold a list of countries and we have immediately more combinations.

Looking at the table, and thinking about the best structure we could put the data in, the evident 
solutions is to use a multi dimensional array. Why? Because it copies the best the table  and if 
the business decides to change any value, it will be easy to find and update.

```
const table = [
  [true,  false, 1, 'value 1']
  [true,  true,  1, 'value 2']
  [false, true,  1, 'value 3']
  [false, false, 1, 'value 4']
  [true,  false, 2, 'value 5']
  [true,  true,  2, 'value 6']
  [false, true,  2, 'value 7']
  [false, false, 2, 'value 8']
];

```


Now we can utilize our little helper class :)

``` 
import TruthTable from '../TruthTable';

const truthTable = new TruthTable(table);
```

We can do 4 operations on the truth table:

1. checking if we have an exact match - useful if we need to do a certain task if a match is found. [getExactMatch]
2. finding a match - in this case we want to find a match based on all or some of the arguments. [getMatch]
3. finding all matches - in this case we want an array of all items with match 1, 2... or all arguments. [getAllMatches]
4. finding the last leaf of a match - this is usefull for the example above. We want to get the 
input value based(last leaf) based on the first 3 arguments. [getLastLeafOfMatch]

``` 
truthTable.getLastLeafOfMatch([false, true, 2]); // value 7
``` 

So what happens when we only have the first 2 arguments:

``` 
truthTable.getLastLeafOfMatch([false, true]); // value 3
``` 

We received the first match's last leaf. This may be what we want if the order matters or we could:

``` 
truthTable.getAllMatches([false, true]); // [value 3, value 7]
```
### Advanced tip

The last item of an option can be a function as well. So for instance if we need to call different 
functions for each match, the getLastLeafOfMatch will return the last item in a match and if it is 
a function we can just call it :)

### Interface

``` 
type ConfigType = any[][];

interface TruthTableInterface {
  config: ConfigType;

  getExactMatch(match: any[]): any[] | undefined;

  getMatch(match: any[]): any[] | undefined;

  getAllMatches(match: any[]): any[];

  getLastLeafOfMatch(match: any[]): any;
}
```

### Typescript

The library is written in typescript. Unfortunately flow is really slow on windows and webstorm has 
also some issues with it :(. The code is compiled down to es5 and typings are exported.
