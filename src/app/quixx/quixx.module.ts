import {NgModule} from '@angular/core';
import {SheetComponent} from './sheet/sheet.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		SheetComponent
	],
	exports: [
		SheetComponent
	]
})
export class QuixxModule {
}
