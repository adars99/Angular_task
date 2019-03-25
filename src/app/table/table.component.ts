import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  ElementRef
} from "@angular/core";
// import { InfoComponent } from '../info/info.component';
import { IntegrationService } from "../../services/IntegrationService";

@Component({
  selector: "customer-table",
  templateUrl: "./table.component.html"
})
export class TableComponent {
  // @ViewChild(InfoComponent) tableComponent: ElementRef;
  selectedSlug: string = "";
  custArr: any = [];
  constructor(private integrationService: IntegrationService) {
    this.getCustomer();
  }
  customers = [
    { firstName: "Henry", lastName: "Gerard", age: 21, slug: "henry-gerard" },
    {
      firstName: "Michael",
      lastName: "Platini",
      age: 40,
      slug: "michael-platini"
    },
    { firstName: "Louis", lastName: "Figo", age: 37, slug: "louis-figo" },
    {
      firstName: "Cristiana",
      lastName: "Ronaldinho",
      age: 15,
      slug: "cristiana-ronaldinho"
    },
    {
      firstName: "Leonardo",
      lastName: "Messiah",
      age: 25,
      slug: "leonardo-messiah"
    }
  ];

  getCustomer() {
    return this.customers;
  }

  setSlug(slug) {
    this.integrationService.selectedSlug = slug;
    this.custArr.push(this.integrationService.selectedCustomer);
    this.custArr.forEach(object => {
      let index = Object.keys(object).indexOf(slug);
      var key = Object.keys(object)[index];
      if (key === slug) {
        this.integrationService.selectedCustomer = object[key];
      }
    });
  }

  /*ngOnInit(){
    console.log(this.tableComponent)
  }
  ngAfterViewInit(){
    console.log(this.tableComponent)
  } */

  getSlug() {
    return this.selectedSlug;
  }
}
