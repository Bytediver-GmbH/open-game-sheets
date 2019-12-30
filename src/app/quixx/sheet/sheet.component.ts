import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'quixx-sheet',
	templateUrl: './sheet.component.html',
	styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
		console.log('works!');
	}
}
