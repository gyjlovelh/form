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
    Optional,
    Host,
    Self,
    Inject,
    forwardRef,
    HostListener,
    Input,
    ElementRef,
    Renderer2
} from '@angular/core';
import {
    ControlContainer, NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';
import {HsFormGroup} from './hs-form-group';
import {HsFormControl} from './hs-form-control';
import {HsFormControlStatus} from './model';

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
export class FormControlNameDirective extends HsFormControlStatus {
    private _rules: HsFormGroup;
    private _controlName: string;
    private native: any;

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
        super();
        this.native = this.el.nativeElement;
    }

    @HostListener('input', ['$event'])
    valueChange({target}) {
        const {value} = target;
        this.control.setValue(value);
        this.control.markAsDirty();
    }

    @HostListener('focus', ['$event'])
    focus() {
        this.control.markAsTouched();
    }

    private initControlName() {
        if (this._controlName && this._rules) {
            this.control = <HsFormControl>this._rules.get(this._controlName);
        }
    }
}
