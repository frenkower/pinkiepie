$(document).ready(function(){

    var myCircle = Circles.create({
      id:                  'circles-1',
      radius:              70,

      value:               25,

      maxValue:            100,
      width:               15,
      text:                function(value){return value + '%';},
      colors:              ['#d1d1d1', '#eb0150'],
      duration:            500,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });

    var myCircle2 = Circles.create({
      id:                  'circles-2',
      radius:              70,

      value:               50,

      maxValue:            100,
      width:               15,
      text:                function(value){return value + '%';},
      colors:              ['#d1d1d1', '#eb0150'],
      duration:            500,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });


    var myCircle3 = Circles.create({
      id:                  'circles-3',
      radius:              70,

      value:               75,
      maxValue:            100,

      width:               15,
      text:                function(value){return value + '%';},
      colors:              ['#d1d1d1', '#eb0150'],
      duration:            500,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });


});



/*

<div class="circle" id="circles-1"></div>
<div class="circle" id="circles-2"></div>
<div class="circle" id="circles-3"></div>




*/