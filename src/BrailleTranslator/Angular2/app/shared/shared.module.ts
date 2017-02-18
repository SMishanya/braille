import { NgModule } from "@angular/core";
import { BrailleNavigationComponent } from "./components/braille-navigation.component";
import { BrailleFooterComponent } from "./components/braille-footer.component";
import { PopupComponent } from './components/popup.component';
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute } from "@angular/router";

@NgModule({
	declarations: [BrailleNavigationComponent, BrailleFooterComponent, PopupComponent],
	imports: [CommonModule, RouterModule],
	exports: [CommonModule, BrailleNavigationComponent, BrailleFooterComponent, PopupComponent]
})
export class SharedModule { }
