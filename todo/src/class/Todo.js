let lastId = 0;

export default class Todo {
  constructor (item) {
    // initialize
    this.item = item;
    this.completed = false;
    const id = Date.now();

    // verify id uniqueness and save
    this.id = id > lastId ? id : lastId + 1;

    // id management
    lastId = this.id;
  }
}
