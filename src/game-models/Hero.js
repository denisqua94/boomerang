// Наш герой.

class Hero {
  constructor() {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 1
    this.isAtacc = false
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('ПОКОЙСЯ С МИРОМ💀');
    process.exit();
  }
}

module.exports = Hero;
