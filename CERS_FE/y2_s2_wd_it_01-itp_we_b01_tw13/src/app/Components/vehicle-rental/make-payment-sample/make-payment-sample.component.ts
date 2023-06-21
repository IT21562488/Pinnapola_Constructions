import { Component, OnInit } from '@angular/core';
import { VehiclePageService } from 'src/app/Services/vehicle-page.service';
import { MachineryPageService } from 'src/app/Services/machinery-page.service';


@Component({
  selector: 'app-make-payment-sample',
  templateUrl: './make-payment-sample.component.html',
  styleUrls: ['./make-payment-sample.component.css']
})
export class MakePaymentSampleComponent implements OnInit {
  rentalData: any;
  rentalData1: any;

  constructor(
    public vehiclePageService: VehiclePageService,
    public machineryPageService: MachineryPageService,
  ) { }

  ngOnInit(): void {
    this.rentalData = this.vehiclePageService.dataToInsert;
    console.log('this.rentalData', this.rentalData)

    this.rentalData1 = this.machineryPageService.dataToInsert1;
    console.log('this.rentalData1', this.rentalData1)
  }

  createNewrental() {
    console.log('this.dataInsert', this.rentalData)

    if (this.rentalData1 === undefined) {
      this.vehiclePageService.createNewRental(this.rentalData)
      .subscribe({
        next: (res) => {
          alert("Rental added Successfully")
          // this.vehicleRentalForm.reset();
          window.location.reload();

        },
        error: () => {
          alert("Error while Rental adding")
        }
      }
    )
    }

    else if (this.rentalData === undefined) {
      this.machineryPageService.createNewRental(this.rentalData1)
      .subscribe({
        next: (res) => {
          alert("Rental added Successfully")
          // this.vehicleRentalForm.reset();
          window.location.reload();

        },
        error: () => {
          alert("Error while Rental adding")
        }
      }
    )
    }
  }
}
