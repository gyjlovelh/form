import { Component, OnInit } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { LoginService } from './login.service';

@Component({
    selector: 'hs-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    rules: HsFormGroup;
    data = {
        username: 'guanyj',
        password: '123123'
    };
    constructor(
        private $formService: LoginService
    ) { }

    ngOnInit() {
        this.rules = this.$formService.initFormRules();
    }

}
