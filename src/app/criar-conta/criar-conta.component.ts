import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.css'
})
export class CriarContaComponent implements OnInit{
  formReg: FormGroup;

  constructor (
    private userService: UserService
  ) {    
    this.formReg = new FormGroup({
    emaill: new FormControl(),
    password: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  OnSubmit() {
    this.userService.register(this.formReg.value)
    .then()
    .catch();

  }


}
