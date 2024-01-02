export class Quests {
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
  origins!: string[];
  time!: string;
  items: QuestsItem[] = [];
  get totalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
export class QuestsItem {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}