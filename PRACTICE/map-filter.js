
class Performance {
  constructor() {
    this.bgEnabled = { ics: false, ae: true, mop: true, loyalty: false };
    this.bgExisting = [
      { id: "5", key: "flag", metadata: "LOYALTY", value: 3 },
      { id: "41", key: "lyl_flag", metadata: "MOP", value: 2 },
      { id: "23", key: "l_flag", metadata: "ICS", value: 1 }
    ];
    this.chartBattlegrounds = [];

  }

  validateBattlegrounds() {
    const existing = this.bgExisting
      .map(battleground => ({
        metadata: battleground.metadata.toLowerCase(),
        value: battleground.value
      }));

    const enabled = Object.keys(this.bgEnabled)
      .filter(battlegroundName => this.bgEnabled[battlegroundName] === true);

    this.chartBattlegrounds = existing
      .filter(battleground => enabled.includes(battleground.metadata));
  }
}

let view = new Performance();
view.validateBattlegrounds();

console.log(view);