import { ItemForm } from "./item-form.model";

export interface FullItem {
    addItemForm : ItemForm,
    ownerCityName : string;
    ownerName : string;
    ownerEmail : string;
}