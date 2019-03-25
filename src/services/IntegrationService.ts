import { Injectable } from '@angular/core';

@Injectable()
export class IntegrationService {
    selectedSlug: string = "";
    selectedCustomer: any;

    constructor() {
    }
}