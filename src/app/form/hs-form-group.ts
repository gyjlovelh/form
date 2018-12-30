/**
 * FormGroup子类，扩展对表单样式、布局等的控制
 *
 *  ~Author: guanyj
 *  ~Email: 18062791691@163.com
 *  ~Date: 2018-12-29 11:15:51
 *  ~LastEditTime: 2018-12-30 14:36:48
 *  ~extends FormGroup
 */

import {FormGroup} from '@angular/forms';
import { HsFormControl } from './hs-form-control';

export class HsFormGroup extends FormGroup {
    /**
     *  ~readonly
     */
    controlArray = [];

    /**
     * 控制当前Form是否为查看模式
     */
    readonly = false;

    /**
     * 表单布局
     *  ~default 'horizontal'
     */
    layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';

    constructor() {
        super({});
    }

    /**
     *  ~override
     *  ~param name
     *  ~param control
     */
    addControl(name: string, control: HsFormControl): void {
        this.controlArray.push(control);
        control.field = name;
        super.addControl(name, control);
    }

    /**
     *  ~override
     *  ~param name
     */
    removeControl(name: string): void {
        this.controlArray = this.controlArray.filter(c => c.field !== name);
        super.removeControl(name);
    }
}
