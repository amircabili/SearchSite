import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { ReadFilesComponent } from './read-files/read-files.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  },
  {
    path: "employees",
    component: ListEmployeesComponent
  },
  {
    path: "employees/:id", component: EmployeeDetailsComponent,
  },
  {
    path: "app-instructions",
    component: InstructionsComponent
  },
 
  {
    path: "app-create-employee",
    component: CreateEmployeeComponent,
    canDeactivate:  [CreateEmployeeCanDeactivateGuardService]
  },

  {
    path: "app-read-files",
    component: ReadFilesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [InstructionsComponent,ListEmployeesComponent]
