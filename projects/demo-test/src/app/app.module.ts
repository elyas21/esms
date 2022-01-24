import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TryTableComponent } from './try-table/try-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TryTableComponent],
  imports: [BrowserModule, MatTableModule, MatPaginatorModule, BrowserAnimationsModule, MatSortModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
