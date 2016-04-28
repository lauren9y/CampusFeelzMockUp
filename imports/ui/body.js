import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
 
import { Tasks } from '../api/tasks.js';

import './task.js'; 
import './body.html';

// Template.pichart.onRendered(function () {
//   var svg = d3.select("body")
//   .append("svg")
//   .append("g")

// svg.append("g")
//   .attr("class", "slices");
// svg.append("g")
//   .attr("class", "labels");
// svg.append("g")
//   .attr("class", "lines");

// var width = 960,
//     height = 450,
//   radius = Math.min(width, height) / 2;

// var pie = d3.layout.pie()
//   .sort(null)
//   .value(function(d) {
//     return d.value;
//   });

// var arc = d3.svg.arc()
//   .outerRadius(radius * 0.8)
//   .innerRadius(radius * 0.4);

// var outerArc = d3.svg.arc()
//   .innerRadius(radius * 0.9)
//   .outerRadius(radius * 0.9);

// svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// var key = function(d){ return d.data.label; };

// var color = d3.scale.ordinal()
//   .domain(getLabels())
//   .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

// function randomData (){
//   var labels = color.domain();
//   return labels.map(function(label){
//     return { label: label, value: Math.random() }
//   });
// }

// change(randomData());

// d3.select(".randomize")
//   .on("click", function(){
//     change(randomData());
//   });


// function change(data) {

//   /* ------- PIE SLICES -------*/
//   var slice = svg.select(".slices").selectAll("path.slice")
//     .data(pie(data), key);

//   slice.enter()
//     .insert("path")
//     .style("fill", function(d) { return color(d.data.label); })
//     .attr("class", "slice");

//   slice   
//     .transition().duration(1000)
//     .attrTween("d", function(d) {
//       this._current = this._current || d;
//       var interpolate = d3.interpolate(this._current, d);
//       this._current = interpolate(0);
//       return function(t) {
//         return arc(interpolate(t));
//       };
//     })

//   slice.exit()
//     .remove();

//   /* ------- TEXT LABELS -------*/

//   var text = svg.select(".labels").selectAll("text")
//     .data(pie(data), key);

//   text.enter()
//     .append("text")
//     .attr("dy", ".35em")
//     .text(function(d) {
//       return d.data.label;
//     });
  
//   function midAngle(d){
//     return d.startAngle + (d.endAngle - d.startAngle)/2;
//   }

//   text.transition().duration(1000)
//     .attrTween("transform", function(d) {
//       this._current = this._current || d;
//       var interpolate = d3.interpolate(this._current, d);
//       this._current = interpolate(0);
//       return function(t) {
//         var d2 = interpolate(t);
//         var pos = outerArc.centroid(d2);
//         pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
//         return "translate("+ pos +")";
//       };
//     })
//     .styleTween("text-anchor", function(d){
//       this._current = this._current || d;
//       var interpolate = d3.interpolate(this._current, d);
//       this._current = interpolate(0);
//       return function(t) {
//         var d2 = interpolate(t);
//         return midAngle(d2) < Math.PI ? "start":"end";
//       };
//     });

//   text.exit()
//     .remove();

//   /* ------- SLICE TO TEXT POLYLINES -------*/

//   var polyline = svg.select(".lines").selectAll("polyline")
//     .data(pie(data), key);
  
//   polyline.enter()
//     .append("polyline");

//   polyline.transition().duration(1000)
//     .attrTween("points", function(d){
//       this._current = this._current || d;
//       var interpolate = d3.interpolate(this._current, d);
//       this._current = interpolate(0);
//       return function(t) {
//         var d2 = interpolate(t);
//         var pos = outerArc.centroid(d2);
//         pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
//         return [arc.centroid(d2), outerArc.centroid(d2), pos];
//       };      
//     });
  
//   polyline.exit()
//     .remove();
// };
// })



$(document)
    .ready(function() {
      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;
      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;


    })

  ;
 
// Template.body.helpers({
//   tasks() {
//   	const instance = Template.instance();
//     if (instance.state.get('hideCompleted')) {
//       // If hide completed is checked, filter tasks
//       return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
//     }
//     // Otherwise, return all of the tasks
//     return Tasks.find({}, { sort: { createdAt: -1 } });
//   },
//    incompleteCount() {
//     return Tasks.find({ checked: { $ne: true } }).count();
//   },
// });

// Template.body.events({
//   'submit .new-task'(event) {
//     // Prevent default browser form submit
//     event.preventDefault();
 
//     // Get value from form element
//     const target = event.target;
//     const text = target.text.value;
 
//     // Insert a task into the collection
//     Tasks.insert({
//       text,
//       createdAt: new Date(), // current time
//       owner: Meteor.userId(),
//       username: Meteor.user().username,
//     });
 
//     // Clear form
//     target.text.value = '';
//   },
//     'change .hide-completed input'(event, instance) {
//     instance.state.set('hideCompleted', event.target.checked);
//   },

// });