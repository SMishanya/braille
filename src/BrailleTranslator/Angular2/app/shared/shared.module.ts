import { NgModule } from "@angular/core";
import { BrailleNavigationComponent } from "./braille-navigation.component";
import { BrailleFooterComponent } from "./braille-footer.component";
import { PopupComponent } from './components/popup.component';
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute } from "@angular/router";

@NgModule({
	declarations: [BrailleNavigationComponent, BrailleFooterComponent, PopupComponent],
	imports: [CommonModule, RouterModule],
	exports: [CommonModule, BrailleNavigationComponent, BrailleFooterComponent, PopupComponent]
})
export class SharedModule { }
