import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentDetailsComponent } from './departments/department-details.component';
// import { EmployeesComponent } from './employees/employees/employees.component';
// import { StudentsComponent } from './students/students/students.component';
// import { DepartmentsComponent } from './departments/departments/departments.component';
// import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeesComponent,
    // StudentsComponent,
    // DepartmentsComponent,
    // PageNotFoundComponent,
    routingComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
