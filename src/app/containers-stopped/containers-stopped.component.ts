import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-stopped',
  templateUrl: './containers-stopped.component.html',
  styleUrls: ['./containers-stopped.component.css']
})
export class ContainersStoppedComponent implements OnInit {
  services: Container[];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers(): void {
    this.containerService.getContainers().then(services => this.services = services);
  }

}
