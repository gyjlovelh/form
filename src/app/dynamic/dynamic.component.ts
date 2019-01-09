import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HsFormGroup } from '../form/hs-form-group';
import { DynamicService } from './dynamic.service';
import { HsFormControl } from '../form/hs-form-control';
import { NzTabSetComponent, NzTabChangeEvent } from 'ng-zorro-antd';

@Component({
    selector: 'hs-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.scss'],
    providers: [DynamicService]
})
export class DynamicComponent implements OnInit {
    i = 0;
    rules: HsFormGroup;

    data = {};

    @ViewChild('control') controlTemplate: TemplateRef<any>;
    @ViewChild(NzTabSetComponent) tabset: NzTabSetComponent;

    constructor(
        private $formService: DynamicService
    ) { }

    ngOnInit() {
        this.rules = this.$formService.initFormRules();
    }

    addField(ev) {
        const control = new HsFormControl();
        // control.label = `name${this.i}`;
        control.controlTemplate = this.controlTemplate;
        this.rules.addControl(`name${this.i}`, control);
        this.i++;
    }

    removeControl(control: HsFormControl) {
        this.rules.removeControl(control.field);
    }
}
