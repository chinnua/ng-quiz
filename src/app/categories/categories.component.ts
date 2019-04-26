import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    this.categories = this.sharedService.getCategories();
  }

  selectCategory(category: any) {
    this.sharedService.setSelectedCategory(category);
    this.router.navigateByUrl('quiz');
  }

}
