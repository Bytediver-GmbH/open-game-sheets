import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {QuixxModule} from './quixx/quixx.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		QuixxModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
