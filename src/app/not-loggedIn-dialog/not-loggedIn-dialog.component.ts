import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-loggedIn-dialog',
  templateUrl: './not-loggedIn-dialog.component.html',
  styleUrls: ['./not-loggedIn-dialog.component.scss']
})
export class NotLoggedInDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotLoggedInDialogComponent>) { }

  ngOnInit() {
  }

}
