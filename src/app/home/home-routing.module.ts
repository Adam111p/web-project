import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreatePage } from './pages/contact-create/contact-create.page';
import { ContactDetailsPage } from './pages/contact-details/contact-details.page';
import { ContactPage } from './pages/contact/contact.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'contact',
    component: ContactPage,
    children: [
      {
        path: 'create',
        component: ContactCreatePage,
      },
      {
        path: ':id',
        component: ContactDetailsPage,
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
