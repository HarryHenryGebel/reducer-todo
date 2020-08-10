let lastId = 0;

export default class Todo {
  constructor (item) {
    // initialize
    this.item = item;
    this.completed = false;
    this.id = lastId + 1;

    // id management
    lastId = this.id;
  }
}
