import { Component } from '@angular/core';

@Component({
  selector: 'customer-database',
  template: `
            <customer-table></customer-table>
            <info-table></info-table>
            `
})
export class AppComponent {}
