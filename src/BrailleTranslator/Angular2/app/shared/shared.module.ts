import { NgModule } from "@angular/core";
import { BrailleNavigationComponent } from "./components/braille-navigation.component";
import { BrailleFooterComponent } from "./components/braille-footer.component";
import { PopupComponent } from './components/popup.component';
import { DropdownComponent } from './components/dropdown.component';
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute } from "@angular/router";

@NgModule({
	declarations: [BrailleNavigationComponent, BrailleFooterComponent, PopupComponent, DropdownComponent],
	imports: [CommonModule, RouterModule],
	exports: [CommonModule, BrailleNavigationComponent, BrailleFooterComponent, PopupComponent, DropdownComponent]
})
export class SharedModule { }
