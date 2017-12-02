# csvin
🗂 Tiny, over-opinionated Node.js utility that synchronously loads a CSV file into a JS object (e.g. for scripting)

## What is this? Why is this?

Sometimes I want to write a one-off Node.js script that does something with a CSV file (e.g. reformat a data file for human readability) and I wish I could just do `require('data.csv')` like I would with a JSON file. This is basically just two lines of code, using `fs` and [`d3-dsv`](https://github.com/d3/d3-dsv) that does this for me, because I never remember how to read and parse files properly. 🤭

This is all synchronous and in many cases you'll want to do some more nuanced parsing, but if you want to do a little thing in a hot sec, 🤷‍♀️.

## Installation

`npm install csvin`, or similar. Intended to be used in Node.js and imported with `require`.

## Lil' example

### data.csv
```
animal,count
cat,3
bird,8
```

### index.js
```
const csvin = require('csvin');

const data = csvin('data.csv');
// [
//   { animal: 'cat', count: '3' },
//   { animal: 'bird', count: '8' },
//   columns: [ 'animal', 'count' ]
// ]

data.forEach((row) => {
  console.log(`There are ${row.count} ${row.animal}s.`);
});
// Prints:
// There are 3 cats.
// There are 8 birds.

// If you must do some parsing ...
const betterData = csvin('data.csv', (row) => {
  return { species: row.animal.toUpperCase(), multitude: +row.count };
});
// [
//   { species: 'CAT', multitude: 3 },
//   { species: 'BIRD', multitude: 8 },
//   columns: [ 'animal', 'count' ] // The original column names
// ]
```

## API Reference

### csvin(*csvPath*[, *rowParser*])

Given the path to a CSV file, `csvPath`, synchronously read it and return an array of objects whose keys are the column headers and values are row values of the CSV file (as strings). The array also has a `columns` attribute, which is the array of column headers in the order they appear in the CSV file.

This assumes your file is UTF-8 encoded and has a header row.

You can optionally provide a `rowParser`, which should be a function applied to each row (in the format described above), which maps it to a new value. (If it returns `null` or `undefined`, that row is omitted from the output.)

For more details, see the API of the [`dsv.parse` method of `d3-dsv`](https://github.com/d3/d3-dsv#dsv_parse), because this is basically just that, except we're reading in a file as well to make life easy for lazy people like me. 😎 😕

## 🎉

Feel free to submit [issues](https://github.com/alecglassford/csvin/issues) or [pull requests](https://github.com/alecglassford/csvin/pulls) with whatever feedback you may have! It's not supposed to be so much of a thing, though, you know. It may be just as fruitful and pleasing to gaze at a tree or a bird. 🌳
