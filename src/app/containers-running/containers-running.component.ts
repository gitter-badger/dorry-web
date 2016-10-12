import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-running',
  templateUrl: './containers-running.component.html',
  styleUrls: ['./containers-running.component.css']
})
export class ContainersRunningComponent implements OnInit {
  containers: Container[];

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getRunningContainers();
  }

  getRunningContainers(): void {
    this.containerService.getRunningContainers()
      .then(data => this.containers = data)
      .then(data => (
        this.containers[0].iconAssigned = true,
        this.containers[0].iconUrl = "assets/icons/samba.png"
      ));
  }

}
