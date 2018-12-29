import { FormControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { TemplateRef } from '@angular/core';

export type controlType = 'input' | 'number' | 'dropdown' | 'date' | 'textarea' | 'password' | 'template';

export class HsFormControl extends FormControl {
    field: string;
    label: string;
    type: controlType = 'input';
    labelTemplate: TemplateRef<any>;
    extra: string;
    extraTemplate: TemplateRef<any>;
    readonly: boolean;
    labelWidth = 4;
    controlWidth = 18;
    feedback = false;

    get errorList() {
        const list = [];
        this.errorMap.forEach((v, k) => {
            list.push(k);
        });
        return list;
    }

    private _controlTemplate: TemplateRef<any>;
    set controlTemplate(template: TemplateRef<any>) {
        this.type = 'template';
        this._controlTemplate = template;
    }

    get controlTemplate(): TemplateRef<any> {
        return this._controlTemplate;
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
