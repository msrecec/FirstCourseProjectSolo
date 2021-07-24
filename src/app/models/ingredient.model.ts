export class Ingredient {
  name!: string;
  halal!: boolean;
  constructor(name: string, halal: boolean) {
    this.name = name;
    this.halal = halal;
  }
}
