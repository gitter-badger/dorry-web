import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-stopped',
  templateUrl: './containers-stopped.component.html',
  styleUrls: ['./containers-stopped.component.css']
})
export class ContainersStoppedComponent implements OnInit {
  containers: Container[];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getAllContainers();
  }

  getAllContainers(): void {
    this.containerService.getAllContainers()
      .then(data => this.containers = data)
      .then(data => (
        this.containers[0].iconAssigned = true,
        this.containers[0].iconUrl = "assets/icons/ldap.png"
      ));
  }

}
