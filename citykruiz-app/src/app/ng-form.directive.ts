
import { Directive, AfterViewInit } from '@angular/core';
import { ControlContainer, Form } from '@angular/forms';
import { formDirectiveProvider } from '@angular/forms/src/directives/reactive_directives/form_group_directive';

@Directive({
  selector: '[appNgForm]',
  providers: [formDirectiveProvider],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['ngSubmit'],
  exportAs: 'ngForm'
})
export class NgFormDirective extends ControlContainer implements Form, AfterViewInit {

  constructor() { }

}
