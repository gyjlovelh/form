import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormModule } from './form/form.module';
import zh from '@angular/common/locales/zh';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_ICONS } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { RegisterComponent } from './register/register.component';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

registerLocaleData(zh);

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'basic', component: BasicComponent },
    { path: 'layout', component: LayoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        LayoutComponent,
        LoginComponent,
        RegisterComponent
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
        { provide: NZ_I18N, useValue: zh_CN },
        { provide: NZ_ICONS, useValue: icons }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
