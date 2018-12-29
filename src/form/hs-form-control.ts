import { FormControl, ValidatorFn } from '@angular/forms';
import { TemplateRef } from '@angular/core';

export class HsFormControl extends FormControl {
    field: string;
    label: string;
    labelTemplate: TemplateRef<any>;
    extra: string;
    extraTemplate: TemplateRef<any>;
    readonly: boolean;
    labelWidth = 4;
    controlWidth = 18;

    get errorList() {
        const list = [];
        this.errorMap.forEach((v, k) => {
            list.push(k);
        });
        return list;
    }

    private errorMap = new Map<string, string>();

    constructor() {
        super();
    }

    setErrorMsg(errorCode: string, errorMsg: string) {
        this.errorMap.set(errorCode, errorMsg);
    }

    getErrorMsg(errorCode: string) {
        return this.errorMap.get(errorCode);
    }

    setDefaultErrorMsg(errorMsg: string) {
        this.errorMap.set('any', errorMsg);
    }

    getDefaultErrorMsg() {
        return this.errorMap.get('any');
    }

}
