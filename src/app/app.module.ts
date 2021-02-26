import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableComponentComponent } from './table-component/table-component.component';
import { TableRowComponentComponent } from './table-component/table-row-component/table-row-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    TableRowComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
