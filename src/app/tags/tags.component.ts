import { Component, Input, OnInit } from "@angular/core";
import { Tag } from "../shared/models/Tag";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { QuestsService } from "../services/quests/quests.service";

@Component({
  selector: "app-tags",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./tags.component.html",
  styleUrl: "./tags.component.css",
})
export class TagsComponent implements OnInit {
  @Input()
  questsPageTags?: string[];

  @Input()
  justifyContent: string = "center";

  tags?: Tag[];
  constructor(private questsService: QuestsService) {}

  ngOnInit(): void {
    if (!this.questsPageTags) {
      this.tags = this.questsService.getAllTags();
    }
  }
}
