import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HsFormControl } from './hs-form.control';

@Component({
    selector: 'hs-form',
    templateUrl: './form.component.html'
})
export class FormComponent {

    public rules = new FormGroup({});

    public oriData: any;

    private _model: any;
    @Input() set model(value: any) {
        if (value) {
            this._model = value;
            value.forEach(item => {
                const control = new HsFormControl();
                control.setValidators(item.validators || []);
                control.setAsyncValidators(item.asyncValidators || []);
                this.rules.addControl(item.field, control);
            });
        }
    }

    get model(): any {
        return this._model;
    }

    private _data: any;
    @Input() set data(value: any) {
        if (value) {
            this._data = this.oriData = value;
            Object.keys(value).forEach(key => {
                if (this.rules.contains(key)) {
                    this.rules.get(key).setValue(value[key]);
                }
            });
        }
    }

    get data() {
        return this._data;
    }

    constructor() {}
}
