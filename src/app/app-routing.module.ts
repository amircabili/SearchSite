import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { ReadFilesComponent } from './read-files/read-files.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/app-list-employees",
    pathMatch: "full"
  },
  {
    path: "app-list-employees",
    component: ListEmployeesComponent
  },
  {
    path: "app-instructions",
    component: InstructionsComponent
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
