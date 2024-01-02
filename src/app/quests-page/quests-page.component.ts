import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Quests } from "../shared/models/Quests";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestsService } from "../services/quests/quests.service";
import { TagsComponent } from "../tags/tags.component";
import { CartService } from "../services/cart/cart.service";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: "app-quests-page",
  standalone: true,
  imports: [TagsComponent, CommonModule, NotFoundComponent],
  templateUrl: "./quests-page.component.html",
  styleUrl: "./quests-page.component.css",
})
export class QuestsPageComponent {
  quests!: Quests;
  constructor(
    private activatedRoute: ActivatedRoute,
    private questsService: QuestsService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.quests = questsService.getQuestsById(params["id"]);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.quests);
    this.router.navigateByUrl("/cart");
  }
}
