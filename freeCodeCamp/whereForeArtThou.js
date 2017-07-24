function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  console.log(Object.keys(collection[0]));
  console.log(Object.keys(arguments[1]));
    for (var j = 0; j < collection.length; j++) {
      if (Object.keys(collection[j]) == Object.keys(arguments[1])){
        return "x";
      }
    }

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) === [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) === [{ first: "Tybalt", last: "Capulet" }]);
