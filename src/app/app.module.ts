import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular";
import { MasterGridComponent } from './common-components/master-grid/master-grid.component';
import { BestPracticesComponent } from './components/best-practices/best-practices.component';
import { StrategiesComponent } from './components/best-practices/strategies/strategies.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    MasterGridComponent,
    BestPracticesComponent,
    StrategiesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(null),
    // AgGridModule.withComponents([ButtonRendererComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
