import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';

const primeNg = [CardModule, InputTextModule, PasswordModule, ButtonModule, RadioButtonModule, InputNumberModule, TooltipModule, DialogModule, InputSwitchModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primeNg
  ],
  exports: [primeNg]
})
export class PrimeNgModule { }
