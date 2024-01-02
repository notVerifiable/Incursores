import { Injectable } from "@angular/core";
import { Quests } from "../../shared/models/Quests";
import { Tag } from "../../shared/models/Tag";

@Injectable({
  providedIn: "root",
})
export class QuestsService {
  constructor() {}

  getQuestsById(id: number): Quests {
    return this.getAll().find((quests) => quests.id == id)!;
  }

  getAllTags(): Tag[] {
    return [
      { name: "Tudo ", count: 6 },
      { name: "Missões curtas ", count: 4 },
      { name: "Sequestro ", count: 1 },
      { name: "Grandes ameaças ", count: 0 },
      { name: "Missões longas ", count: 2 },
      { name: "Extermínio ", count: 3 },
      { name: "Recuperação de itens mágicos ", count: 1 },
      { name: "Investigação ", count: 1 },
    ];
  }

  getAllQuestsByTag(tag: string): Quests[] {
    if (tag === "Tudo ") {
      return this.getAll();
    } else {
      return this.getAll().filter((Quest) => Quest.tags?.includes(tag));
    }
  }

  // get the Quests filtered by search terms
  getAllQuestsBySearchTerm(searchTerm: string): Quests[] {
    return this.getAll().filter((Quests) => Quests.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAll(): Quests[] {
    return [
      {
        id: 1,
        name: "Destrua os goblins no esgoto",
        time: "20-30",
        price: 10,
        favorite: false,
        origins: ["Rindrel"],
        stars: 4.5,
        imageUrl: "/assets/images/quests/quests-1.jpg",
        tags: ["Missões curtas ", "Guerreiro", "Extermínio "],
        items: [],
        totalPrice: 0,
      },
      {
        id: 2,
        name: "Extermine os orcs da fortaleza",
        price: 20,
        time: "20-30",
        favorite: true,
        origins: ["Thermus", "Karazham", "Picos Gélidos"],
        stars: 4.7,
        imageUrl: "/assets/images/quests/quests-2.jpg",
        tags: ["Missões longas ", "Extermínio "],
        items: [],
        totalPrice: 0,
      },
      {
        id: 3,
        name: "Salve o refém dos piratas",
        price: 5,
        time: "10-15",
        favorite: false,
        origins: ["Drakonia", "Fenda"],
        stars: 3.5,
        imageUrl: "/assets/images/quests/quests-3.jpg",
        tags: ["Missões curtas ", "Sequestro "],
        items: [],
        totalPrice: 0,
      },
      {
        id: 4,
        name: "Resolva o caso da tesoura",
        price: 2,
        time: "15-20",
        favorite: true,
        origins: ["Serdim", "Terra de Prata"],
        stars: 3.3,
        imageUrl: "/assets/images/quests/quests-4.jpg",
        tags: ["Missões curtas ", "Investigação "],
        items: [],
        totalPrice: 0,
      },
      {
        id: 5,
        name: "Recupere a espada flamejante",
        price: 11,
        time: "40-50",
        favorite: false,
        origins: ["Atis", "Vernécia"],
        stars: 3.0,
        imageUrl: "/assets/images/quests/quests-5.jpg",
        tags: ["Missões longas ", "Recuperação de itens mágicos "],
        items: [],
        totalPrice: 0,
      },
      {
        id: 6,
        name: "Extermine os kobolds da mina",
        price: 9,
        time: "40-50",
        favorite: false,
        origins: ["Rindrel"],
        stars: 4.0,
        imageUrl: "/assets/images/quests/quests-6.jpg",
        tags: ["Missões curtas ", "Recuperar ", "Extermínio "],
        items: [],
        totalPrice: 0,
      },
    ];
  }
}
