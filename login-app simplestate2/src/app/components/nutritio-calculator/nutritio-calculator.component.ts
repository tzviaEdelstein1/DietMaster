import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from '../../shared/models/Meal.model';
import { DietService } from '../../shared/services/diet.service';
import { debug } from 'util';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../shared/models/Product.model';
import { NewProductComponent } from '../new-product/new-product.component';
import { ProductOfMeal } from '../../shared/models/ProductOfMeal.model';
import { ProductsMeasure } from '../../shared/models/ProductsMeasure.model';
import { Dailymenu } from '../../shared/models/DailyMenu.model';
import { User } from '../../shared/models/user.model';
import { Diet } from '../../shared/models/diet.model';
import { IAte } from '../../shared/models/IAte.model';
import { ProductOfMealIAte } from '../../shared/models/ProductOfMealIAte.model';
import { CaloriesPerDay } from '../../shared/models/CaloriesPerDay';
@Component({
  selector: 'app-nutritio-calculator',
  templateUrl: './nutritio-calculator.component.html',
  styleUrls: ['./nutritio-calculator.component.css']
})

export class NutritioCalculatorComponent implements OnInit {
  map:Map<number,Product>;
  meals: Meal[] = [];
  products: Product[] = [];
  newMeal: Meal;
  myMeal: Meal;
  x: any;
  data: any;
  producrName: string[] = [];
  d: string[] = [];
  show: boolean = false;
  nameMeal: string;
  productList: string[] = [];
  productsOfMeals: ProductOfMeal[] = [{meal:{id:1,name:"f"},products:[]}];
  ProductOfMealIAte: ProductOfMealIAte[] = [];
  user: User;
  DietFromServer: Diet;
  StandartDailyMenu: Dailymenu[] = [];
  mealsFromDailyMenu: number[] = [];
  iAte:IAte[]=[];
  @Output()
  sendMsgEvent: EventEmitter<string> = new EventEmitter<string>();
 sumCalorisForDay:number=0;
  model1: any;
  public query = '';
  public filteredList = [];
  public elementRef;
  recomendedCalories:number;
  @Output() saveData: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() sumCalories: EventEmitter<any> = new EventEmitter();
  @Input() date: Date;
  @Input() isStandart: boolean = false;
  @Input() saveStandart: boolean = true;
  stopAdd:number=0;
  dailyMenuNameProduct:Product;
  constructor(private dietService: DietService) {
    this.dailyMenuNameProduct=new Product();
 this.map=new Map<number,Product>();

  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('CurrentUser'));
    console.log("idUser" + this.user.id);
    this.dietService.getDiet(this.user.id)
      .subscribe((u: Diet) => {
        console.log("diet" + u);
        this.DietFromServer = u;
        this.dietService.getResult(this.DietFromServer.id)
        .subscribe(res => {
          this.recomendedCalories = res; 
          this.recomendedCalories= Math.round(this.recomendedCalories);
          console.log(this.recomendedCalories)});
        if(this.date==undefined)
        this.isStandart = true;
        else{
        this.dietService.checkIAte(this.DietFromServer.id, this.date)
        .subscribe((u: IAte) => {         
          if (u == null)
            this.isStandart = true;
          else
           this.isStandart = false;        
        }
          , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
      }
        if(this.isStandart==true)
    { 
      //  this.dietService.getDailyMenuByMeal(u.id).subscribe((response: ProductOfMeal[]) => {
      //     this.productsOfMeals = response;
      //     this.productsOfMeals.forEach(productsOfMeals=>{
      //       productsOfMeals.products.forEach(product=>{
      //        this.sumCalorisForDay+=product.caloryAdded;
      //      });
      //    });
      //   });
      
 
    } 
else{
  this.dietService.getIAteByMeal(u.id,this.date).subscribe((response: ProductOfMealIAte[]) => {
     this.ProductOfMealIAte = response;
     this.ProductOfMealIAte.forEach(ProductOfMealIAte=>{
       ProductOfMealIAte.products.forEach(product=>{
       this.sumCalorisForDay+=product.caloryAdded;
      });
    });
    
  });
}
      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
    this.dietService.getAllProducts()
      .subscribe((u: Product[]) => {
        console.log(u);
        this.products = u;
        console.log("products", this.products);
        this.products.forEach(product => {
          this.map.set(product.id,product);
});
      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
  }

  changeShow(id: number) {
    if(this.stopAdd==0){
if(this.isStandart==true){
    let dailyMenu = new Dailymenu();
    dailyMenu.idMeal = id;
    this.productsOfMeals.find(p => p.meal.id == id).products.push(dailyMenu);}
    else{
    let iAte = new IAte();
    iAte.idMeal = id;
    this.ProductOfMealIAte.find(p => p.meal.id == id).products.push(iAte);
    }
  this.stopAdd=1;
  }
  }
  filter() {
    for (var i = 0; i < this.products.length; i++) { 
      this.producrName[i] = this.products[i].name }
    if (this.query !== "") {
      this.filteredList = this.producrName.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }
  select(item) {
    this.query = item;
    this.filteredList = [];
  }
  save() {
    this.sumCalories.emit(this.sumCalorisForDay);
    let idDiet;
   if(this.saveStandart==true)
   {
    this.productsOfMeals.forEach(productOfMeal => {
      productOfMeal.products.forEach(p => p.idDiet = this.DietFromServer.id);
      this.dietService.AddStandartDailyMenu(productOfMeal.products,productOfMeal.meal.id,this.DietFromServer.id)
        .subscribe((u: Dailymenu[]) => {
          console.log("productsOfMeals" + u);
        
          this.saveData.emit(this.date);
          this.sumCalories.emit(this.sumCalorisForDay);
        }
          , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
      ;
    });
  }
  else if(this.isStandart==true){
    this.saveData.emit(this.date);
    this.sumCalories.emit(this.sumCalorisForDay);
    this.productsOfMeals.forEach(productsOfMeals => { 
      
 this.iAte=[];
      productsOfMeals.products.forEach(p =>{  
    
      let iate:IAte=new IAte();
      iate.idDiet = this.DietFromServer.id;
      iate.id=p.id;
      iate.amount=p.amount;
      iate.date=new Date(this.date);
      iate.idProduct=p.idProduct;
      iate.idMeasure=p.idMeasure;
      iate.idMeal=p.idMeal;
      iate.caloryAdded=p.caloryAdded;
      this.iAte.push(iate);     
      });
      this.dietService.AddIAte(this.iAte,productsOfMeals.meal.id,this.DietFromServer.id,this.date)
        .subscribe((u: IAte[]) => {
          console.log("ProductOfMealIAte" + u);
        
          //this.saveData.emit(this.date);
        }
          , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
      ;
    }); 
  }
  else{
    this.ProductOfMealIAte.forEach(ProductOfMealIAte => {
      ProductOfMealIAte.products.forEach(p =>{ p.idDiet = this.DietFromServer.id; 
        p.date=new Date(this.date); 
         
      p.stringDate=this.date.getDate().toString()+"-"+(this.date.getMonth()+1).toString()+"-"+this.date.getFullYear().toString();
      ;}
      );
      this.dietService.AddIAte(ProductOfMealIAte.products,ProductOfMealIAte.meal.id,this.DietFromServer.id,this.date)
        .subscribe((u: IAte[]) => {

        if(u.length==ProductOfMealIAte.products.length&&u.length>0)
          this.saveData.emit(this.date);
          this.sumCalories.emit(this.sumCalorisForDay);
        }
          , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
      ;
    });
  }

  }
onElementDeletedIAte(element) {

  this.ProductOfMealIAte.forEach(p => {
    var index = p.products.findIndex((elt) => (elt===element));
  if (index != -1) {
    let deletedElement=p.products.splice(index, 1);
    this.sumCalorisForDay-=deletedElement[0].caloryAdded;
    }

  }
  ); 
}
onElementDeletedDailyMenu(element) {
  this.productsOfMeals.forEach(p => {
    var index = p.products.findIndex((elt) => (elt===element));
  if (index != -1) {
    let deletedElement=p.products.splice(index, 1);
    this.sumCalorisForDay-=deletedElement[0].caloryAdded;
    }

  }
  ); 
}
onElementAddedIAte(ProductAndItsCalories:CaloriesPerDay)
{
this.sumCalorisForDay=0;
this.ProductOfMealIAte.forEach(p=>{
  p.products.forEach(e=>{
   this.sumCalorisForDay+=e.caloryAdded;
  })
})

}
onElementAddedDailyMenu(ProductAndItsCalories:CaloriesPerDay)
{
this.sumCalorisForDay=0;
this.productsOfMeals.forEach(p=>{
  p.products.forEach(e=>{
   this.sumCalorisForDay+=e.caloryAdded;
  })
})

}
cancelFunc(){
  this.cancel.emit();
  }
}

