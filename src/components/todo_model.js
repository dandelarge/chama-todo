export default class TodoModel {
  constructor(done = false, text = '', dateCreated = Date.now()) {
    this.done = done;
    this.text = text;
    this.dateCreated = dateCreated;
  }
}
