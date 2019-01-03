/**
 * 自定义explain模板
 *
 * ~Author: guanyj
 * ~Email: 18062791691@163.com
 * ~Date: 2019-01-03 09:48:53
 * ~LastEditTime: 2019-01-03 09:51:08
 */
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[hsFormExplainTemplate]'
})
export class FormExplainTemplateDirective {

    @Input() field: string;

    constructor(
        public template: TemplateRef<any>
    ) { }

}
