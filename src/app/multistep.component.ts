import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface step {
  Name: string;
  IsActive: boolean;
  IsLoading?: boolean;
}
@Component({
  selector: 'multistep',
  templateUrl: './multistep.component.html',
  styleUrls: [ './multistep.component.scss' ]
})
export class MultiStepComponent  {
  @Input() steps: step[] = [
    { Name: 'Step 1', IsActive: true },
		{ Name: 'Step 2', IsActive: false },
    { Name: 'Step 3', IsActive: false },
    { Name: 'Step 4', IsActive: false },
  ];
  @Output() change: EventEmitter<any> = new EventEmitter();
  stepChosen: number = 0;

  goToStep(index){
    this.stepChosen = index;
  }
}
