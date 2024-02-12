import { Component } from '@angular/core';

@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.component.html',
  styleUrls: ['./mymodal.component.css']
})
export class MymodalComponent {


isVisible = false;

  constructor() {}


 CloseOverlay(): void{
  this.isVisible = false;
 }



}
