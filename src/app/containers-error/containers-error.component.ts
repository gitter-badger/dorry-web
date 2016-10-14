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

  toggleAlert(id: string) {
    if (this.showAlert == true)
      this.showAlert = false;
    else if (this.showAlert == false) {
      this.showAlert = true;
      this.showAlertAll = false;
    }
  }

  toggleAlertAll() {
    if (this.showAlertAll == true)
      this.showAlertAll = false;
    else if (this.showAlertAll == false) {
      this.showAlertAll = true;
      this.showAlert = false;
    }
  }

  getContainerId(id: string) {
    this.containerId = id;
  }
}
