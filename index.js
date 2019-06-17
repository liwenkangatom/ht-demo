import ht from 'ht';
import 'bootstrap';
import butterflySource from "./src/butfly.jpg";
const dataModel = new ht.DataModel();
const graphView = new ht.graph.GraphView(dataModel);

const view = graphView.getView();
view.className = 'main';
document.body.appendChild(view);
window.addEventListener('resize', function (e) {
    graphView.invalidate();
}, false);                         
ht.Default.setImage('butter', butterflySource);
let butterfly = new ht.Node();
butterfly.setName('大蝴蝶');
butterfly.setImage('butter');
butterfly.setSize(80, 43);
butterfly.setPosition(100, 70);
dataModel.add(butterfly);