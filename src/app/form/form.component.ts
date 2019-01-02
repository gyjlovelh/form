/**
 * {{desc}}
 *
 * @Author: guanyj
 * @Email: 18062791691@163.com
 * @Date: 2018-12-29 11:10:34
 */

import {Component, Input, ContentChild, TemplateRef, ViewChild, ContentChildren, QueryList, OnInit, AfterContentInit} from '@angular/core';
import {HsFormGroup} from './hs-form-group';
import { FormFooterTemplateDirective } from './form-footer-template.directive';
import { FormControlTemplateDirective } from './form-control-template.directive';
import { HsFormControl } from './hs-form-control';
import { FormLabelTemplateDirective } from './form-label-template.directive';
import { FormExtraTemplateDirective } from './form-extra-template.directive';

@Component({
    selector: 'hs-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit, AfterContentInit {

    public oriData: any;

    private _rules: any;

    @Input() set rules(rules: HsFormGroup) {
        if (rules) {
            this._rules = rules;
            this.initFormStatus();
        }
    }

    get rules(): HsFormGroup {
        return this._rules;
    }

    get controls() {
        if (this.rules.readonly) {
            return this.rules.controlArray.filter(control => control.visiable === 'both' || control.visiable === 'readonly');
        } else {
            return this.rules.controlArray.filter(control => control.visiable === 'both' || control.visiable === 'modify');
        }
    }

    private _data: any;
    @Input() set data(value: any) {
        if (value) {
            this._data = this.oriData = value;
            this.initFormStatus();
        }
    }

    get data() {
        return this._data;
    }

    constructor() {
    }

    /**
     * 自定义按钮
     */
    @ContentChild(FormFooterTemplateDirective) footerTemplateRef: FormFooterTemplateDirective;
    @ContentChildren(FormControlTemplateDirective) controlTemplateRefs: QueryList<FormControlTemplateDirective>;
    @ContentChildren(FormLabelTemplateDirective) labelTemplateRefs: QueryList<FormLabelTemplateDirective>;
    @ContentChildren(FormExtraTemplateDirective) extraTemplateRefs: QueryList<FormExtraTemplateDirective>;

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.controlTemplateRefs.forEach(directive => {
            const control = <HsFormControl>this.rules.get(directive.field);
            control.type = 'template';
            control.controlTemplate = directive.template;
        });

        this.labelTemplateRefs.forEach(directive => {
            const control = <HsFormControl>this.rules.get(directive.field);
            control.labelTemplate = directive.template;
        });

        this.extraTemplateRefs.forEach(directive => {
            const control = <HsFormControl>this.rules.get(directive.field);
            control.extraTemplate = directive.template;
        });
    }

    private initFormStatus() {
        if (this.rules && this.data) {
            Object.keys(this.data).forEach(key => {
                if (this.rules.contains(key)) {
                    this.rules.get(key).setValue(this.data[key]);
                }
            });
        }
    }
}
