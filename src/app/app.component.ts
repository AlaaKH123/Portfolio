import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "Ala-Khmiri-portfolio";

	constructor(
		private titleService: Title,
		private metaService: Meta,
		private languageService: LanguageService
	) {}
	ngOnInit(): void {
		this.languageService.initLanguage();

		this.titleService.setTitle(
			"Ala Khmiri | DevOps Developer | Software Engineer"
		);
		this.metaService.addTags([
			{
				name: "keywords",
				content:
					"Cloud, DevOps , Software Engineer",
			},
			{
				name: "description",
				content:
					"Ambitious, dynamic, andmotivated, my passion and skills in DevOps , particularly in infrastructure automation and monitoring , set me apart. My keeninterest in artificial intelligence adds an innovative dimension tomy abilities. Currently, I aim toenhance my technical skills andapply them to innovative projects.",
			},
		]);

		AOS.init();
	}
}
