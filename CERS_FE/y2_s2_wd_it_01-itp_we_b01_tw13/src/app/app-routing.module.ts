import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingAndPaymentComponent } from './Components/billing-and-payment/billing-and-payment.component';
import { EmployeeManagementComponent } from './Components/employee-management/employee-management.component';
import { FeedbackAndSupportComponent } from './Components/feedback-and-support/feedback-and-support.component';
import { HomeScreenComponent } from './Components/home-screen/home-screen.component';
import { MachineryInventoryManagementComponent } from './Components/machinery-inventory-management/machinery-inventory-management.component';
import { MachineryRentalComponent } from './Components/machinery-rental/machinery-rental.component';
import { OffersAndPromotionsComponent } from './Components/offers-and-promotions/offers-and-promotions.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { VehicleInventoryManagementComponent } from './Components/vehicle-inventory-management/vehicle-inventory-management.component';
import { VehicleRentalComponent } from './Components/vehicle-rental/vehicle-rental.component';
import { ShowCusOfferComponent } from './Components/offers-and-promotions/show-cus-offer/show-cus-offer.component';
import { ShowCusLoyalityComponent } from './Components/offers-and-promotions/show-cus-loyality/show-cus-loyality.component';
import { ShowCusMonthlyComponent } from './Components/offers-and-promotions/show-cus-monthly/show-cus-monthly.component';
import { InvoicesComponent } from './Components/billing-and-payment/invoices/invoices.component';
import { ExtendInvoiceComponent } from './Components/billing-and-payment/extend-invoice/extend-invoice.component';
import{OrderSummaryComponent} from './Components/billing-and-payment/order-summary/order-summary.component';
import { AddNewCardComponent } from './Components/billing-and-payment/add-new-card/add-new-card.component';
import { SalesOverViewComponent } from './Components/billing-and-payment/sales-over-view/sales-over-view.component';
import { PayAuthenticationComponent } from './Components/billing-and-payment/pay-authentication/pay-authentication.component';
import { MachineryListComponent } from './Components/machinery-rental/machinery-list/machinery-list.component';
import { MachineryPageComponent } from './Components/machinery-rental/machinery-page/machinery-page.component';
import { VehicleListComponent } from './Components/vehicle-rental/vehicle-list/vehicle-list.component';
import { VehiclePageComponent } from './Components/vehicle-rental/vehicle-page/vehicle-page.component';
import { MyExtensionsComponent } from './Components/user-profile/my-extensions/my-extensions.component';
import { MyRentalsComponent } from './Components/user-profile/my-rentals/my-rentals.component';
import { ShowOfferComponent } from './Components/offers-and-promotions/show-offer/show-offer.component';

const routes: Routes = [
  {path: 'Home', component: HomeScreenComponent},
  {path: 'Profile', component: UserProfileComponent},
  {path: 'VehicleRental', component: VehicleRentalComponent},  
  {path: 'MachineryRental', component: MachineryRentalComponent},
  {path: 'VehicleInventoryManagement', component: VehicleInventoryManagementComponent},
  {path: 'MachineryInventoryManagement', component: MachineryInventoryManagementComponent},
  // {path: 'Home/OffersAndPromotions', component: OffersAndPromotionsComponent, children: [
  //   {path: 'Home/OffersAndPromotions/ShowCusOffer', component: ShowCusOfferComponent},
  //   {path:'Home/OffersAndPromotions/OfferCusUIComponent'}
  // ]},
  {path: 'BillingAndPayment', component: BillingAndPaymentComponent},
  {path: 'EmployeeManagement', component: EmployeeManagementComponent},
  {path: 'FeedbackAndSupport', component: FeedbackAndSupportComponent},

  //payments......................................................................
  {path:'Home/BillingAndPayment/ViewInvoice',component:InvoicesComponent},
  {path:'Home/BillingAndPayment/ViewInvoice/extendInvoice',component:ExtendInvoiceComponent},
  {path:'Home/BillingAndPayment/ViewInvoice/SalesOverview',component:SalesOverViewComponent},
  {path:'Home/BillingAndPayment/SalesOverview',component:SalesOverViewComponent},
  // Done above paths

  {path:'Home/BillingAndPayment/OrderSummary',component:OrderSummaryComponent},
  {path:'Home/BillingAndPayment/OrderSummary/AddNewCard',component:AddNewCardComponent},
  {path:'Home/BillingAndPayment/AddNewCard',component:AddNewCardComponent},
  {path:'Home/BillingAndPayment/OrderSummary/AddNewCard/payAuthentication',component:PayAuthenticationComponent},
  // {path:'Home/BillingAndPayment/ViewInvoice/AddNewCard',component:AddNewCardComponent},
  {path:'Home/BillingAndPayment/payAuthentication',component:PayAuthenticationComponent},
  //...........................................................................
  

  {path: 'Home/VehicleRental', component: VehicleRentalComponent},  
  {path: 'Home/MachineryRental', component: MachineryRentalComponent},
  {path: 'Home/VehicleInventoryManagement', component: VehicleInventoryManagementComponent},
  {path: 'Home/MachineryInventoryManagement', component: MachineryInventoryManagementComponent},
  {path: 'Home/OffersAndPromotions', component: OffersAndPromotionsComponent},
  {path: 'Home/BillingAndPayment', component: BillingAndPaymentComponent},
  {path: 'Home/EmployeeManagement', component: EmployeeManagementComponent},
  {path: 'Home/FeedbackAndSupport', component: FeedbackAndSupportComponent},
  {path: 'Home/OffersAndPromotions/ShowCusOffer', component: ShowCusOfferComponent},
  {path:'Home/OffersAndPromotions/ShowCusLoyality', component:ShowCusLoyalityComponent},
  {path:'Home/OffersAndPromotions/ShowCusMonthly' , component:ShowCusMonthlyComponent},
  {path: 'Home/MachineryRental/machinerylist', component: MachineryListComponent},
  {path: 'Home/MachineryRental/machinerylist/machinerypage', component:MachineryPageComponent},
  {path: 'Home/VehicleRental/vehiclelist', component:VehicleListComponent},
  {path: 'Home/VehicleRental/vehiclelist/vehiclepage', component:VehiclePageComponent},
  {path: 'Profile/MyExtensions', component: MyExtensionsComponent},
  {path: 'Profile/MyRentals', component:MyRentalsComponent},
  {path: 'Home/OffersAndPromotions/showoffer', component:ShowOfferComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
