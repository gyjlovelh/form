/**
 * FormGroup子类，扩展对表单样式、布局等的控制
 *
 * Author: guanyj
 * Email: 18062791691@163.com
 * Date: 2018-12-29 11:15:51
 * LastEditTime: 2018-12-30 14:36:48
 * extends FormGroup
 */

import {AbstractControl, FormGroup} from '@angular/forms';
import { HsFormControl } from './hs-form-control';

export type layoutType = 'horizontal' | 'vertical' | 'inline';

export class HsFormGroup extends FormGroup {
    /**
     * readonly
     */
    controlArray = [];

    /**
     * 控制当前Form是否为查看模式
     */
    readonly = false;

    /**
     * 表单布局
     * default 'horizontal'
     */
    layout: layoutType = 'horizontal';

    labelWidth: number;

    controlWidth: number;

    constructor(updateOn: 'change' | 'blur' | 'submit' = 'change') {
        super({}, {updateOn: updateOn});
    }

    /**
     * override
     * param name
     * param control
     */
    addControl(name: string, control: HsFormControl | HsFormGroup, position?: {after?: string, before?: string}): void {
        if (control instanceof HsFormControl) {
            if (position) {
                if (position.after) {
                    const index = this.controlArray.findIndex(item => item.field === position.after);
                    if (index !== -1) {
                        this.controlArray.splice(index + 1, 0, control);
                    }
                } else if (position.before) {
                    const index = this.controlArray.findIndex(item => item.field === position.after);
                    if (index !== -1) {
                        this.controlArray.splice(index, 0, control);
                    }
                } else {}
            } else {
                this.controlArray.push(control);
            }
            control.field = name;
        } else {
            this.controlArray.push(control);
            this.controlArray.push(...control.controlArray);
        }
        super.addControl(name, control);
    }

    /**
     * override
     * param name
     */
    removeControl(name: string): void {
        this.controlArray = this.controlArray.filter(c => c.field !== name);
        super.removeControl(name);
    }
}
