var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NAVEGACION_1 = new ol.format.GeoJSON();
var features_NAVEGACION_1 = format_NAVEGACION_1.readFeatures(json_NAVEGACION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVEGACION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVEGACION_1.addFeatures(features_NAVEGACION_1);
var lyr_NAVEGACION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAVEGACION_1, 
                style: style_NAVEGACION_1,
                popuplayertitle: 'NAVEGACION',
                interactive: true,
                title: '<img src="styles/legend/NAVEGACION_1.png" /> NAVEGACION'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NAVEGACION_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NAVEGACION_1];
lyr_NAVEGACION_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_NAVEGACION_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_NAVEGACION_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'inline label - always visible', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_NAVEGACION_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});