import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DesignersHomePageComponent } from './home-page/designers-home-page/designers-home-page.component';
import { CollectionsHomePageComponent } from './home-page/collections-home-page/collections-home-page.component';
import { CollectionViewComponent } from './home-page/collections-home-page/collection-view/collection-view.component';
import { DesignerViewComponent } from './home-page/designers-home-page/designer-view/designer-view.component';
import { ApparelViewComponent } from './home-page/apparel-view/apparel-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DesignersHomePageComponent,
    CollectionsHomePageComponent,
    CollectionViewComponent,
    DesignerViewComponent,
    ApparelViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
