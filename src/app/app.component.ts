import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
    imports: [CommonModule, RouterOutlet, HeaderComponent, SearchComponent]
})
export class AppComponent {
  title = "Incursores";
}
