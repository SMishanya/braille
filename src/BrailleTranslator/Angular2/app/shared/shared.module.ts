import { NgModule } from "@angular/core";
import { BrailleNavigationComponent } from "./components/braille-navigation.component";
import { BrailleFooterComponent } from "./components/braille-footer.component";
import { PopupComponent } from './components/popup.component';
import { DropdownComponent } from './components/dropdown.component';
import { CommonModule } from "@angular/common";
import { RowColorDirective } from './directives/rowColor.directive';
import { RouterModule, ActivatedRoute } from "@angular/router";

@NgModule({
	declarations: [BrailleNavigationComponent, BrailleFooterComponent, PopupComponent, DropdownComponent, RowColorDirective],
	imports: [CommonModule, RouterModule],
	exports: [CommonModule, BrailleNavigationComponent, BrailleFooterComponent, PopupComponent, DropdownComponent, RowColorDirective]
})
export class SharedModule { }
