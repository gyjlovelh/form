/**
 * {{desc}}
 *
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2019-01-03 15:22:48
 * @LastEditTime: 2019-01-09 16:41:01
 */
import {
    Directive,
    Inject,
    forwardRef,
    HostListener,
    Input
} from '@angular/core';
import { HsFormControl } from './hs-form-control';
import { HsFormControlStatus } from './model';
import { FormComponent } from './form.component';

@Directive({
    selector: '[hsFormControlName]'
})
export class FormControlNameDirective extends HsFormControlStatus {

    @Input() set hsFormControlName(name: string) {
        this.control = <HsFormControl>this.form.rules.get(name);
    }

    constructor(
        @Inject(forwardRef(() => FormComponent)) private form: FormComponent
    ) {
        super();
    }

    @HostListener('input', ['$event'])
    valueChange({ target }) {
        const { value } = target;
        this.control.setValue(value);
        this.control.markAsDirty();
    }

    @HostListener('focus', ['$event'])
    focus() {
        this.control.markAsTouched();
    }
}
