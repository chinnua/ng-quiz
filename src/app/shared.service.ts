import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  categories: any;
  selectedCategory: any;

  constructor() {
    this.categories = [
      { key: 'any', name: 'Random' },
      { key: '9', name: 'General Knowledge' },
      { key: '10', name: 'Books' },
      { key: '11', name: 'Film' },
      { key: '12', name: 'Music' },
      { key: '13', name: 'Musicals & Theatres' },
      { key: '14', name: 'Television' },
      { key: '15', name: 'Video Games' },
      { key: '16', name: 'Board Games' },
      { key: '17', name: 'Science & Nature' },
      { key: '18', name: 'Computers' },
      { key: '19', name: 'Mathematics' },
      { key: '20', name: 'Mythology' },
      { key: '21', name: 'Sports' },
      { key: '22', name: 'Geography' },
      { key: '23', name: 'History' },
      { key: '24', name: 'Politics' },
      { key: '25', name: 'Art' },
      { key: '26', name: 'Celebrities' },
      { key: '27', name: 'Animals' },
      { key: '28', name: 'Vehicles' },
      { key: '29', name: 'Comics' },
      { key: '30', name: 'Gadgets' },
      { key: '31', name: 'Japanese Anime & Manga' },
      { key: '32', name: 'Cartoon & Animations' }
    ];

    this.selectedCategory = {};
  }

  getCategories() {
    return this.categories;
  }

  setSelectedCategory(category: any) {
    this.selectedCategory = category;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

}
