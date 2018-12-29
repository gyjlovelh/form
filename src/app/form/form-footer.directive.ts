import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[hsFormFooter]'
})
export class FormFooterDirective {

  constructor(
      public template: TemplateRef<any>
  ) { }

}
