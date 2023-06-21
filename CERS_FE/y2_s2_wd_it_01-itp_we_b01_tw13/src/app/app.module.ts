import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './Components/home-screen/home-screen.component';
import { HomeScreenService } from "src/app/Services/home-screen.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list"; 
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { VehicleRentalComponent } from './Components/vehicle-rental/vehicle-rental.component';
import { MachineryRentalComponent } from './Components/machinery-rental/machinery-rental.component';
import { VehicleInventoryManagementComponent } from './Components/vehicle-inventory-management/vehicle-inventory-management.component';
import { MachineryInventoryManagementComponent } from './Components/machinery-inventory-management/machinery-inventory-management.component';
import { OffersAndPromotionsComponent } from './Components/offers-and-promotions/offers-and-promotions.component';
import { BillingAndPaymentComponent } from './Components/billing-and-payment/billing-and-payment.component';
import { EmployeeManagementComponent } from './Components/employee-management/employee-management.component';
import { FeedbackAndSupportComponent } from './Components/feedback-and-support/feedback-and-support.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddOfferComponent } from './Components/offers-and-promotions/add-offer/add-offer.component';
import { OfferService } from './Services/offer.service';

import { ShowOfferComponent } from './Components/offers-and-promotions/show-offer/show-offer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { ShowCusOfferComponent } from './Components/offers-and-promotions/show-cus-offer/show-cus-offer.component';
import { ShowCusLoyalityComponent } from './Components/offers-and-promotions/show-cus-loyality/show-cus-loyality.component';
import { ShowCusMonthlyComponent } from './Components/offers-and-promotions/show-cus-monthly/show-cus-monthly.component';
import { OfferCusUIComponent } from './Components/offers-and-promotions/offer-cus-ui/offer-cus-ui.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AddMachinesComponent } from './Components/machinery-inventory-management/add-machines/add-machines.component';
import { InventoryService } from './Services/inventory.service';
import { ShowInventoryComponent } from './Components/machinery-inventory-management/show-inventory/show-inventory.component';
import { ShowVehicleComponent } from './Components/vehicle-inventory-management/show-vehice/show-vehice.component';
import { AddVehiclesComponent } from './Components/vehicle-inventory-management/add-vehicles/add-vehicles.component';
import { InvoicesComponent } from './Components/billing-and-payment/invoices/invoices.component';
import { CommonModule } from '@angular/common';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatDialog } from '@angular/material/dialog';
import { ExtendInvoiceComponent } from './Components/billing-and-payment/extend-invoice/extend-invoice.component';
import { OrderSummaryComponent } from './Components/billing-and-payment/order-summary/order-summary.component';
import { AddNewCardComponent } from './Components/billing-and-payment/add-new-card/add-new-card.component';
import { SalesOverViewComponent } from './Components/billing-and-payment/sales-over-view/sales-over-view.component';
import { PayAuthenticationComponent } from './Components/billing-and-payment/pay-authentication/pay-authentication.component';
// import { FormBuilder, Validators } from '@angular/forms';  
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EquipmentCategoryComponent } from './Components/machinery-rental/equipment-category/equipment-category.component';
import { VehicleCategoryComponent } from './Components/vehicle-rental/vehicle-category/vehicle-category.component';
import { MachineryListComponent } from './Components/machinery-rental/machinery-list/machinery-list.component';
import { VehicleListComponent } from './Components/vehicle-rental/vehicle-list/vehicle-list.component';
import { VehiclePageComponent } from './Components/vehicle-rental/vehicle-page/vehicle-page.component';
import { MakePaymentSampleComponent } from './Components/vehicle-rental/make-payment-sample/make-payment-sample.component';
import { MyRentalsComponent } from './Components/user-profile/my-rentals/my-rentals.component';
import { ExtendVehicleComponent } from './Components/vehicle-rental/extend-vehicle/extend-vehicle.component';
import { MachineryPageComponent } from './Components/machinery-rental/machinery-page/machinery-page.component';
import { ExtendMachineryComponent } from './Components/machinery-rental/extend-machinery/extend-machinery.component';
import { MyExtensionsComponent } from './Components/user-profile/my-extensions/my-extensions.component';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavbarComponent,
    VehicleRentalComponent,
    MachineryRentalComponent,
    VehicleInventoryManagementComponent,
    MachineryInventoryManagementComponent,
    OffersAndPromotionsComponent,
    BillingAndPaymentComponent,
    EmployeeManagementComponent,
    FeedbackAndSupportComponent,
    UserProfileComponent,
    FooterComponent,
    AddOfferComponent,
    ShowOfferComponent,
    ShowCusOfferComponent,
    ShowCusLoyalityComponent,
    ShowCusMonthlyComponent,
    OfferCusUIComponent,
   
    AddMachinesComponent,
    ShowInventoryComponent,
    ShowVehicleComponent ,
    AddVehiclesComponent,
    
  
    InvoicesComponent,
    ExtendInvoiceComponent,
    OrderSummaryComponent,
    AddNewCardComponent,
    SalesOverViewComponent,
    PayAuthenticationComponent,
   
    EquipmentCategoryComponent,
    VehicleCategoryComponent,
    MachineryListComponent,
    VehicleListComponent,
    VehiclePageComponent,
    MakePaymentSampleComponent,
    MyRentalsComponent,
    ExtendVehicleComponent,
    MachineryPageComponent,
    ExtendMachineryComponent,
    MyExtensionsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    
    CommonModule,
    // MatPaginator,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    // FormBuilderModule,
    // ValidatorsModule,
    // MatSort,
    // MatDialog,
    MatDatepickerModule,
    MatNativeDateModule
    
    
    

  ],
  
 
  providers: [
    HomeScreenService,
    InventoryService,
    OfferService,
    DatePipe 
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }