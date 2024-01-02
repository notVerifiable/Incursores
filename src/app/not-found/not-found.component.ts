import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-not-found",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./not-found.component.html",
  styleUrl: "./not-found.component.css",
})
export class NotFoundComponent {
  @Input()
  visible: boolean = false;

  @Input()
  notFoundMessage: string = "Não conseguimos encontrar nada!";

  @Input()
  resetLinkText: string = "Voltar";

  @Input()
  resetLinkRouter: string = "/";
}
