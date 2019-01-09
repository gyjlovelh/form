/**
 * {{desc}}
 *
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2019-01-03 15:22:48
 * @LastEditTime: 2019-01-09 16:41:01
 */
import { Directive, Optional, Host, Self, Inject, forwardRef, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
import {
    ControlContainer, NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';
import { HsFormGroup } from './hs-form-group';
import { HsFormControl } from './hs-form-control';

@Directive({
    selector: '[hsFormControlName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FormControlNameDirective),
            multi: true
        }
    ]
})
export class FormControlNameDirective {
    private _value: any;
    private _rules: HsFormGroup;
    private _control: HsFormControl;
    private _controlName: string;

    @Input() set hsFormControlName(name: string) {
        this._controlName = name;
        this.initControlName();
    }

    @Input() set rules(rules: HsFormGroup) {
        this._rules = rules;
        this.initControlName();
    }

    constructor(
        private el: ElementRef,
        private render: Renderer2,
        @Optional() @Host() private parent: ControlContainer,
        @Optional() @Self() @Inject(NG_VALUE_ACCESSOR) private valueAccessors: ControlValueAccessor[]
    ) {

    }

    @HostListener('input', ['$event'])
    valueChange({ target }) {
        const { value } = target;
        this._control.setValue(value);
        if (this._control.errors) {
            this.render.addClass(this.el.nativeElement, 'ng-invalid');
        } else {
            this.render.addClass(this.el.nativeElement, 'ng-valid');
        }
        console.log(this._control.errors);

    }
    // hs-form-item ng-untouched ng-pristine ng-invalid ant-input ng-star-inserted

    private initControlName() {
        if (this._controlName && this._rules) {
            this._control = <HsFormControl>this._rules.get(this._controlName);
        }
    }
}
