//declearing a veriable

export const Person = () => {};
let name: string = "anil";
let age: number = 20;
let access: boolean = true;
//declearing string of array
let books: string[] = [
  "king in village",
  "snow of mountain",
  "oceans of desert",
];

//declearing Array of string w.r.t Array and generic
let hobbies: Array<String> = ["Running", "cycling", "reading"];

//declearing tupel
//when an array store with different type at different location
let myTupel: [number, string] = [26, "anil"];

enum booksCategory {
  biography = 1,
  normal = 2,
  travel = 3,
}

//declearing a function

//declearing a function with return type
function getName(): string {
  return name;
}

//declearing a function with argument with it's type
// ? make that parameter optional
//we can assign an default value to parameter
//personName is required parameter with default value
//usename is optional parameter
//we can also assign an function to get default value
//e.g personName : string =getDefaultPersonName()
//...userIds is a rest parameter
//e.g setName("anil","an@23",1,2);
//e.g e.g setName("anil","an@23",1,2,4,5);
function setName(
  personName: string = "admin",
  username?: string,
  ...userIds: number[]
) {
  name = personName;
}

function getBooks(): string[] {
  return books;
}

function setBooks(newBbooks: string[]) {
  books = newBbooks;
}

function addNewBooks(book: string): string[] {
  books = [...books, book];
  return books;
}

function matchCategory(booksCat: booksCategory): boolean {
  return booksCat.valueOf === booksCategory.biography.valueOf;
}

// declearing generic function
function logAndReturn<T>(anyType: T): T {
  console.log(anyType);
  return anyType;
}
