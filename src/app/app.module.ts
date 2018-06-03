import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TodoAppComponent,
    ProductComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
