/**
 * nz-form-extra自定义模板
 *
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2018-12-30 11:02:18
 * @LastEditTime: 2018-12-30 13:59:30
 */
import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[hsFormExtraTemplate]'
})
export class FormExtraTemplateDirective {

    @Input() field: string;
    constructor(
        public template: TemplateRef<any>
    ) {

    }
}
