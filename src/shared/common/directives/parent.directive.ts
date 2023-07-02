import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  SkipSelf,
  Host,
  Self,
} from '@angular/core';
import { EventsService } from '@services';

@Directive({
  selector: '[appParent]',
  standalone: true,
  // providers: [EventsService],
})
export class ParentDirective {
  // constructor(@Self() private es: EventsService) {
  //   if (this.es) {
  //     this.es.prefix = 'Parent';
  //     this.es.log('from parent');
  //   }
  // }

  ngOnInit() {}
}
