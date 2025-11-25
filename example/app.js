import ti_wifiaware  from 'ti.wifiaware';

const win = Ti.UI.createWindow({layout:"vertical"});
const label = Ti.UI.createLabel();
const btn = Ti.UI.createButton({
  title:"send",
})

const btn2 = Ti.UI.createButton({
  title:"subscribe",
})

const tf = Ti.UI.createTextField({
  width: 300,
  value:"Titanium SDK: Wi-Fi Aware"
})
win.add(label);
win.add(btn2);
win.add(tf);
win.add(btn);
win.open();

label.text = "Feature available:" + ti_wifiaware.hasFeature;

if (ti_wifiaware.hasFeature) {
  ti_wifiaware.isAvailable();
  ti_wifiaware.publish("com.miga.wifiaware");
  ti_wifiaware.subscribe("");

}

ti_wifiaware.addEventListener("available", function(e){
  console.log("feature: " + e.available);
})

ti_wifiaware.addEventListener("message", function(e){
  console.log("text: " + e.text);
  label.text = e.text;
})

ti_wifiaware.addEventListener("subscribed", function(e){
  console.log("subscribed")
})
ti_wifiaware.addEventListener("discovered", function(e){
  console.log("discovered")
})
ti_wifiaware.addEventListener("published", function(e){
  console.log("published")
})



btn.addEventListener("click", function(){
  ti_wifiaware.send(tf.value)
})
btn2.addEventListener("click", function(){
  ti_wifiaware.subscribe("com.miga.wifiaware")
})
