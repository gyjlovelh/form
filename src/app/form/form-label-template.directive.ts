/**
 * nz-form-label 自定义模板
 *
 * ~Author: guanyj
 * ~Email: 18062791691@163.com
 * ~Date: 2018-12-30 10:53:38
 * ~LastEditTime: 2018-12-30 11:02:30
 */
import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[hsFormLabelTemplate]'
})
export class FormLabelTemplateDirective {
    @Input() field: string;
    constructor(
        public template: TemplateRef<any>
    ) { }

}
