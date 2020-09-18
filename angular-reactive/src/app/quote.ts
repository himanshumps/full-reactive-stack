export class Quote {
  bookId: number;
  book: string;
  content: string;

  constructor( bookId: number, book: string, content: string) {
    this.bookId = bookId;
    this.book = book;
    this.content = content;
  }
}
