import { Component } from '@angular/core';
import {IntegrationService} from '../../services/IntegrationService';

@Component({
  selector: 'info-table',
  templateUrl: './info.component.html',
})
export class InfoComponent {
 
  customerSlug: string = "adarsh"; // slug instance variable of InfoComponent
  custArr: any = [];
  
  customers = {
    'henry-gerard':
    ["Henry", "Gerard", 21, 'Livershool', 'Male', '3123', 'India', 'TN'],
    'michael-platini':
    ["Michael", "Platini", 40, 'Czecha', 'Male', '3198', 'USA', 'SF'],
    'louis-figo':
    ["Louis", "Figo", 37, 'Reala Madrida', 'Male', '3176', 'France', 'PA'],
    'cristiana-ronaldinho':
    ["Cristiana", "Ronaldinho", 15, 'Portugalia', 'Female', '3178', 'Portugal', 'LB'],
    'leonardo-messiah':
    ["Leonardo", "Messiah", 25, 'Barceloja', 'Female', '3165', 'Argentina', 'BA']
  }
  constructor(private integrationService: IntegrationService) { 
    this.integrationService.selectedCustomer = this.customers;
  }
}
