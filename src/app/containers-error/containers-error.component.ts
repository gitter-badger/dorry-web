import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-error',
  templateUrl: './containers-error.component.html',
  styleUrls: [
    './containers-error.component.css',
    '../containers/containers.component.css'
  ]
})
export class ContainersErrorComponent implements OnInit {
  containers: Container[];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getErrorContainers();
  }

  getErrorContainers() {
    this.containerService.getErrorContainers()
      .then(data => this.containers = data);
  }

  removeContainer(id: string) {
    this.containerService.removeContainer(id)
      .then(data => this.getErrorContainers());
  }

  removeAll() {
    this.containerService.getErrorContainers()
      .then(data => this.containers = data)
      .then(data => {
        for (let container of this.containers) {
          this.removeContainer(container["Id"]);
        }
      });
  }

}
