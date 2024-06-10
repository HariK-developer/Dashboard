import { NgOptimizedImage } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Drawer } from 'flowbite';
import type { DrawerOptions, DrawerInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { PieChartComponent } from '../pie-chart/pie-chart.component';



@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  imports : [NgOptimizedImage,PieChartComponent ]
})
export class BoardComponent implements AfterViewInit {
  @ViewChild('drawerJsExample', { static: true }) drawerElementRef!: ElementRef;

  options: DrawerOptions = {
    placement: 'left',
    backdrop: false,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onHide: () => {
      
    },
    onShow: () => {
      
    },
    onToggle: () => {
      
    },
  };

  instanceOptions: InstanceOptions = {
    id: 'drawer-js-example',
    override: true
  };

  drawer!: DrawerInterface;

  ngAfterViewInit(): void {
    if (this.drawerElementRef && this.drawerElementRef.nativeElement) {
      this.drawer = new Drawer(this.drawerElementRef.nativeElement, this.options, this.instanceOptions);
      this.drawer.show();
    } else {
      console.error('Drawer element reference not found');
    }
  }
}
