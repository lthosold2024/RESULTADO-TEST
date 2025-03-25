ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.253213, -36.887867, -72.851138, -36.627772]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ejercicio1_utm_1 = new ol.format.GeoJSON();
var features_Ejercicio1_utm_1 = format_Ejercicio1_utm_1.readFeatures(json_Ejercicio1_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ejercicio1_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ejercicio1_utm_1.addFeatures(features_Ejercicio1_utm_1);
var lyr_Ejercicio1_utm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ejercicio1_utm_1, 
                style: style_Ejercicio1_utm_1,
                popuplayertitle: 'Ejercicio1_utm',
                interactive: true,
                title: '<img src="styles/legend/Ejercicio1_utm_1.png" /> Ejercicio1_utm'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Ejercicio1_utm_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ejercicio1_utm_1];
lyr_Ejercicio1_utm_1.set('fieldAliases', {'id': 'id', 'T_Pregunt': 'T_Pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'Video': 'Video', });
lyr_Ejercicio1_utm_1.set('fieldImages', {'id': 'TextEdit', 'T_Pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'Video': 'TextEdit', });
lyr_Ejercicio1_utm_1.set('fieldLabels', {'id': 'no label', 'T_Pregunt': 'inline label - visible with data', 'Porc_Co': 'inline label - visible with data', 'Porc_Inc': 'inline label - visible with data', 'Video': 'inline label - visible with data', });
lyr_Ejercicio1_utm_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});