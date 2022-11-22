import { Component, OnInit } from '@angular/core';
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../../interfaces/category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
    categories: Category[] = [];

    constructor(private categoryService: CategoryService) {}

    faPen = faPen;

    ngOnInit(): void {
        this.categoryService
            .getCategories()
            .subscribe(categories => this.categories = categories);
    }

    selectedCategory?: Category;

    onSelect(category: Category): void {
        this.selectedCategory = category;
    }
}
