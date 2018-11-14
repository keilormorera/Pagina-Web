import { Component, OnInit } from "@angular/core";
import { Order } from "../order";
import { OrderService } from "../order.service";
import { error } from "util";

@Component({
  selector: "app-orders-list",
  templateUrl: "./orders-list.component.html",
  styleUrls: ["./orders-list.component.css"]
})
export class OrdersListComponent implements OnInit {
  pageTitle: string = "Order List";
  imageWidth: number = 50;
  imageMargin: number = 10;
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: Order[];
  products: Order[] = [];

  constructor(private _productService: OrderService) {}

  performFilter(filterBy: string): Order[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: Order) =>
        product.title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
