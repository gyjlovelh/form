import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormComponent } from './form.component';
import { FormItemDirective } from './form-item.directive';
import { FormItemComponent } from './form-item.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule
    ],
    declarations: [
        FormComponent,
        FormItemComponent,
        FormItemDirective
    ],
    entryComponents: [
        FormItemComponent
    ],
    exports: [
        FormComponent,
        FormItemDirective
    ],
})
export class FormModule {

}
