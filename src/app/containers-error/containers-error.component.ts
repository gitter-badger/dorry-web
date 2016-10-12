import { Component, OnInit } from '@angular/core';
import { Container } from '../containers/container';
import { ContainerService } from '../containers/container.service';

@Component({
  selector: 'app-containers-error',
  templateUrl: './containers-error.component.html',
  styleUrls: ['./containers-error.component.css']
})
export class ContainersErrorComponent implements OnInit {
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
        this.containers[0].iconUrl = "assets/icons/gitlab.png"
      ));
  }

  removeContainer(id: string) {
    this.containerService.removeContainer(id)
      .then();
    //this.containerService.removeContainer(id).then(() => { });
    console.log(id);
  }

}
