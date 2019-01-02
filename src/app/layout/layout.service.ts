import { Injectable } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { HsFormControl } from '../form/hs-form-control';

@Injectable()
export class LayoutService {

    private fg = new HsFormGroup();

    constructor() {}

    initFormRules() {
        this.fg.addControl('name', this.initNameControl());
        this.fg.addControl('password', this.initPasswordControl());
        this.fg.layout = 'inline';
        this.fg.labelWidth = 6;
        this.fg.controlWidth = 16;
        return this.fg;
    }

    private initNameControl() {
        const control = new HsFormControl();
        control.label = '姓名';
        control.placeholder = 'Username';
        return control;
    }

    private initPasswordControl() {
        const control = new HsFormControl();
        control.label = '密码';
        control.placeholder = 'Password';
        return control;
    }

}
