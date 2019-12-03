import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p class="text-info">
      Department Id which is selcted <span style="font-size:30px;color:red;">{{departmentId}} </span>! 
    </p>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  private departmentId:number;

  constructor(private activatedRoutObj:ActivatedRoute) { }

  ngOnInit() {
    let departmentId=parseInt(this.activatedRoutObj.snapshot.paramMap.get('departmentId'));
    this.departmentId=departmentId;
  }

}
