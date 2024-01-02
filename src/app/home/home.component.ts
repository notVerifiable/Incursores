import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestsService } from "../services/quests/quests.service";
import { Quests } from "../shared/models/Quests";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { SearchComponent } from "../search/search.component";
import { TagsComponent } from "../tags/tags.component";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: "app-home",    
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    TagsComponent,
    RouterLink,
    NotFoundComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
  /* Não teve motivo pra eu fazer isso além de eu achar engraçado. 
  -Luís */
export class HomeComponent implements OnInit {
  quests: Quests[] = [];

  constructor(
    private questsService: QuestsService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["searchTerm"]) {
        this.quests = this.questsService.getAllQuestsBySearchTerm(
          params["searchTerm"]
        );
      } else if (params["tag"]) {
        this.quests = this.questsService.getAllQuestsByTag(params["tag"]);
      } else {
        this.quests = this.questsService.getAll();
      }
    });
  }
}
