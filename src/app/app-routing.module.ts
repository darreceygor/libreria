import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabiloniaAboutComponent } from './babilonia-about/babilonia-about.component';
import { BabiloniaBooksComponent } from './babilonia-books/babilonia-books.component';

const routes: Routes = [
  { path: '',redirectTo: 'books',pathMatch: 'full' },
  { path: 'books', component: BabiloniaBooksComponent },
  { path: 'about', component: BabiloniaAboutComponent },
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
