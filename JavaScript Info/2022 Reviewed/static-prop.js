
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static author = 'Ivan Puplot'; // recent addition, works in chrome and in new nodejs

  static createTodays() {
    return new this('new article', new Date());
  }
}

const art = new Article('CSS', new Date(2022, 6, 28, 14, 39, 7).toDateString());
console.log(art); // Article { title: 'CSS', date: 'Thu Jul 28 2022' }
console.log(art.author); // undefined

const today = Article.createTodays();
console.log(today); // Article { title: 'new article', date: 'date of calling' }

Article.author = 'Petro Borovyy';
console.log(Article.author); // 'Petro Borovyy'
