var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SAWAH_1 = new ol.format.GeoJSON();
var features_SAWAH_1 = format_SAWAH_1.readFeatures(json_SAWAH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAH_1.addFeatures(features_SAWAH_1);
var lyr_SAWAH_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAWAH_1, 
                style: style_SAWAH_1,
                interactive: true,
                title: '<img src="styles/legend/SAWAH_1.png" /> SAWAH'
            });
var format_PERMUKIMAN_2 = new ol.format.GeoJSON();
var features_PERMUKIMAN_2 = format_PERMUKIMAN_2.readFeatures(json_PERMUKIMAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUKIMAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMAN_2.addFeatures(features_PERMUKIMAN_2);
var lyr_PERMUKIMAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERMUKIMAN_2, 
                style: style_PERMUKIMAN_2,
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMAN_2.png" /> PERMUKIMAN'
            });
var format_EMPANG_3 = new ol.format.GeoJSON();
var features_EMPANG_3 = format_EMPANG_3.readFeatures(json_EMPANG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMPANG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMPANG_3.addFeatures(features_EMPANG_3);
var lyr_EMPANG_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EMPANG_3, 
                style: style_EMPANG_3,
                interactive: true,
                title: '<img src="styles/legend/EMPANG_3.png" /> EMPANG'
            });
var format_KEBUN_4 = new ol.format.GeoJSON();
var features_KEBUN_4 = format_KEBUN_4.readFeatures(json_KEBUN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEBUN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEBUN_4.addFeatures(features_KEBUN_4);
var lyr_KEBUN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KEBUN_4, 
                style: style_KEBUN_4,
                interactive: true,
                title: '<img src="styles/legend/KEBUN_4.png" /> KEBUN'
            });
var format_PERUMAHAN_5 = new ol.format.GeoJSON();
var features_PERUMAHAN_5 = format_PERUMAHAN_5.readFeatures(json_PERUMAHAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERUMAHAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERUMAHAN_5.addFeatures(features_PERUMAHAN_5);
var lyr_PERUMAHAN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERUMAHAN_5, 
                style: style_PERUMAHAN_5,
                interactive: true,
                title: '<img src="styles/legend/PERUMAHAN_5.png" /> PERUMAHAN'
            });
var format_JALAN_6 = new ol.format.GeoJSON();
var features_JALAN_6 = format_JALAN_6.readFeatures(json_JALAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_6.addFeatures(features_JALAN_6);
var lyr_JALAN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_6, 
                style: style_JALAN_6,
                interactive: true,
                title: '<img src="styles/legend/JALAN_6.png" /> JALAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SAWAH_1.setVisible(true);lyr_PERMUKIMAN_2.setVisible(true);lyr_EMPANG_3.setVisible(true);lyr_KEBUN_4.setVisible(true);lyr_PERUMAHAN_5.setVisible(true);lyr_JALAN_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SAWAH_1,lyr_PERMUKIMAN_2,lyr_EMPANG_3,lyr_KEBUN_4,lyr_PERUMAHAN_5,lyr_JALAN_6];
lyr_SAWAH_1.set('fieldAliases', {'id': 'id', 'sawah': 'sawah', 'Luas': 'Luas', 'luas_ha': 'luas_ha', });
lyr_PERMUKIMAN_2.set('fieldAliases', {'id': 'id', 'P. Lahan': 'P. Lahan', 'Luas': 'Luas', });
lyr_EMPANG_3.set('fieldAliases', {'id': 'id', 'empang': 'empang', 'Luas': 'Luas', 'luas_ha': 'luas_ha', });
lyr_KEBUN_4.set('fieldAliases', {'id': 'id', 'kebun': 'kebun', 'Luas': 'Luas', });
lyr_PERUMAHAN_5.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'PL 2023': 'PL 2023', 'Perubahan': 'Perubahan', });
lyr_JALAN_6.set('fieldAliases', {'id': 'id', 'pl': 'pl', });
lyr_SAWAH_1.set('fieldImages', {'id': 'TextEdit', 'sawah': 'TextEdit', 'Luas': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_PERMUKIMAN_2.set('fieldImages', {'id': 'TextEdit', 'P. Lahan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_EMPANG_3.set('fieldImages', {'id': 'TextEdit', 'empang': 'TextEdit', 'Luas': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_KEBUN_4.set('fieldImages', {'id': 'TextEdit', 'kebun': 'TextEdit', 'Luas': 'TextEdit', });
lyr_PERUMAHAN_5.set('fieldImages', {'id': 'TextEdit', 'PL 2019': 'TextEdit', 'PL 2023': 'TextEdit', 'Perubahan': 'TextEdit', });
lyr_JALAN_6.set('fieldImages', {'id': 'TextEdit', 'pl': 'TextEdit', });
lyr_SAWAH_1.set('fieldLabels', {'id': 'no label', 'sawah': 'inline label', 'Luas': 'no label', 'luas_ha': 'inline label', });
lyr_PERMUKIMAN_2.set('fieldLabels', {'id': 'no label', 'P. Lahan': 'inline label', 'Luas': 'inline label', });
lyr_EMPANG_3.set('fieldLabels', {'id': 'no label', 'empang': 'inline label', 'Luas': 'no label', 'luas_ha': 'inline label', });
lyr_KEBUN_4.set('fieldLabels', {'id': 'no label', 'kebun': 'inline label', 'Luas': 'inline label', });
lyr_PERUMAHAN_5.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'PL 2023': 'no label', 'Perubahan': 'no label', });
lyr_JALAN_6.set('fieldLabels', {'id': 'no label', 'pl': 'inline label', });
lyr_JALAN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});