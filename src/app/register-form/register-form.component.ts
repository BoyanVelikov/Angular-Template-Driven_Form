import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('f')
  registerForm!: NgForm;

  passwordOne = '';
  passwordTwo = '';

  

  prefixes: string[] = [
    '+971',
    '+972',
    '+973'
  ];
  defaultPrefix = this.prefixes[0];

  buildings: string[] = [
    'building 1',
    'building 2',
    'building 3'
  ];
  defaultBuilding = this.buildings[0];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.registerForm.form.controls['image'].setErrors({'incorrect': true});
    console.log(this.registerForm.form.value);
    this.registerForm.reset();
    this.registerForm.form.patchValue({
      prefix: this.prefixes[0],
      building: this.buildings[0]
    })
  }


}
