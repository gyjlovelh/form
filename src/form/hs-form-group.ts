/**
 * Created by guanyj on  12/29/18
 */
import {FormGroup} from '@angular/forms';
import {AbstractControl} from '@angular/forms/src/model';
import { HsFormControl } from './hs-form-control';

export class HsFormGroup extends FormGroup {
    controlArray = [];

    layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';

    constructor() {
        super({});
    }

    addControl(name: string, control: HsFormControl): void {
        this.controlArray.push(control);
        control.field = name;
        super.addControl(name, control);
    }

    removeControl(name: string): void {
        this.controlArray = this.controlArray.filter(c => c.field !== name);
        super.removeControl(name);
    }
}
