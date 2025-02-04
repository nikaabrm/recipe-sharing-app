import { Component, Inject } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-detailed-view',
  standalone: false,
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
