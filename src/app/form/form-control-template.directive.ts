/**
 * nz-form-control自定义模板
 *
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2018-12-30 10:11:31
 * @LastEditTime: 2018-12-30 10:12:05
 */
import { Directive, TemplateRef, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[hsFormControlTemplate]'
})
export class FormControlTemplateDirective {
    @Input() field: string;
    @HostBinding('class.fs-form-item') item = true;
    constructor(
        public template: TemplateRef<any>
    ) {

    }


}
