import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
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




@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    routingComponents,
    InstructionsComponent,
    ListEmployeesComponent,
    EmployeeFilterPipe,
    ReadFilesComponent,
    CreateEmployeeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,      
    ReactiveFormsModule,
    FileSaverModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

 
