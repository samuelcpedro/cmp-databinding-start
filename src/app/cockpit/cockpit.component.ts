import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // properties
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput, contentInput) {

    // console.log(nameInput);
    // console.log(nameInput.value);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });

    // this.serverCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });

    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput, contentInput) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: contentInput.value
    });

    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
