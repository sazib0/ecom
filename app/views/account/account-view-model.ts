import { Observable, Frame } from '@nativescript/core';

export class AccountViewModel extends Observable {
    private _email: string = '';
    private _password: string = '';

    constructor() {
        super();
    }

    onContinue() {
        // Implement login logic
        console.log('Login attempt:', this._email);
    }

    onCreateAccount() {
        Frame.topmost().navigate({
            moduleName: 'views/account/create-account-page',
            animated: true
        });
    }
 
    }

    onAppleLogin() {
        console.log('Apple login tapped');
    }

    onGoogleLogin() {
        console.log('Google login tapped');
    }

    onFacebookLogin() {
        console.log('Facebook login tapped');
    }

    onHelpCenter() {
        Frame.topmost().navigate({
            moduleName: 'views/help/help-center-page',
            animated: true
        });
    }

    onTerms() {
        Frame.topmost().navigate({
            moduleName: 'views/legal/terms-page',
            animated: true
        });
    }
}