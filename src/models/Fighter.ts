class Fighter {
  private _name: string;
  private _health: number;
  private _power: number;
  private _defense: number;
  private _picture: string;

  constructor(
    name: string,
    health: number,
    power: number,
    defense: number,
    picture: string
  ) {
    this._name = name;
    this._health = health;
    this._power = power;
    this._defense = defense;
    this._picture = picture;
  }
}
