import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';

import { BeritaComponent } from './berita/berita.component';
import { PeraturanComponent } from './peraturan/peraturan.component';
import { InformasiComponent } from './informasi/informasi.component';
import { PenjelasanModalComponent } from './penjelasan-modal/penjelasan-modal.component';

import { HspkComponent } from './hspk/hspk.component';
import { SshComponent } from './ssh/ssh.component';
import { AsbComponent } from './asb/asb.component';
import { DetailHspkComponent } from './detail-hspk/detail-hspk.component';
import { Review1Component } from './review1/review1.component';
import { Review2Component } from './review2/review2.component';
import { Review3Component } from './review3/review3.component';
import { Review4Component } from './review4/review4.component';
import { Review5Component } from './review5/review5.component';
import { Review6Component } from './review6/review6.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    BeritaComponent,
    PeraturanComponent,
    InformasiComponent,
    PenjelasanModalComponent,
    HspkComponent,
    SshComponent,
    AsbComponent,
    DetailHspkComponent,
    Review1Component,
    Review2Component,
    Review3Component,
    Review4Component,
    Review5Component,
    Review6Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
