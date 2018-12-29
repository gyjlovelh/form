import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[hsFormItem]'
})
export class FormItemDirective {
    constructor(
        public template: TemplateRef<any>
    ) {}
}
