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


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    routingComponents,
    InstructionsComponent,
    ListEmployeesComponent,
    EmployeeFilterPipe,
    ReadFilesComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,      
    ReactiveFormsModule,
    FileSaverModule
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

 
