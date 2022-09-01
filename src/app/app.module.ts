import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrefixIngPipe } from './pipes/prefix-ing.pipe';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ListUserComponent } from './users/list-user/list-user.component';
import { DetailsUserComponent } from './users/details-user/details-user.component';
import { AddProviderComponent } from './provider/add-provider/add-provider.component';
import { ListProviderComponent } from './provider/list-provider/list-provider.component';
import { UpdateProviderComponent } from './provider/update-provider/update-provider.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrefixIngPipe,
    ContactComponent,
    ListUserComponent,
    DetailsUserComponent,
    AddProviderComponent,
    ListProviderComponent,
    UpdateProviderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
