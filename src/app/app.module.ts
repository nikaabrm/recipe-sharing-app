import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipesModule } from './recipes/recipes.module';
import { provideRouter, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { routes } from '../app/app-routing.module' 


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RecipesModule, AppRoutingModule  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
