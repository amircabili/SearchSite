import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { Observable } from 'rxjs';

import { EmployeeService } from '../employee.service';

@Injectable()
export class EmployeeDetailsGuardService  implements CanActivate{
 
    constructor(
        private _employeeService: EmployeeService,
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       
        const employeeExists = !!this._employeeService.getEmployees();
                if(employeeExists) {
                    return true;
                }else{
                this._router.navigate(['notfound']);
                return false;
            }
            alert(employeeExists);

        }
    } 