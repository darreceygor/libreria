import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabiloniaAboutComponent } from './babilonia-about/babilonia-about.component';
import { BabiloniaBooksComponent } from './babilonia-books/babilonia-books.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '',redirectTo: 'books',pathMatch: 'full' },
  { path: 'books', component: BabiloniaBooksComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: BabiloniaAboutComponent },
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
