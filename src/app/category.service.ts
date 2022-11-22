import { Injectable } from '@angular/core';
import {Category} from "../interfaces/category";
import {MOCK_CATEGORIES} from "../assets/data/mock_categories";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
    constructor() { }

    getCategories(): Observable<Category[]> {
        return of(MOCK_CATEGORIES);
    }
}
