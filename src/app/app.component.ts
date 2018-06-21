import { Component } from '@angular/core';
import { ClassDataService } from './services/classdata.service';
// import { Grid } from './model/grid.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  classData:any;
  studentsData:any;
  // gridCofig:Grid;
  gridConfig:any;
  constructor(private classDataService:ClassDataService){
  }
  ngOnInit() {
    this.gridConfig ={
      'fields':['Class','Students','Pass','Fail'],
      'columns':3
    }
    this.classDataService.getclasses()
      .subscribe(data => this.classData = data);
  }
  getPassCount(data){
    return data.filter((obj) => obj.Status === 'pass').length;
  }
  getFailCount(data){
    return data.filter((obj) => obj.Status === 'fail').length;
  }
  showStudentsData(data){
      this.studentsData = this.classData[data]
  }
  
}
