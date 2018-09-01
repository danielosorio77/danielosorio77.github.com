var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_uv_viastematico_0 = new ol.format.GeoJSON();
var features_uv_viastematico_0 = format_uv_viastematico_0.readFeatures(json_uv_viastematico_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_viastematico_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_viastematico_0.addFeatures(features_uv_viastematico_0);var lyr_uv_viastematico_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_viastematico_0, 
                style: style_uv_viastematico_0,
                title: '<img src="styles/legend/uv_viastematico_0.png" /> uv_viastematico'
            });var format_uv_sitiosinteres_1 = new ol.format.GeoJSON();
var features_uv_sitiosinteres_1 = format_uv_sitiosinteres_1.readFeatures(json_uv_sitiosinteres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_sitiosinteres_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_sitiosinteres_1.addFeatures(features_uv_sitiosinteres_1);var lyr_uv_sitiosinteres_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_sitiosinteres_1, 
                style: style_uv_sitiosinteres_1,
                title: '<img src="styles/legend/uv_sitiosinteres_1.png" /> uv_sitiosinteres'
            });var format_uv_redpeatonal_2 = new ol.format.GeoJSON();
var features_uv_redpeatonal_2 = format_uv_redpeatonal_2.readFeatures(json_uv_redpeatonal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_redpeatonal_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_redpeatonal_2.addFeatures(features_uv_redpeatonal_2);var lyr_uv_redpeatonal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_redpeatonal_2, 
                style: style_uv_redpeatonal_2,
                title: '<img src="styles/legend/uv_redpeatonal_2.png" /> uv_redpeatonal'
            });var format_uv_porterias_3 = new ol.format.GeoJSON();
var features_uv_porterias_3 = format_uv_porterias_3.readFeatures(json_uv_porterias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_porterias_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_porterias_3.addFeatures(features_uv_porterias_3);var lyr_uv_porterias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_porterias_3, 
                style: style_uv_porterias_3,
                title: '<img src="styles/legend/uv_porterias_3.png" /> uv_porterias'
            });var format_uv_piscina_4 = new ol.format.GeoJSON();
var features_uv_piscina_4 = format_uv_piscina_4.readFeatures(json_uv_piscina_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_piscina_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_piscina_4.addFeatures(features_uv_piscina_4);var lyr_uv_piscina_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_piscina_4, 
                style: style_uv_piscina_4,
                title: '<img src="styles/legend/uv_piscina_4.png" /> uv_piscina'
            });var format_uv_edificaciones_5 = new ol.format.GeoJSON();
var features_uv_edificaciones_5 = format_uv_edificaciones_5.readFeatures(json_uv_edificaciones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_edificaciones_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_edificaciones_5.addFeatures(features_uv_edificaciones_5);var lyr_uv_edificaciones_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_edificaciones_5, 
                style: style_uv_edificaciones_5,
                title: '<img src="styles/legend/uv_edificaciones_5.png" /> uv_edificaciones'
            });var format_uv_cuerposagua_6 = new ol.format.GeoJSON();
var features_uv_cuerposagua_6 = format_uv_cuerposagua_6.readFeatures(json_uv_cuerposagua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_cuerposagua_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_cuerposagua_6.addFeatures(features_uv_cuerposagua_6);var lyr_uv_cuerposagua_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_cuerposagua_6, 
                style: style_uv_cuerposagua_6,
                title: '<img src="styles/legend/uv_cuerposagua_6.png" /> uv_cuerposagua'
            });var format_uv_canchastematico_7 = new ol.format.GeoJSON();
var features_uv_canchastematico_7 = format_uv_canchastematico_7.readFeatures(json_uv_canchastematico_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_canchastematico_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_canchastematico_7.addFeatures(features_uv_canchastematico_7);var lyr_uv_canchastematico_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_canchastematico_7, 
                style: style_uv_canchastematico_7,
                title: '<img src="styles/legend/uv_canchastematico_7.png" /> uv_canchastematico'
            });var format_uv_canchasdelimitacionpoly_8 = new ol.format.GeoJSON();
var features_uv_canchasdelimitacionpoly_8 = format_uv_canchasdelimitacionpoly_8.readFeatures(json_uv_canchasdelimitacionpoly_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_canchasdelimitacionpoly_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_canchasdelimitacionpoly_8.addFeatures(features_uv_canchasdelimitacionpoly_8);var lyr_uv_canchasdelimitacionpoly_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_canchasdelimitacionpoly_8, 
                style: style_uv_canchasdelimitacionpoly_8,
                title: '<img src="styles/legend/uv_canchasdelimitacionpoly_8.png" /> uv_canchasdelimitacionpoly'
            });var format_uv_canchasdelimitacion_9 = new ol.format.GeoJSON();
var features_uv_canchasdelimitacion_9 = format_uv_canchasdelimitacion_9.readFeatures(json_uv_canchasdelimitacion_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uv_canchasdelimitacion_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uv_canchasdelimitacion_9.addFeatures(features_uv_canchasdelimitacion_9);var lyr_uv_canchasdelimitacion_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uv_canchasdelimitacion_9, 
                style: style_uv_canchasdelimitacion_9,
                title: '<img src="styles/legend/uv_canchasdelimitacion_9.png" /> uv_canchasdelimitacion'
            });

lyr_uv_viastematico_0.setVisible(true);lyr_uv_sitiosinteres_1.setVisible(true);lyr_uv_redpeatonal_2.setVisible(true);lyr_uv_porterias_3.setVisible(true);lyr_uv_piscina_4.setVisible(true);lyr_uv_edificaciones_5.setVisible(true);lyr_uv_cuerposagua_6.setVisible(true);lyr_uv_canchastematico_7.setVisible(true);lyr_uv_canchasdelimitacionpoly_8.setVisible(true);lyr_uv_canchasdelimitacion_9.setVisible(true);
var layersList = [baseLayer,lyr_uv_viastematico_0,lyr_uv_sitiosinteres_1,lyr_uv_redpeatonal_2,lyr_uv_porterias_3,lyr_uv_piscina_4,lyr_uv_edificaciones_5,lyr_uv_cuerposagua_6,lyr_uv_canchastematico_7,lyr_uv_canchasdelimitacionpoly_8,lyr_uv_canchasdelimitacion_9];
lyr_uv_viastematico_0.set('fieldAliases', {'__gid': '__gid', 'id': 'id', });
lyr_uv_sitiosinteres_1.set('fieldAliases', {'nombre': 'nombre', 'imagen': 'imagen', });
lyr_uv_redpeatonal_2.set('fieldAliases', {'longitud': 'longitud', });
lyr_uv_porterias_3.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'nombre': 'nombre', 'busqueda': 'busqueda', 'nume_edif': 'nume_edif', 'img': 'img', });
lyr_uv_piscina_4.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'busqueda': 'busqueda', 'nombre': 'nombre', 'nume_edif': 'nume_edif', 'img': 'img', });
lyr_uv_edificaciones_5.set('fieldAliases', {'__gid': '__gid', 'id': 'id', 'nomencla': 'nomencla', 'id_edif': 'id_edif', 'etiqueta': 'etiqueta', 'busqueda': 'busqueda', 'facultad': 'facultad', 'nume_edif': 'nume_edif', 'tipo': 'tipo', 'nombre': 'nombre', 'img': 'img', });
lyr_uv_cuerposagua_6.set('fieldAliases', {'id': 'id', 'busqueda': 'busqueda', 'nombre': 'nombre', 'nume_edif': 'nume_edif', 'tipo': 'tipo', 'img': 'img', });
lyr_uv_canchastematico_7.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'busqueda': 'busqueda', 'nombre': 'nombre', 'nume_edif': 'nume_edif', 'img': 'img', });
lyr_uv_canchasdelimitacionpoly_8.set('fieldAliases', {'objectid': 'objectid', 'nombre': 'nombre', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_uv_canchasdelimitacion_9.set('fieldAliases', {'objectid': 'objectid', 'nombre': 'nombre', 'shape_leng': 'shape_leng', });
lyr_uv_viastematico_0.set('fieldImages', {'__gid': 'TextEdit', 'id': 'TextEdit', });
lyr_uv_sitiosinteres_1.set('fieldImages', {'nombre': 'TextEdit', 'imagen': 'TextEdit', });
lyr_uv_redpeatonal_2.set('fieldImages', {'longitud': 'TextEdit', });
lyr_uv_porterias_3.set('fieldImages', {'id': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'busqueda': 'TextEdit', 'nume_edif': 'TextEdit', 'img': 'TextEdit', });
lyr_uv_piscina_4.set('fieldImages', {'id': 'TextEdit', 'tipo': 'TextEdit', 'busqueda': 'TextEdit', 'nombre': 'TextEdit', 'nume_edif': 'TextEdit', 'img': 'TextEdit', });
lyr_uv_edificaciones_5.set('fieldImages', {'__gid': 'TextEdit', 'id': 'TextEdit', 'nomencla': 'TextEdit', 'id_edif': 'TextEdit', 'etiqueta': 'TextEdit', 'busqueda': 'TextEdit', 'facultad': 'TextEdit', 'nume_edif': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'img': 'TextEdit', });
lyr_uv_cuerposagua_6.set('fieldImages', {'id': 'TextEdit', 'busqueda': 'TextEdit', 'nombre': 'TextEdit', 'nume_edif': 'TextEdit', 'tipo': 'TextEdit', 'img': 'TextEdit', });
lyr_uv_canchastematico_7.set('fieldImages', {'id': 'TextEdit', 'tipo': 'TextEdit', 'busqueda': 'TextEdit', 'nombre': 'TextEdit', 'nume_edif': 'TextEdit', 'img': 'TextEdit', });
lyr_uv_canchasdelimitacionpoly_8.set('fieldImages', {'objectid': 'TextEdit', 'nombre': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_uv_canchasdelimitacion_9.set('fieldImages', {'objectid': 'TextEdit', 'nombre': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_uv_viastematico_0.set('fieldLabels', {'__gid': 'no label', 'id': 'no label', });
lyr_uv_sitiosinteres_1.set('fieldLabels', {'nombre': 'no label', 'imagen': 'no label', });
lyr_uv_redpeatonal_2.set('fieldLabels', {'longitud': 'no label', });
lyr_uv_porterias_3.set('fieldLabels', {'id': 'no label', 'tipo': 'no label', 'nombre': 'no label', 'busqueda': 'no label', 'nume_edif': 'no label', 'img': 'no label', });
lyr_uv_piscina_4.set('fieldLabels', {'id': 'no label', 'tipo': 'no label', 'busqueda': 'no label', 'nombre': 'no label', 'nume_edif': 'no label', 'img': 'no label', });
lyr_uv_edificaciones_5.set('fieldLabels', {'__gid': 'no label', 'id': 'no label', 'nomencla': 'no label', 'id_edif': 'no label', 'etiqueta': 'no label', 'busqueda': 'no label', 'facultad': 'no label', 'nume_edif': 'no label', 'tipo': 'no label', 'nombre': 'no label', 'img': 'no label', });
lyr_uv_cuerposagua_6.set('fieldLabels', {'id': 'no label', 'busqueda': 'no label', 'nombre': 'no label', 'nume_edif': 'no label', 'tipo': 'no label', 'img': 'no label', });
lyr_uv_canchastematico_7.set('fieldLabels', {'id': 'no label', 'tipo': 'no label', 'busqueda': 'no label', 'nombre': 'no label', 'nume_edif': 'no label', 'img': 'no label', });
lyr_uv_canchasdelimitacionpoly_8.set('fieldLabels', {'objectid': 'no label', 'nombre': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_uv_canchasdelimitacion_9.set('fieldLabels', {'objectid': 'no label', 'nombre': 'no label', 'shape_leng': 'no label', });
lyr_uv_canchasdelimitacion_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});