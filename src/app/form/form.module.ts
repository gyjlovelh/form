import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormComponent } from './form.component';
import { FormFooterDirective } from './form-footer.directive';

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
        FormFooterDirective
    ],
    entryComponents: [],
    exports: [
        FormComponent,
        FormFooterDirective
    ],
})
export class FormModule {

}
