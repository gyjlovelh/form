/**
 * FormModule
 *
 * ~Author: guanyj
 * ~Email: 18062791691@163.com
 * ~Date: 2018-12-29 08:57:43
 * ~LastEditTime: 2018-12-30 13:58:55
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormComponent } from './form.component';
import { FormFooterTemplateDirective } from './form-footer-template.directive';
import { FormControlTemplateDirective } from './form-control-template.directive';
import { FormLabelTemplateDirective } from './form-label-template.directive';
import { FormExtraTemplateDirective } from './form-extra-template.directive';
import { LayoutPipe } from './layout.pipe';
import { FormExplainTemplateDirective } from './form-explain-template.directive';
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
        FormFooterTemplateDirective,
        FormControlTemplateDirective,
        FormLabelTemplateDirective,
        FormExtraTemplateDirective,
        FormExplainTemplateDirective,
        LayoutPipe
    ],
    entryComponents: [],
    exports: [
        FormComponent,
        FormFooterTemplateDirective,
        FormControlTemplateDirective,
        FormLabelTemplateDirective,
        FormExtraTemplateDirective,
        FormExplainTemplateDirective
    ],
})
export class FormModule {

}
