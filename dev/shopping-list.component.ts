/**
 * Created by deronlee on 5/5/16.
 */

import {Component} from "angular2/core";


@Component({
    selector: 'shopping-list',
    template: `
        <ul>
            <li 
            *ngFor="#shoppingListItem of shoppingListItems"
            (click)="onItemClicked(shoppingListItem)"
            >{{ shoppingListItem.name }}</li>
        </ul>
        <div class="row">
        <input type="text" [(ngModel)]="selectedItem.name" #shoppingListItem>
        <button type="button" class="btn btn-danger" (click)="onDeleteItem()">Delete Item</button><br>
        <input type="text" #shoppingListItem>
        <button type="button" class="btn btn-primary"  (click)="onAddItem()">Add Item</button>
        </div>
    `,

})
export class ShoppingListComponent{
    public shoppingListItems = [
        {name: "Milk"},
        {name: "Sugar"},
        {name: "Bread"}
    ];
    public selectedItem = {name: ""};

    onItemClicked(shoppingListItem){
        this.selectedItem = shoppingListItem;
    }

    onAddItem(shoppingListItem) {
        this.shoppingListItems.push({name: shoppingListItem.value});
    }

    onDeleteItem() {
        this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
    }
}