import { Component } from "@angular/core";

@Component({
    selector: "braille-footer",
    template: `
		<footer>
			<a href="https://github.com/SMishanya"><i class="fa fa-github"></i></a>
			<a href="https://www.linkedin.com/in/mykhailo-smereka"><i class="fa fa-linkedin"></i></a>
			<a href="https://www.facebook.com/kasparov.mike"><i class="fa fa-facebook"></i></a>
			<a href="https://vk.com/m_smereka"><i class="fa fa-vk"></i></a>
		</footer>
	`,
	styles: [
		`
		i.fa {
			font-size: 30px;
			color: white;
			margin: 50px;
		}

		footer {
			width: 100%;
			text-align: center;
			background-color: black;
		}
	`
	]
})
export class BrailleFooterComponent {

}
