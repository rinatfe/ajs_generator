export default class Person {
  constructor(type) {
    const obj = {
      Bowman: [25, 25, 'Лучник'],
      Swordsman: [40, 10, 'Мечник'],
      Magician: [10, 40, 'Маг'],
      Daemon: [10, 40, 'Демон'],
      Undead: [25, 25, 'Бессмертный'],
      Zombie: [40, 10, 'Зомби'],
    };


    if (!obj.hasOwnProperty(type)) { throw new Error('Недопустимый тип персонажа'); }
    this.name = obj[type][2],
    this.type = type,
    this.health = 100,
    this.level = 1,
    this.attack = obj[type][0],
    this.defence = obj[type][1];
  }
}
