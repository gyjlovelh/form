import { Injectable } from '@angular/core';
import { Validators, FormArray, FormControl } from '@angular/forms';
import { HsFormControl } from 'app/form/hs-form-control';
import { HsFormGroup } from 'app/form/hs-form-group';

@Injectable()
export class RegisterService {

    private fg = new HsFormGroup();

    constructor() { }

    initFormRules() {
        this.fg.addControl('email', this.initEmailControl());
        this.fg.addControl('password', this.initPasswordControl());
        this.fg.addControl('confirm', this.initConfirmControl());
        this.fg.addControl('nickname', this.initNicknameControl());
        this.fg.addControl('phone', this.initPhoneControl());
        this.fg.addControl('website', this.initWebsiteControl());
        this.fg.addControl('captcha', this.initCaptchaControl());

        this.fg.labelWidth = 6;
        this.fg.controlWidth = 18;
        return this.fg;
    }

    private initEmailControl() {
        const control = new HsFormControl();
        control.label = 'E-mail';
        control.required = true;
        control.setValidators([Validators.required, Validators.email]);
        control.setErrorMsg('required', 'Please input your email!');
        control.setErrorMsg('email', 'The input is not valid E-mail!');
        return control;
    }

    private initPasswordControl() {
        const control = new HsFormControl();
        control.label = 'Passoword';
        control.required = true;
        control.setValidators([Validators.required]);
        control.setErrorMsg('required', 'Please input your password!');
        return control;
    }

    private initConfirmControl() {
        const control = new HsFormControl();
        control.label = 'Confirm Password';
        control.required = true;
        control.setValidators([Validators.required, this.confirmationValidator]);
        control.setErrorMsg('required', 'Please confirm your password!');
        control.setErrorMsg('confirm', 'Two passwords that you enter is inconsistent!');
        return control;
    }

    private initNicknameControl() {
        const control = new HsFormControl();
        control.label = 'Nickname';
        control.required = true;
        control.setValidators([Validators.required]);
        control.setErrorMsg('required', 'Please input your nickname!');
        return control;
    }

    private initPhoneControl() {
        // TODO: 自定义错误提示
        const control = new HsFormControl();
        control.label = 'Phone Number';
        control.required = true;
        control.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(10)]);
        control.setErrorMsg('required', 'Please input your phone number!');
        const arr = new FormArray([
            new FormControl('phonePrev', [Validators.required]),
            new FormControl('phoneNext', [Validators.required, Validators.minLength(3)])
        ]);

        return control;
    }

    private initWebsiteControl() {
        const control = new HsFormControl();
        control.label = 'Website';
        control.required = true;
        control.placeholder = 'website';
        control.setValidators([Validators.required]);
        control.setErrorMsg('required', 'Please input website!');
        return control;
    }

    private initCaptchaControl() {
        const control = new HsFormControl();
        control.label = 'Captcha';
        control.required = true;
        control.setValidators([Validators.required]);
        control.setErrorMsg('required', 'Please input captcha!');
        control.extra = 'We must make sure that your are a human.';
        return control;
    }

    private confirmationValidator = (control: HsFormControl): { [code: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.fg.get('password').value) {
            return { confirm: true, error: true };
        }
    }
}
