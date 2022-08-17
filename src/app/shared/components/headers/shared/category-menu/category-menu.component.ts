import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
	selector: 'molla-category-menu',
	templateUrl: './category-menu.component.html',
	styleUrls: ['./category-menu.component.scss']
})

export class CategoryMenuComponent implements OnInit, OnDestroy {

	isHome = true;

	private subscr: Subscription;

	constructor(public utilsService: UtilsService, public router: Router) {
		this.subscr = this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.isHome = event.url === "/";
			} else if (event instanceof NavigationEnd) {
				this.isHome = event.url === "/";
			}
		})
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.subscr.unsubscribe();
	}

	toggleMenu() {
		document.querySelector('.category-dropdown .dropdown-menu').classList.toggle('show');
	}
}
