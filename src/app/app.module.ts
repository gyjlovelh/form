import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormModule } from './form/form.module';
import zh from '@angular/common/locales/zh';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

registerLocaleData(zh);

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
        FormsModule,
        ReactiveFormsModule,
        FormModule,
        NgZorroAntdModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
