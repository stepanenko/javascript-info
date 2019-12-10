
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static author = 'Ivan Puplot'; // recent addition, works in chrome but not in nodejs

  static createTodays() {
    return new this('new article', new Date());
  }
}

const art = new Article('CSS', new Date(2022, 6, 28, 14, 39, 7).toDateString());
console.log(art); // Article { title: 'CSS', date: 'Thu Jul 28 2022' }

const today = Article.createTodays();
console.log(today); // Article { title: 'new article', date: 2019-12-10T10:21:46.344Z }

// Article.author = 'Petro Borovyy';
console.log(Article.author); // 'Ivan Puplot'
