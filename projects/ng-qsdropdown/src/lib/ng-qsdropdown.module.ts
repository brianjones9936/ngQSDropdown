import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQSDropdownComponent } from './ng-qsdropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [NgQSDropdownComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ScrollingModule
  ],
  exports: [NgQSDropdownComponent]
})
export class NgQSDropdownModule { }
