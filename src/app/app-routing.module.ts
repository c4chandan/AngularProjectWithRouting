import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees/employees.component';
import { StudentsComponent } from './students/students/students.component';
import { DepartmentsComponent } from './departments/departments/departments.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './departments/department-details.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
{path:'Home',component:EmployeesComponent},
{path:'Student',component:StudentsComponent},
{path:'Department',component:DepartmentsComponent},
{path:'Department/:departmentId',component:DepartmentDetailsComponent},

//if any other page which is not defined thn this page will open
{path:'**',component:PageNotFoundComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
  EmployeesComponent,
  StudentsComponent,
  DepartmentsComponent,
  PageNotFoundComponent
];
