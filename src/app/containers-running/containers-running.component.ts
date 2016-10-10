import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-running',
  templateUrl: './containers-running.component.html',
  styleUrls: ['./containers-running.component.css']
})
export class ContainersRunningComponent implements OnInit {
  services: Container[];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers(): void {
    this.containerService.getContainers().then(services => this.services = services);
  }

}
