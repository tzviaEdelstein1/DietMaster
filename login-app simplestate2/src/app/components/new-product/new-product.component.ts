import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Meal } from '../../shared/models/Meal.model';
import { DietService } from '../../shared/services/diet.service';
import { debug } from 'util';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../shared/models/Product.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { Measure } from '../../shared/models/Measure.model';
import { ProductsMeasure } from '../../shared/models/ProductsMeasure.model';
import { Dailymenu } from '../../shared/models/DailyMenu.model';
import { CaloriesPerDay } from '../../shared/models/CaloriesPerDay';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @Input() calculator:boolean;
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();
  @Output()
  elementadded: EventEmitter<any> = new EventEmitter();
  products: Product[] = [];
  measures: Measure[] = [];
  measuresForProduct: Measure[] = [];
  productsMeasure: ProductsMeasure[] = [];
  selectedProduct: Product ;
  nameProduct:string="";
  idProduct: number;
  idMeasure: Number;
  newMeasure: Measure;
  newDailyMenu: Dailymenu;
  selectedNumber: number;
  selectedMeasure: string = "";
  @Input()
  name: string;
  myData: string;
  @Input() dailyMenu: Dailymenu;
  @Input() dailyMenuNameProduct: Product;
  selectedProductName:string;
  CalorieToProduct:number;
  model7: string;
  strings:string[]=[];
  product: any;
  filteredProducts: Product[]=[];
  productsBrachi:string[]
  constructor(private dietService: DietService) { 
this.selectedProduct=new Product();

  }

  ngOnInit() {
   
    this.dietService.getAllProducts()
   .subscribe((u: Product[]) => {
    this.dietService.getAllMeasure()
    .subscribe((u: Measure[]) => {
      this.measures = u;
      this.dietService.getAllProductsMeasure()
      .subscribe((u: ProductsMeasure[]) => {
      console.log("allProducts");
        this.productsMeasure = u;
        
        if(this.dailyMenu!=undefined)
        { 
         this.selectedProduct.id=this.dailyMenu.idProduct;
         for(let i=0;i<this.products.length;i++)
         {
           if(this.products[i].id==this.selectedProduct.id)
          { this.selectedProduct.name=this.products[i].name;
           this.selectedProductName=this.products[i].name;}
           
         }
       }
       if(this.dailyMenu!=undefined)
       this.onChangeProduct();
  
      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));


    }
      , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));


     this.products = u;
      
   }
     , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
    this.dietService.getAllMeasure()
      .subscribe((u: Measure[]) => {
        this.measures = u;
      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
    this.dietService.getAllProductsMeasure()
      .subscribe((u: ProductsMeasure[]) => {
      console.log("allProducts");
        this.productsMeasure = u;
        

      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
   
  }

  //autocomplete

  filterProductsSingle(event) {
    let query = event.query;
   
    this.filteredProducts = this.filterProducts(query, this.products);
  }
  filterProducts(query, products: Product[]): Product[] {
    
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: Product[] = [];
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      if (product.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(product);
      }
    }
    return filtered;
  }
  onChangeProduct() {

   
   this.dailyMenu.idProduct=this.dailyMenuNameProduct.id;
   this.idProduct = this.dailyMenuNameProduct.id;
    this.measuresForProduct = [];
this.idProduct = this.dailyMenuNameProduct.id;
    var j
    for (j = 0; j < this.productsMeasure.length; j++) {
      if (this.productsMeasure[j].idProduct ==this.idProduct) {
        this.idMeasure = this.productsMeasure[j].idMeasure;
        var k;
        for (k = 0; k < this.measures.length && this.measures[k].id != this.idMeasure; k++);
        this.newMeasure = this.measures[k];
        this.measuresForProduct.push(this.newMeasure);
      }

    }
  
  }
  add() {
    var i
    for (i = 0; i < this.measures.length && this.measures[i].name != this.selectedMeasure; i++);
    this.newDailyMenu.idMeasure = this.measures[i].id;
    this.newDailyMenu.amount = this.selectedNumber;
    this.newDailyMenu.idProduct = this.idProduct;
  }
  removeProduct(){
    this.elementDeleted.emit();
  }
  calculateCalorieToProduct()
  { 
    
    let caloriesForMeasure;
    this.productsMeasure.forEach(productsMeasure => {
     if( productsMeasure.idMeasure==this.dailyMenu.idMeasure
      &&productsMeasure.idProduct==this.dailyMenu.idProduct)
     caloriesForMeasure=productsMeasure.calorios;
    }); 
    this.CalorieToProduct=this.dailyMenu.amount*caloriesForMeasure;
    let ProductAndItsCalories:CaloriesPerDay=new CaloriesPerDay();
    ProductAndItsCalories.calories=this.CalorieToProduct;
    ProductAndItsCalories.idMeal=this.dailyMenu.idMeal;
    ProductAndItsCalories.idProduct=this.dailyMenu.idProduct;
    this.dailyMenu.caloryAdded=this.CalorieToProduct;
    this.elementadded.emit(ProductAndItsCalories);
    if(!this.calculator)
    alert("you add in this product "+this.CalorieToProduct);
    return  this.CalorieToProduct;
  }
  isDisabled()
  {
    if(this.dailyMenu.idProduct==undefined||this.dailyMenu.idMeasure==undefined)
    return true;
  return false;
  }
}


