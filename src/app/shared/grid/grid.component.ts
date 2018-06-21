// import { Component,Input,Output,EventEmitter } from '@angular/core';
// import { ClassDataService } from '../../services/classdata.service';


// @Component({
//   selector: 'grid',
//   templateUrl: './grid.component.html',
//   styleUrls: ['./grid.component.scss']
// })
// export class GridComponent {
//   classData:any;
//   studentsData:any;
//   @Input() gridConfig:any;
//   @Output() data = new EventEmitter();
//   constructor(private classDataService:ClassDataService){
//   }
//   ngOnInit() {
//     this.classDataService.getclasses()
//       .subscribe(data => this.classData = data);
//   }
//   getPassCount(data){
//     return data.filter((obj) => obj.Status === 'pass').length;
//   }
//   getFailCount(data){
//     return data.filter((obj) => obj.Status === 'fail').length;
//   }
//   showStudentsData(data){
//         this.studentsData = this.classData[data]
//         this.data.emit(this.studentsData);
//   }
// }
