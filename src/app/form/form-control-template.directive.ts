/**
 * nz-form-control自定义模板
 *  TODO: 为当前 nz-form-control 添加 .has-error
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2018-12-30 10:11:31
 * @LastEditTime: 2018-12-30 10:12:05
 */
import {Directive, TemplateRef, Input, HostBinding, forwardRef, Inject, ElementRef, Renderer2} from '@angular/core';
import {FormComponent} from './form.component';

@Directive({
    selector: '[hsFormControlTemplate]'
})
export class FormControlTemplateDirective {
    @Input() field: string;

    constructor(
        public template: TemplateRef<any>,
        @Inject(forwardRef(() => FormComponent)) private form: FormComponent
    ) {

    }

}
