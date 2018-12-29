import {Component, Input} from '@angular/core';
import {HsFormGroup} from './hs-form-group';

@Component({
    selector: 'hs-form',
    templateUrl: './form.component.html'
})
export class FormComponent {
    public oriData: any;

    private _rules: any;
    @Input() set rules(rules: HsFormGroup) {
        if (rules) {
            this._rules = rules;
        }
    }

    get rules(): HsFormGroup {
        return this._rules;
    }

    get controls() {
        return this.rules.controlArray;
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

    constructor() {
    }
}
