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
    this.getContainers();
  }

  getContainers(): void {
    this.containerService.getContainers()
      .then(data => this.containers = data)
      .then(data => console.log(this.containers));
  }

}
