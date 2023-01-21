class CellBlock {
  xPosition;
  yPosition;
  isAlive = false;
  willSpawn = false;

  constructor(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  spawnClick() {
    this.isAlive = !this.isAlive;
  }

  reSpawn() {
    this.willSpawn = true;
  }

  execute() {
    this.willSpawn = false;
  }

  newTurn() {
    this.isAlive = this.willSpawn;
  }
}

export default CellBlock;
