import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

import { BeritaComponent } from './berita/berita.component';
import { PeraturanComponent } from './peraturan/peraturan.component';
import { InformasiComponent } from './informasi/informasi.component';

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

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'berita',         component: BeritaComponent},
    { path: 'peraturan',       component: PeraturanComponent},
    { path: 'informasi',       component: InformasiComponent},
    { path: 'hspk',            component: HspkComponent},
    { path: 'ssh',            component: SshComponent},
    { path: 'asb',            component: AsbComponent},
    { path: 'detail-hspk',    component: DetailHspkComponent},
    { path: 'review1',        component: Review1Component},
    { path: 'review2',        component: Review2Component},
    { path: 'review3',        component: Review3Component},
    { path: 'review4', component: Review4Component},
    { path: 'review5', component: Review5Component},
    { path: 'review6', component: Review6Component},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
