import { Component } from '@angular/core';

@Component({
    selector: 'hs-basic',
    templateUrl: './basic.component.html'
})
export class BasicComponent {
    model = [
        {field: 'name', title: '姓名'},
        {field: 'age', title: '年龄'}
    ];

    data = {
        name: 'guanyj',
        age: 12
    };
    constructor() {}
}
