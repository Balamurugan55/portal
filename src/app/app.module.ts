import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CusloginComponent } from './cuslogin/cuslogin.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CussignupComponent } from './cussignup/cussignup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CusdashboardComponent } from './cusdashboard/cusdashboard.component';
import { CussideNavComponent } from './cusside-nav/cusside-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CusprofileComponent } from './cusprofile/cusprofile.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {CusporserviceService} from './cusporservice.service';
import{TokenInterService} from './token-inter.service';
import { AuthGuard } from './auth.guard';
import { InquiryComponent } from './inquiry/inquiry.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CussaleorderComponent } from './cussaleorder/cussaleorder.component';
import { CusdeliveryComponent } from './cusdelivery/cusdelivery.component';
import { CusinvoiceComponent } from './cusinvoice/cusinvoice.component';
import { CuscreditComponent } from './cuscredit/cuscredit.component';
import { CuspayageComponent } from './cuspayage/cuspayage.component';
import { CusoverallsalesComponent } from './cusoverallsales/cusoverallsales.component';
import { CusmasupComponent } from './cusmasup/cusmasup.component';
import { VenloginComponent } from './venlogin/venlogin.component';
import { VendashboardComponent } from './vendashboard/vendashboard.component';
import { VenprofComponent } from './venprof/venprof.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LogoutdialogComponent } from './logoutdialog/logoutdialog.component';
import { VencredComponent } from './vencred/vencred.component';
import { VenpayageComponent } from './venpayage/venpayage.component';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { VenrfqComponent } from './venrfq/venrfq.component';
import { VengrComponent } from './vengr/vengr.component';
import {MatRippleModule} from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
import { VeninvComponent } from './veninv/veninv.component';
import { SafePipe } from './safe.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { DialogsaleorderComponent } from './dialogsaleorder/dialogsaleorder.component';
import { DelidialogComponent } from './delidialog/delidialog.component';
import { InqdialogComponent } from './inqdialog/inqdialog.component';
import { RfqdialogComponent } from './rfqdialog/rfqdialog.component';
import { GrdialogComponent } from './grdialog/grdialog.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpprofComponent } from './empprof/empprof.component';
import { VenpoComponent } from './venpo/venpo.component';
import { PodialogComponent } from './podialog/podialog.component';
import { EmpldetComponent } from './empldet/empldet.component';
import { EmplreqComponent } from './emplreq/emplreq.component';
import { EmppayComponent } from './emppay/emppay.component';
import { NotifypoComponent } from './notifypo/notifypo.component';
import { EmpfsetComponent } from './empfset/empfset.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogemppayComponent } from './dialogemppay/dialogemppay.component';
@NgModule({
  declarations: [
    AppComponent,
    CusloginComponent,
    HomeComponent,
    CussignupComponent,
    CusdashboardComponent,
    CussideNavComponent,
    CusprofileComponent,
    InquiryComponent,
    CussaleorderComponent,
    CusdeliveryComponent,
    CusinvoiceComponent,
    CuscreditComponent,
    CuspayageComponent,
    CusoverallsalesComponent,
    CusmasupComponent,
    VenloginComponent,
    VendashboardComponent,
    VenprofComponent,
    LogoutdialogComponent,
    VencredComponent,
    VenpayageComponent,
    VenrfqComponent,
    VengrComponent,
    VeninvComponent,
    SafePipe,
    DialogsaleorderComponent,
    DelidialogComponent,
    InqdialogComponent,
    RfqdialogComponent,
    GrdialogComponent,
    EmploginComponent,
    EmpdashboardComponent,
    EmpprofComponent,
    VenpoComponent,
    PodialogComponent,
    EmpldetComponent,
    EmplreqComponent,
    EmppayComponent,
    NotifypoComponent,
    EmpfsetComponent,
    DialogemppayComponent
  ],
  entryComponents:[LogoutdialogComponent,DialogsaleorderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSortModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule

  ],
  providers: [CusporserviceService,TokenInterService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
