import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{


  departmentDetails: any = [{
    'departmentId':'101',
    'departmentName': 'Angular',
    'departmentDesc': 'Angular tranning',
     },
  {
    'departmentId':'102',
    'departmentName': 'IT',
    'departmentDesc': 'IT tranning',
  },
  { 
     'departmentId':'103',
  'departmentName': 'CS',
  'departmentDesc': 'CS tranning',
  },
  { 
     'departmentId':'104',
  'departmentName': 'Java',
  'departmentDesc': 'Java tranning',
  }

  ];

constructor(private router:Router){}
ngOnInit(){}

onSelect(departments:any){
  this.router.navigate(['/Department',departments.departmentId]);
}
}
