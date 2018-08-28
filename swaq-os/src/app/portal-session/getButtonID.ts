import { LoginPortalComponent } from '../login-portal/login-portal.component';
import { ResetPasswordPortalComponent } from '../reset-password-portal/reset-password-portal.component';
import { LockScreenComponent } from '../lock-screen/lock-screen.component';
import { ActiavtionPortalComponent } from '../actiavtion-portal/actiavtion-portal.component';


public class ButtonID{
    onClick(event) {
        console.log(event);
        console.log(event.srcElement.attributes.id);
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr.nodeValue;
        console.log(value);
    }