
class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    for (const i of this.members) {
      yield i;
    }
  }

  add(obj) {
    function deepEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    for (const i of this.members) {
      if (deepEqual(i, obj)) { throw new Error('Данный герой уже добавлен'); }
    }

    this.members.add(obj);
  }
}
