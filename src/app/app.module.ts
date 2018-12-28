import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CommonModule } from '@angular/common';
import { FormModule } from 'src/form/form.module';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'basic', component: BasicComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
