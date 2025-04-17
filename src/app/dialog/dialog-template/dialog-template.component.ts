import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-template',
  standalone: true,
  imports: [MatFormFieldModule,
            FormsModule,
            MatButtonModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose,],
  templateUrl: './dialog-template.component.html',
  styleUrl: './dialog-template.component.css'
})
export class DialogTemplateComponent {
  @Input() btnYes: string = "Sim";  btnNo: string = "Não";
}
