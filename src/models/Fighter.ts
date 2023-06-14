export class Fighter {
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


get name(): string {
  return this._name;
}

get health(): number {
  return this._health;
}

get power(): number {
  return this._power;
}

get defense(): number {
  return this._defense;
}

get picture(): string {
  return this._picture;
}
}