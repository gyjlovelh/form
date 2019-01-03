import { Injectable } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { HsFormControl } from '../form/hs-form-control';

@Injectable()
export class DynamicService {
    private fg = new HsFormGroup();
    constructor() { }

    initFormRules() {
        this.fg.addControl('field', this.initFieldControl());
        this.fg.labelWidth = 8;
        this.fg.controlWidth = 16;
        return this.fg;
    }

    private initFieldControl() {
        const control = new HsFormControl();
        control.label = 'field1';
        return control;
    }


}
