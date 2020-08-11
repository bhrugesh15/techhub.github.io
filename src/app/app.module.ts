import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { WorksComponent } from './works/works.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const approute : Routes = [
  {path : 'about', component : AboutComponent},
  {path : 'service', component : ServiceComponent},
  {path : 'work', component : WorksComponent},
  {path : 'contact', component : ContactComponent},
  {path : '**', component : PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    WorksComponent,
    PagenotfoundComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
