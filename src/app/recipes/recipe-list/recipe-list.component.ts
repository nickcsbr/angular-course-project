import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Lasagna", "Delicious Lasagna with plenty of cheese", "https://www.leahandgibson.com/wp-content/uploads/2022/05/Lasagna3.jpeg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
