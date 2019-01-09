import {HostBinding} from '@angular/core';
import {HsFormControl} from './hs-form-control';

export class HsFormControlStatus {
    protected control: HsFormControl;
    constructor() {}
    @HostBinding('class.ng-valid')
    get valid() {
        return this.control.valid;
    }

    @HostBinding('class.ng-invalid')
    get invalid() {
        return this.control.invalid;
    }

    @HostBinding('class.ng-dirty')
    get dirty() {
        return this.control.dirty;
    }

    @HostBinding('class.ng-pristine')
    get pristine() {
        return this.control.pristine;
    }

    @HostBinding('class.ng-touched')
    get touched() {
        return this.control.touched;
    }

    @HostBinding('class.ng-untouched')
    get untouched() {
        return this.control.untouched;
    }

    @HostBinding('class.ng-pending')
    get pending() {
        return this.control.pending;
    }
}
