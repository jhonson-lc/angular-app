import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "les-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.css"],
})

export class ConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
  ) {}
  public mensaje:string = "";

  onNoClick(): void {
    this.dialogRef.close();
  }
}
