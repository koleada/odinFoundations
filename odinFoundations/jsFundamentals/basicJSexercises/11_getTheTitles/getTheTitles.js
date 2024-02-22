const getTheTitles = function() {
  const books = arguments[0];

  //for loop works

  //let titleArr = [];
  //   for (let i = 0; i < books.length; i++) {
  //     titleArr.push(books[i].title);
  //   }

  // but we can easily use map to turn the orignal array into an array of just the titles of each item
  return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
