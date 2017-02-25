import { Component, OnInit } from "@angular/core";

@Component({
    selector: "braille-footer",
    template: `
		<footer>
			<a href="https://github.com/SMishanya"><i class="fa fa-github"></i></a>
			<a href="https://www.linkedin.com/in/mykhailo-smereka"><i class="fa fa-linkedin"></i></a>
			<a href="https://www.facebook.com/kasparov.mike"><i class="fa fa-facebook"></i></a>
			<a href="https://vk.com/m_smereka"><i class="fa fa-vk"></i></a>
			<a href="mailto:admin@algoholic.in.ua" title="admin@algoholic.in.ua"><i class="fa fa-envelope"></i></a>
			<br/>
			<div id="year"><a href="http://algoholic.in.ua">algoholic.in.ua</a> &copy;{{year}}</div>
		</footer>
	`,
	styles: [`
		#year{
			display: block;
			margin: 0 0 10px 0;
			padding: 0;
			color: gray;
		}

		#year a{
			color: gray;
		}
	`]
	
})
export class BrailleFooterComponent implements OnInit {
	private year: number;

	ngOnInit() {
		this.year = (new Date()).getFullYear();
	}

}
