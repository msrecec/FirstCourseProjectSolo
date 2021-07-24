export class Ingredient {
  name!: string;
  halal!: boolean;
  selected: boolean = false;
  constructor(name: string, halal: boolean) {
    this.name = name;
    this.halal = halal;
  }
}
