import { Component } from '@angular/core';

@Component({
    selector: 'hs-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    private messages: Array<string> = [];
    private _index = 0;
    private set mIndex(index: number) {
        this._index = index;
        this.checkButtonStatus();
    }

    private get mIndex(): number {
        return this._index;
    }
    isAuthModalShow = false;
    prevDisabled = true;
    nextDisabled = true;

    get currentMsg(): string {
        if (this.messages.length === 0) {
            return '';
        }
        return this.messages[this.mIndex];
    }
    constructor() {}

    open() {
        this.isAuthModalShow = true;
    }

    close() {
        this.isAuthModalShow = false;
    }

    appendMessage(message: string) {
        this.messages.push(message);
        this.checkButtonStatus();
    }

    toFirst() {
        this.mIndex = 0;
    }

    prev() {
        this.mIndex--;
    }

    next() {
        this.mIndex++;
    }

    toLast() {
        this.mIndex = this.messages.length - 1;
    }

    private checkButtonStatus() {
        this.prevDisabled = this.mIndex === 0;
        this.nextDisabled = this.mIndex === this.messages.length - 1;
    }
}
