import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import  ol  from 'openlayers';
import * as $ from 'jquery';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

	private olView;
	private layerOriginal;
	private layerBing;
	private layerGeoserver;

	constructor(public navCtrl: NavController) {

	}
	ionViewDidLoad(){

	// ==== Template design ====
	this.layerOriginal = new ol.layer.Tile({
		source: new ol.source.OSM()
	});
	this.layerBing = new ol.layer.Tile({
		source: new ol.source.BingMaps({
			key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5',
			//imagerySet: 'Road' 
			//imagerySet: 'Aerial'
			//imagerySet: 'collinsBart'
			//imagerySet: 'ordnanceSurvey'
			imagerySet: 'AerialWithLabels'
		})
	});
	this.layerGeoserver = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			//projection: 'EPSG:4326',
			projection: 'EPSG:3857',
			url: 'https://ahocevar.com/geoserver/wms',
			params: {'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'}
			
			//params: {'LAYERS': 'topp:states', 'TILED': true}
            //serverType: 'geoserver'
		})
	});

	// ==== Multiple layers ====
	/*
	var radius = 75;
	this.layerBing.on('precompose', function(event) {
		var ctx = event.context;
		var pixelRatio = event.frameState.pixelRatio;
		ctx.save();
		ctx.beginPath();
		if (mousePosition) {
			// only show a circle around the mouse
			ctx.arc(mousePosition[0] * pixelRatio, mousePosition[1] * pixelRatio, radius * pixelRatio, 0, 2 * Math.PI);
			ctx.lineWidth = 5 * pixelRatio;
			ctx.strokeStyle = 'rgba(0,0,0,0.5)';
			ctx.stroke();
		}
		ctx.clip();
	});
	this.layerBing.on('postcompose', function(event) { // after rendering the layer, restore the canvas context
		var ctx = event.context;
		ctx.restore();
	});
	// get the pixel position with every move
	var mousePosition = null;
	var container = document.getElementById('map2');
	container.addEventListener('mousemove', function(event) {
		mousePosition = map.getEventPixel(event);
		map.render();
	});
	container.addEventListener('mouseout', function() {
		mousePosition = null;
		map.render();
	});
	*/
	
	
	
	this.olView = new ol.View({
		center: [0, 0],
		zoom: 2
	});
	var map = new ol.Map({
		// Full screen
		//controls : ol.control.defaults().extend([ new ol.control.FullScreen() ]),
		//interactions : ol.interaction.defaults({doubleClickZoom :false}),
		//layers: [this.layerBing, this.layerGeoserver],
		//layers: [this.layerBing, this.layerOriginal],
		layers: [this.layerOriginal],
		target: 'map2',
		view: this.olView
	});


	var pos = ol.proj.fromLonLat([16.3725, 48.208889]);

	// Vienna marker
	var marker = new ol.Overlay({
		position: pos,
		positioning: 'center-center',
		element: document.getElementById('marker2'),
		stopEvent: false
	});
	map.addOverlay(marker);

	// Vienna label
	var vienna = new ol.Overlay({
		position: pos,
		element: document.getElementById('vienna2')
	});
	map.addOverlay(vienna);






	pos = ol.proj.fromLonLat([26.3725, 38.208889]);

	// Vienna marker
	var marker2 = new ol.Overlay({
		position: pos,
		positioning: 'center-center',
		element: document.getElementById('marker'),
		stopEvent: false
	});
	map.addOverlay(marker2);

	// Vienna label
	var vienna2 = new ol.Overlay({
		position: pos,
		element: document.getElementById('vienna')
	});
	map.addOverlay(vienna2);





	// Popup showing the position the user clicked
	var popup = new ol.Overlay({
		element: document.getElementById('popup')
	});
	map.addOverlay(popup);
	/*
	map.on('click', function(evt) {
	var element = popup.getElement();
	var coordinate = evt.coordinate;
	var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
		coordinate, 'EPSG:3857', 'EPSG:4326'));

	$(element).popover('destroy');
	popup.setPosition(coordinate);
	// the keys are quoted to prevent renaming in ADVANCED mode.
	$(element).popover({
	  'placement': 'top',
	  'animation': false,
	  'html': true,
	  'content': '<p>The location you clicked was:</p><code>' + hdms + '</code>'
	});
	$(element).popover('show');
	});
	*/



	//layerBing.setVisible();

	}

	click(){
		this.olView.setZoom(10);
		this.olView.setCenter(ol.proj.fromLonLat([26.3725, 38.208889]));
		this.layerOriginal.setVisible(false);
		this.layerBing.setVisible(true);
		  /*
		this.layerBing.setVisible(false);
		this.layerBing.setVisible(true);
		this.layerOriginal.setVisible(false);
		this.layerOriginal.setVisible(true);
		  */
	  
	}
}
