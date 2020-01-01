import { Validator,AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appOldConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: appOldConfirmEqualValidatorDirective,
        multi: true
    }]
})

export class appOldConfirmEqualValidatorDirective implements Validator{
    @Input() appOldConfirmEqualValidator : string;
    validate(control: AbstractControl) : { [key:string] : any } | null {

            const controlToCompare = control.parent.get(this.appOldConfirmEqualValidator);
                if(controlToCompare && controlToCompare.value !== control.value){
                    return {'notEqual' : true};
                }
                return null;
    }
}