import { Component, OnInit } from '@angular/core';
var Leap = require('leapjs');
require('leapjs-plugins/main/leap-plugins-0.1.11.js');
require('leapjs-rigged-hand/build/leap.rigged-hand-0.1.7.js');
var LeapTrainer = require('lt/leaptrainer.js');


@Component({
  selector: 'create',
  template: require('./create.component.html')
})
export class Create implements OnInit {

  constructor() {
    var trainerCtrl = new Leap.Controller();
    var trainer = new LeapTrainer.Controller({controller: trainerCtrl});
    console.log(trainerCtrl);
    trainerCtrl.on('connect', () => console.log('connected'));
    // trainerCtrl.connect();
    trainerCtrl.use('riggedHand').connect()
      .on('connect', () => {
        console.log('connected');
      });


      trainerCtrl.on('frame', fugnction(frame) {
        if (frame.pointables.length) {
          console.log(frame);
        }
      });
  }

  ngOnInit() {


  }

}
