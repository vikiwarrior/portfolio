
import { Component, OnInit } from '@angular/core';



declare var createTree: any;
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new createTree();
  }

}
