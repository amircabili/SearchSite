import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { ReadFilesComponent } from './read-files/read-files.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeesTableComponent } from './employees/employees-table.component';
import { PrimeTableComponent } from './employees/prime-table.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { PrintElementComponent } from './print-element/print-element.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  },
  {
    path: "employees",
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: "employees/:id", component: EmployeeDetailsComponent,
  },
  {
    path: "app-employees-table",
    component: EmployeesTableComponent
  },
  {
    path: "app-prime-table",
    component: PrimeTableComponent
  },
  {
    path: "app-instructions",
    component: InstructionsComponent
  },
  {
    path: "app-create-employee",
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {
    path: "app-read-files",
    component: ReadFilesComponent
  },
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      // { path: 'tableToPrint', component: PrintElementComponent },      
      { path: 'invoice/:invoiceIds', component: PrimeTableComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports:[
     RouterModule
    ]
})

export class AppRoutingModule { }

export const routingComponents = [InstructionsComponent, ListEmployeesComponent]
