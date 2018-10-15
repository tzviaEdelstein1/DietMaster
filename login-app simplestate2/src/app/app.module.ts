import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyUserService } from './shared/services/my-user.service';
import { HttpModule } from '@angular/http';
import { NewDietComponent } from './components/new-diet/new-diet.component';
import { BodiConditionComponent } from './components/bodi-condition/bodi-condition.component';
import { NutritioCalculatorComponent } from './components/nutritio-calculator/nutritio-calculator.component';
import { DefineMenuComponent } from './components/define-menu/define-menu.component';
import { DefineDayComponent } from './components/define-day/define-day.component';
import { DietService } from './shared/services/diet.service';
import { Bodi_condition } from './shared/models/bodi_condition.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchPipe } from "./searchPipe";
import { Component, enableProdMode } from '@angular/core'
enableProdMode();

// import "rxjs/Rx";
import { ResultComponent } from './components/result/result.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { CalanderComponent } from './components/calander/calander.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DefineExercizeComponent } from './components/define-exercize/define-exercize.component';
import { MyExercizeComponent } from './components/my-exercize/my-exercize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExercizeService } from './shared/services/exercize.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
// primeng
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';


import { NewExercizeComponent } from './components/new-exercize/new-exercize.component';
import { FinishDietComponent } from './components/finish-diet/finish-diet.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/question/question.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { NewLoginComponent } from './components/new-login/new-login.component';


const route: Routes =
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'newDiet', component: NewDietComponent },
    { path: 'bodi_condition', component: BodiConditionComponent },
    { path: 'DefineMenu', component: DefineMenuComponent },
    { path: 'calander', component: CalanderComponent },
    { path: 'defineExerciz', component: DefineExercizeComponent },
    { path: 'myExercize', component: MyExercizeComponent },
    { path: 'nutritio_calculator', component: NutritioCalculatorComponent },
    { path: 'result', component: ResultComponent },
    { path: 'newProduct', component: NewProductComponent },
    { path:'defineDay', component: DefineDayComponent },   
    { path:'finishDiet', component: FinishDietComponent },
    { path:'menu', component: MenuComponent },
    { path:'home', component: HomeComponent },
    { path:'Instructions', component: InstructionsComponent },
    { path:'NewLogin', component: NewLoginComponent }

  ]
@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewDietComponent,
    BodiConditionComponent,
    NutritioCalculatorComponent,
    DefineMenuComponent,
    DefineDayComponent,
    ResultComponent,
    SearchPipe,
    NewProductComponent,
    CalanderComponent,
    DefineExercizeComponent,
    MyExercizeComponent,
    NewExercizeComponent,
    FinishDietComponent,
    MenuComponent,
    HomeComponent,
    QuestionComponent,
    InstructionsComponent,
    NewLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    // BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    NgbModalModule.forRoot(),
    Ng2AutoCompleteModule,
    NguiAutoCompleteModule,
    // angular-bootstrap-calendar
    // BrowserAnimationsModule,
    // MatButtonModule, MatCheckboxModule

    // primeng
    AutoCompleteModule,
    CardModule,
    ButtonModule

  ],
  providers: [MyUserService, DietService, ExercizeService],
  entryComponents: [InstructionsComponent, DefineMenuComponent,QuestionComponent,LoginComponent,RegisterComponent,NewDietComponent,ResultComponent,BodiConditionComponent,FinishDietComponent],

  bootstrap: [AppComponent]

  // exports:[MatAutocompleteModule,MatInputModule]
})
export class AppModule { }
