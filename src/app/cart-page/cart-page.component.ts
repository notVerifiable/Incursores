import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CartService } from "../services/cart/cart.service";
import { Cart } from "../shared/models/Cart";
import { CartItem } from "../shared/models/CartItem";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: "app-cart-page",
  standalone: true,
  imports: [CommonModule, RouterLink, NotFoundComponent],
  templateUrl: "./cart-page.component.html",
  styleUrl: "./cart-page.component.css",
})
export class CartPageComponent {
  cart!: Cart;
  router: any;

  constructor(private cartService: CartService) {
    this.setCart();
    this.router.navigateByUrl("/cart");
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.Quests.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuatity(cartItem.Quests.id, quantity);
    this.setCart();
  }
  

  setCart() {
    this.cart = this.cartService.getCart();
  }
}
