import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadFilesComponent } from './read-files/read-files.component';
import { FileSaverModule } from 'ngx-filesaver';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { appOldConfirmEqualValidatorDirective } from './shared/old-confirm-equal-validator.directive';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeesTableComponent } from './employees/employees-table.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material';
import { PrimeTableComponent } from './employees/prime-table.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutofocusDirective } from './autofocus.directive';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { PrintElementComponent } from './print-element/print-element.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    routingComponents,
    InstructionsComponent,
    ListEmployeesComponent,
    EmployeeFilterPipe,
    ReadFilesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    appOldConfirmEqualValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeesTableComponent,
    PrimeTableComponent,
    AutofocusDirective,
    PrintLayoutComponent,
    PrintElementComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileSaverModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    InputTextModule,
    MatPaginatorModule,
    MatListModule,
    LayoutModule,
    MatExpansionModule,
    MatIconModule,
    TableModule,
    CommonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    CheckboxModule,
    DropdownModule,
    AutoCompleteModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    MatIconModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService, MessageService, EmployeeListResolverService,EmployeeDetailsGuardService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppModule { }


