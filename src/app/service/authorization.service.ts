import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AuthComponent } from '../auth-component/auth.component';


@Injectable()
export class AuthorizationService {
    private overlayRef: OverlayRef;
    private authComponent: AuthComponent;
    constructor(
        private overlay: Overlay
    ) {
        this.overlayRef = this.overlay.create();
        this.authComponent = this.overlayRef.attach(new ComponentPortal(AuthComponent)).instance;
    }

    show() {
        this.authComponent.open();
    }

    pushMsg(msg: string) {
        this.authComponent.appendMessage(msg);
    }

    locationLatestAuthorization() {
        this.authComponent.toLast();
    }

    close() {

    }
}
