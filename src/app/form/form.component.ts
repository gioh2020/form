import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router: Router) { }

  
  onSubmit(values:any):void {
    console.log("form values", values)
    this.router.navigate(['/profile']);
    
  }

}
