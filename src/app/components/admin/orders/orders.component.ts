import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  items;
  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getOrders().then(data => (this.items = data));
  }
}
