import { Injectable } from "@angular/core";
import { Cart } from "../../shared/models/Cart";
import { Quests } from "../../shared/models/Quests";
import { CartItem } from "../../shared/models/CartItem";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(Quests: Quests): void {
    let cartItem = this.cart.items.find((item) => item.Quests.id === Quests.id);

    if (cartItem) {
      this.changeQuatity(Quests.id, cartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(Quests));
  }

  removeFromCart(QuestsId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.Quests.id != QuestsId);
  }

  changeQuatity(QuestsId: number, quantity: number): void {
    let cartItem = this.cart.items.find((item) => item.Quests.id === QuestsId);

    if (!cartItem) {
      return;
    }

    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
