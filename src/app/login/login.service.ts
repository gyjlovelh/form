import { Injectable } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { HsFormControl } from '../form/hs-form-control';

@Injectable()
export class LoginService {

    private fg = new HsFormGroup();

    constructor() { }

    initFormRules() {
        this.fg.addControl('username', this.initUsernameControl());
        this.fg.addControl('password', this.initPasswordControl());
        this.fg.layout = 'vertical';
        return this.fg;
    }

    private initUsernameControl() {
        const control = new HsFormControl();
        return control;
    }

    private initPasswordControl() {
        const control = new HsFormControl();
        return control;
    }

}
