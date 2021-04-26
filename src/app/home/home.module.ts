import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPage } from './pages/contact/contact.page';
import { HomePage } from './pages/home/home.page';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { UpdateDialog } from './dialogs/update/update.dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UpdateService } from './services/update.service';

@NgModule({
  declarations: [
    HomePage,
    ContactPage,
    ContactDetailsComponent,
    UpdateDialog,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class HomeModule {
  constructor(service: UpdateService) {}
 }
