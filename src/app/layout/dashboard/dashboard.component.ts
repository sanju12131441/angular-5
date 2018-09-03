import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';
import * as $ from 'jquery';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    isActive: boolean = false;
    collapsed: boolean = false;
    showMenu: string = '';
    
    @Output() collapsedEvent = new EventEmitter<boolean>();
    pushRightClass: string = 'push-right';
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    toggleButton() {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    constructor() {
       
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
