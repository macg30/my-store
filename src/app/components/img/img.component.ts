import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  //Input with own event
  img: string = '';

  @Input('img') 
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img)
    //code
  }
  //Input detected with onChanges
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/defaultImages.png';
  counter = 0;
  counterFn: number | undefined;


  constructor() {
    // before render
    // NO async --once time
    console.log('Contructor', `imgValue =>`, this.img);
   }
  
  ngOnChanges(changes: SimpleChanges): void {
    //before render
    // changes inputs -- n times
    console.log('ngOnChanges', `imgValue =>`, this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async - fetch, call APIs -- once time
    console.log('ngOnInit', `imgValue =>`, this.img);
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    //Normally use for directives
    console.log('ngAfterViewInit', `imgValue =>`, this.img);
  }

  ngOnDestroy(): void {
    //delete component
    console.log('ngOnDestroy', `imgValue =>`, this.img);
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('loaded hijo');
    this.loaded.emit(this.img);
  }

}
