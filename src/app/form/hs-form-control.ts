/**
 * FormControl子类
 * i,增加对表单DOM属性的控制，分类为编辑模式和只读模式，配合表格，可实现数据增删改查功能。
 * ii,提供labelTemplate、extraTemplate、controlTemplate可自定义模板
 * iii,
 *
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2018-12-29 10:56:49
 * @LastEditTime: 2018-12-30 13:51:27
 * @extends FormControl
 */
import { FormControl } from '@angular/forms';
import { TemplateRef } from '@angular/core';

export type controlType = 'input' | 'number' | 'dropdown' | 'date' | 'textarea' | 'password' | 'template';
export type visiableType = 'both' | 'readonly' | 'modify';
const errrorCodes = [
    'required', 'min', 'max', 'maxlength', 'emial',
    'minlength', 'pattern'
];

export class HsFormControl extends FormControl {
    /**
     * 字段名
     * require
     */
    field: string;

    label: string;

    /**
     * control模板类型 hs-form提供部分常用模板
     * 配合 hsFormControlTemplate传入自定义模板
     */
    type: controlType = 'input';

    /**
     * 额外信息（简单文本）
     */
    extra: string;

    /**
     * 当前control是否为只读
     *
     * @default false
     */
    readonly: boolean;

    /**
     * control的可见的场景，默认在查看和修改模式下都可见
     * @usageNotes
     * ### 密码框只在编辑模式下可见，在查看模式下隐藏
     * ```
     *  const control = new HsFormControl();
     *  control.label = '密码';
     *  control.visiable = 'modify';
     * ```
     *
     * @default 'both'
     */
    visiable: visiableType;

    placeholder = '';

    /**
     * 控制nz-form-label的宽度
     *
     * @type {number}
     */
    private _labelWidth: number;
    set labelWidth(w: number) {
        this._labelWidth = w;
        this.controlWidth = 24 - w;
    }

    get labelWidth(): number {
        return this._labelWidth;
    }

    /**
     * 控制nz-form-control的宽度
     *
     * @type {number}
     */
    private _controlWidth: number;
    set controlWidth(w: number) {
        this._controlWidth = w;
    }

    get controlWidth(): number {
        return this._controlWidth;
    }

    /**
     * 控制zorro的 nzHasFeedback 属性，展示校验状态图标
     * @default false
     */
    feedback: boolean;

    /**
     * 当前项是否为必填，仅影响样式(追加型号*)
     *
     * @default false
     */
    required: boolean;

    /**
     * 当readonly为true时，此函数保证文本的正确显示。
     *
     * @usageNotes
     * ### 转换日期
     * ```
     *   const control = new HsFormControl();
     *   control.type = 'date';
     *   control.transform = date => {
     *      return format(date, 'yyyy/MM/dd HH:mm:ss');
     *   };
     * ```
     * function
     */
    transform: Function;

    /**
     * 自定义模板，结合指令使用可实现扩展功能
     * @template
     * @private
     */
    extraTemplate: TemplateRef<any>;
    labelTemplate: TemplateRef<any>;
    explainTemplate: TemplateRef<any>;
    private _controlTemplate: TemplateRef<any>;

    set controlTemplate(template: TemplateRef<any>) {
        this.type = 'template';
        this._controlTemplate = template;
    }

    get controlTemplate(): TemplateRef<any> {
        return this._controlTemplate;
    }

    /**
     * errprCode列表
     * readonly
     * private
     */
    get errorList() {
        const list = [];
        this.errorMap.forEach((v, k) => {
            list.push(k);
        });
        return list;
    }

    private errorMap = new Map<string, string>();

    constructor(updateOn: 'change' | 'blur' | 'submit' = 'change') {
        super(null, {updateOn});
        this.transform = value => value;
        this.feedback = false;
        this.required = false;
        this.visiable = 'both';
    }

    /**
     * 设置指定错误码的错误错误信息
     *
     * @param errorCode
     * @param errorMsg
     * @public
     */
    setErrorMsg(errorCode: string, errorMsg: string) {
        this.errorMap.set(errorCode, errorMsg);
    }

    /**
     * 获取指定错误码的错误信息
     *
     * @param errorCode
     */
    getErrorMsg(errorCode: string) {
        return this.errorMap.get(errorCode);
    }

    /**
     * 设置缺省错误信息
     *
     * @param errorMsg
     */
    setDefaultErrorMsg(errorMsg: string) {
        errrorCodes.forEach(code => {
            if (!this.errorMap.has(code)) {
                this.errorMap.set(code, errorMsg);
            }
        });
    }

}
