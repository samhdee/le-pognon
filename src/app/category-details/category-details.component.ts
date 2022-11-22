import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faPen} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../../interfaces/category";
import {MOCK_CATEGORIES} from "../../assets/data/mock_categories";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
    @Input() category?: Category;
    constructor() { }

    faCheck = faCheck;
    faPen = faPen;
    edit = false;
    open = false;

    ngOnInit(): void {
    }

    onSave(): void {
        this.edit = false;
    }

    onSelect(): void {
        this.edit = true;
    }
}
