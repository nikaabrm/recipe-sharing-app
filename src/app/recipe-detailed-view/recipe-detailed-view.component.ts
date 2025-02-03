import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-detailed-view',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './recipe-detailed-view.component.html',
  styleUrl: './recipe-detailed-view.component.scss',
})
export class RecipeDetailedViewComponent {
  // readonly dialog = inject(MatDialog);
  // @Inject(MAT_DIALOG_DATA) public data: any;

  constructor(
    public dialogRef: MatDialogRef<RecipeDetailedViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data, 'aqa', this.data);
  }
}
