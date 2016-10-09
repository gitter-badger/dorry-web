import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-error',
  templateUrl: './containers-error.component.html',
  styleUrls: ['./containers-error.component.css']
})
export class ContainersErrorComponent implements OnInit {
  services: Container[];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers(): void {
    this.containerService.getContainers().then(services => this.services = services);
  }

}
