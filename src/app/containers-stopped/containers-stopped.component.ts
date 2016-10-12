import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-stopped',
  templateUrl: './containers-stopped.component.html',
  styleUrls: [
    './containers-stopped.component.css',
    '../containers/containers.component.css'
  ]
})
export class ContainersStoppedComponent implements OnInit {
  containers: Container[];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getStoppedContainers();
  }

  getStoppedContainers() {
    this.containerService.getStoppedContainers()
      .subscribe(data => this.containers = data);
  }

  restartContainer(id: string) {
    this.containerService.restartContainer(id)
      .then(data => this.getStoppedContainers());
  }

}
