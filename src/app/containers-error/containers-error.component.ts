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
  showAlert: boolean;
  showAlertAll: boolean;
  containerId: string;

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getErrorContainers();
    this.showAlert = false;
    this.showAlertAll = false;
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

  displayAlert(id: string) {
    this.showAlert = true;
    this.showAlertAll = false;
  }

  hideAlert(id: string) {
    this.showAlert = false;
  }

  displayAlertAll() {
    this.showAlertAll = true;
    this.showAlert = false;
  }

  hideAlertAll() {
    this.showAlertAll = false;
  }

  getContainerId(id: string) {
    this.containerId = id;
  }
}
