import { Component, ViewChild, TemplateRef, AfterViewInit, OnInit } from '@angular/core';
import { HsFormGroup } from '../../form/hs-form-group';
import { HsFormControl } from '../../form/hs-form-control';
import { Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'hs-basic',
    templateUrl: './basic.component.html'
})
export class BasicComponent implements OnInit, AfterViewInit {
    @ViewChild('nameTemplate') nameTemplate: TemplateRef<any>;
    @ViewChild('ageLabelTemplate') ageLabelTemplate: TemplateRef<any>;
    rules = new HsFormGroup();

    data = {
        name: 'guanyj',
        age: 12
    };
    constructor() {

    }

    ngOnInit() {

        this.rules.addControl('name', this.initNameControl());
        this.rules.addControl('age', this.initAgeControl());
        this.rules.addControl('password', this.initPasswordControl());
        this.rules.addControl('repass', this.initRepassControl());
        this.rules.addControl('comp', this.initCompControl());
        this.rules.addControl('address', this.initAddressControl());
    }

    ngAfterViewInit() {

    }

    initNameControl() {
        const control = new HsFormControl();
        control.label = '姓名';
        console.log(this.nameTemplate);
        control.extraTemplate = this.nameTemplate;
        control.labelWidth = 4;
        control.controlWidth = 8;
        control.setValidators([
            Validators.required,
            Validators.maxLength(12)
        ]);
        control.setAsyncValidators([
            (c: HsFormControl) => {
                return Observable.create(observer => {
                    setTimeout(() => {
                        if (c.value === 'guanyj') {
                            c.setErrorMsg('dup', '名称与' + c.value);
                            observer.next({ error: true, dup: true });
                        } else {
                            observer.next(null);
                        }
                        observer.complete();
                    }, 1000);
                });
            }
        ]);

        control.setErrorMsg('required', '必填');
        control.setErrorMsg('maxlength', '不能超过12');
        control.setErrorMsg('dup', '名称不能重复');
        return control;
    }

    initAgeControl() {
        const control = new HsFormControl();
        control.labelTemplate = this.ageLabelTemplate;

        control.extra = '范围（0~100）';
        return control;
    }

    initPasswordControl() {
        const control = new HsFormControl();
        control.label = '密码';
        control.setValidators([Validators.required]);
        control.valueChanges.subscribe(value => {
            this.rules.get('repass').updateValueAndValidity();
        });

        control.setDefaultErrorMsg('必填的');
        return control;
    }

    initRepassControl() {
        const control = new HsFormControl();
        control.label = '确认密码';
        control.setErrorMsg('required', '必填滴');
        control.setErrorMsg('confirm', '要一致');
        control.setValidators([
            (ctl): any => {
                if (!ctl.value) {
                    return { required: true };
                } else if (ctl.value !== this.rules.get('password').value) {
                    return { confirm: true, error: true };
                }
            }
        ]);
        return control;
    }

    initCompControl() {
        const control = new HsFormControl();
        control.label = '公司';
        control.labelWidth = 4;
        control.controlWidth = 10;
        return control;
    }

    initAddressControl() {
        const control = new HsFormControl();
        control.labelWidth = 4;
        control.controlWidth = 10;
        control.label = '地址';
        return control;
    }
}
