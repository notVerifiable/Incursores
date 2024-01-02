import { Quests } from "./Quests";

export class CartItem {
  constructor(Quests: Quests) {
    this.Quests = Quests;
    this.price;
  }

  Quests: Quests;
  quantity: number = 1;

  get price(): number {
    return this.Quests.price * this.quantity;
  }
}
