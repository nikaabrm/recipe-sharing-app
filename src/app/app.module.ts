import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipesModule } from './recipes/recipes.module';
import { provideRouter, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { routes } from '../app/app-routing.module' 
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalComponent } from './modal/modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RecipesModule, AppRoutingModule, ModalComponent],
  providers: [provideRouter(routes),provideHttpClient(), provideAnimationsAsync(),
    { provide: MatDialogRef,useValue: {} },
    { provide: MAT_DIALOG_DATA,useValue: {} }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
