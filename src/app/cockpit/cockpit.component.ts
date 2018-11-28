import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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

  // argument in ViewChild is the selector
  // and we pass a name of a local reference
  // @ViewChild(CockpitComponent) serverContentInput; we can also do this
  // serverContentInput is of type ElementRef
  // with this we get direct access to elements of our template throught @ViewChild
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  @ViewChild('serverNameInput') serverNameInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {

    // console.log(nameInput);
    // console.log(nameInput.value);

    // console.log(this.serverContentInput);

    this.serverCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });

    // this.serverCreated.emit({
    //   serverName: nameInput.value,
    //   serverContent: contentInput.value
    // });

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

  onAddBlueprint() {

    this.blueprintCreated.emit({
      blueprintName: this.serverNameInput.nativeElement.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });

    // this.blueprintCreated.emit({
    //   blueprintName: nameInput.value,
    //   blueprintContent: contentInput.value
    // });

    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
