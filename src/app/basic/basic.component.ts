/**
 * {{desc}}
 *
 * Author: guanyj
 * Email: 18062791691@163.com
 * Date: 2018-12-29 10:56:49
 * LastEditTime: 2018-12-30 00:13:43
 */
import { Component, ViewChild, TemplateRef, AfterViewInit, OnInit } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { HsFormControl } from '../form/hs-form-control';
import { Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from '../service/authorization.service';

@Component({
    selector: 'hs-basic',
    templateUrl: './basic.component.html'
})
export class BasicComponent implements OnInit, AfterViewInit {
    @ViewChild('passwordTemplate') passwordTemplate: TemplateRef<any>;

    rules = new HsFormGroup();

    data = {
        name: 'guanyj',
        age: 12,
        password: 'abcdefg',
        address: ['sd', 'ns'],
        date: new Date()
    };

    options = [
        { value: 'sd', label: '湖北',
            children: [
                { value: 'ns', label: '荆门', isLeaf: true },
                { value: 'nr', label: '荆州', isLeaf: true },
            ]
        },
        { value: 'zd', label: '湖南',
            children: [
                { value: 'kp', label: '长沙', isLeaf: true },
                { value: 'yj', label: 'xxx', isLeaf: true },
            ]
        },
    ];

    constructor(
        private $active: ActivatedRoute,
        private $auth: AuthorizationService
    ) {

    }

    ngOnInit() {
        this.$active.queryParams.subscribe(query => {
            this.rules.readonly = query.type === 'readonly';
        });
        this.rules.addControl('name', this.initNameControl());
        this.rules.addControl('age', this.initAgeControl());
        this.rules.addControl('password', this.initPasswordControl());
        this.rules.addControl('repass', this.initRepassControl());
        this.rules.addControl('comp', this.initCompControl());
        this.rules.addControl('address', this.initAddressControl());
        this.rules.addControl('date', this.initDateControl());
        this.rules.labelWidth = 8;
        this.rules.controlWidth = 16;
    }

    ngAfterViewInit() {

    }

    initNameControl() {
        const control = new HsFormControl();
        control.label = '姓名';
        control.type = 'input';
        control.required = true;
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
        control.feedback = true;

        control.setErrorMsg('required', '必填');
        control.setErrorMsg('maxlength', '不能超过12');
        control.setErrorMsg('dup', '名称不能重复');
        return control;
    }

    initAgeControl() {
        const control = new HsFormControl();
        control.type = 'number';
        control.extra = '范围（0~100）';
        control.setValidators([
            Validators.required,
            Validators.min(0),
            Validators.max(100)
        ]);
        control.setDefaultErrorMsg('填写错误');
        return control;
    }

    initPasswordControl() {
        const control = new HsFormControl();
        control.label = '密码';
        control.visiable = 'modify';
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
        control.visiable = 'modify';
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

    initDateControl() {
        const control = new HsFormControl();
        control.label = '生日';
        control.type = 'date';
        control.transform = value => {
            return '123';
        };
        return control;
    }

    handleClick() {
        this.$auth.pushMsg('admin拒绝了');
        this.$auth.pushMsg('guanyj拒绝了');
        this.$auth.pushMsg('qli拒绝了');
        this.$auth.show();
    }
}
