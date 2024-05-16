/* global Editor */


// (1) create new editor instance

const diagram = new Editor({
  container: document.querySelector('#container')
});


// (2) draw diagram elements (i.e. import)

const canvas = diagram.get('canvas');
const elementFactory = diagram.get('elementFactory');

// add root
var root = elementFactory.createRoot();

canvas.setRootElement(root);

// add shapes
var shape1 = elementFactory.createShape({
  x: 150,
  y: 100,
  width: 100,
  height: 80
});

canvas.addShape(shape1, root);

var shape2 = elementFactory.createShape({
  x: 150,
  y: 220,
  width: 100,
  height: 80
});

canvas.addShape(shape2, root);

// connect shape 1 to shape 2
var connection1 = elementFactory.createConnection({
  waypoints: [
    { x: 200, y: 180 },
    { x: 200, y: 220 }
  ],
  source: shape1,
  target: shape2
});
canvas.addConnection(connection1, root);


var shape3 = elementFactory.createShape({
  x: 450,
  y: 80,
  width: 100,
  height: 150
});

canvas.addShape(shape3, root);

var shape4 = elementFactory.createShape({
  x: 425,
  y: 50,
  width: 300,
  height: 250,
  isFrame: true
});

canvas.addShape(shape4, root);

// connect shape 1 to shape 3
var connection2 = elementFactory.createConnection({
  waypoints: [
    { x: 250, y: 120 },
    { x: 450, y: 120 }
  ],
  source: shape1,
  target: shape3
});
canvas.addConnection(connection2, root);

var shape5 = elementFactory.createShape({
  x: 475,
  y: 150,
  width: 50,
  height: 50
});

canvas.addShape(shape5, shape4);

// (3) interact with the diagram via API

const selection = diagram.get('selection');

selection.select(shape3);