import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { QuestsPageComponent } from "./quests-page/quests-page.component";
import { CartPageComponent } from "./cart-page/cart-page.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search/:searchTerm", component: HomeComponent },
  { path: "tag/:tag", component: HomeComponent },
  { path: "quests/:id", component: QuestsPageComponent },
  { path: "cart/cart-page", component: CartPageComponent },
];
