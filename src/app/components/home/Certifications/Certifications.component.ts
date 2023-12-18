import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";

@Component({
	selector: "app-Certifications",
	templateUrl: "./Certifications.component.html",
	styleUrls: ["./Certifications.component.scss"],
})
export class CertificationsComponent implements OnInit {
	constructor(public analyticsService: AnalyticsService) {}

	ngOnInit(): void {}
}
