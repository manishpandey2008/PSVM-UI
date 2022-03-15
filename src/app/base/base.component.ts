import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: `
  <p>
    base works!
  </p>
`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnDestroy {

  destroy$ = new Subject();

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
