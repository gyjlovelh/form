import { Component, OnInit } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { LayoutService } from './layout.service';

@Component({
    selector: 'hs-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    providers: [LayoutService]
})
export class LayoutComponent implements OnInit {
    layout = 'inline';
    rules;

    data: any = {};

    constructor(
        private $formService: LayoutService
    ) { }

    ngOnInit() {
        this.rules = this.$formService.initFormRules();
    }

    handleLayoutChange(ev: any) {
        this.rules.layout = ev;
    }
}
