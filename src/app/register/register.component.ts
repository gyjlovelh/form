import { Component, OnInit } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { RegisterService } from './register.service';

@Component({
    selector: 'hs-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

    rules: HsFormGroup;

    data = {};

    constructor(
        private $formService: RegisterService
    ) { }

    ngOnInit() {
        this.rules = this.$formService.initFormRules();
    }

    handleRegister() {
        console.log(this.rules);
    }

}
