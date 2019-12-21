const data = {
  limit: 60,
  elements: [
    {
     name: 'router',
     areas: ['routers'],
    },
    {
     name: 'router_cisco',
     areas: ['routers'],
    },
    {
     name: 'server',
     areas: ['server'],
    }
  ],

  areas: [
    {
      name: 'routers',
      x: 395,
      y: 220,
      width: 175,
      height: 65
    },

    {
      name: 'server',
      x: 50,
      y: 295,
      width: 180,
      height: 240
    }
  ]
}

$( function() {

  data.areas.forEach((item) => {
    $("#background" ).append(`<div id="areas-${item.name}" style="position: absolute; top: ${item.y}px; left: ${item.x}px; width: ${item.width}px; height: ${item.height}px; background: grey">&nbsp;</div>`);
  })

  function isInsideOfArea(areaName, elementName){
    let area = $('#areas-' + areaName);
    let element = $('#elements-' + elementName);
    let area_x = area.offset().left;
    let area_y = area.offset().top;
    let area_height = area.outerHeight(true);
    let area_width = area.outerWidth(true);
    let area_x_end = area_x + area_width;
    let area_y_end = area_y + area_height;
    let element_x = element.offset().left;
    let element_y = element.offset().top;
    let element_height = element.outerHeight(true);
    let element_width = element.outerWidth(true);
    let element_x_end = element_x + element_width;
    let element_y_end = element_y + element_height;

    if (area_x > element_x || area_x_end < element_x_end || area_y > element_y || area_y_end < element_y_end) return false;
    return true
  }

  data.elements.forEach((element) => {
    $( "#elements-" + element.name ).draggable({
      stop: (event, ui) => {
        console.log(isInsideOfArea(element.areas[0], element.name))
      }
    });
  })
});
