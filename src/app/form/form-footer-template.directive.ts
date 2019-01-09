/**
 * form底部按钮组
 *
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2018-12-29 20:40:00
 * @LastEditTime: 2018-12-30 00:13:50
 */
import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[hsFormFooterTemplate]'
})
export class FormFooterTemplateDirective {

    constructor(
        public template: TemplateRef<any>
    ) { }

}
