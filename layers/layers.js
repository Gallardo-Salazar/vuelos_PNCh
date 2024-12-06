var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PropuestaparavolarEjidoCapula_2 = new ol.format.GeoJSON();
var features_PropuestaparavolarEjidoCapula_2 = format_PropuestaparavolarEjidoCapula_2.readFeatures(json_PropuestaparavolarEjidoCapula_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PropuestaparavolarEjidoCapula_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropuestaparavolarEjidoCapula_2.addFeatures(features_PropuestaparavolarEjidoCapula_2);
var lyr_PropuestaparavolarEjidoCapula_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PropuestaparavolarEjidoCapula_2, 
                style: style_PropuestaparavolarEjidoCapula_2,
                popuplayertitle: "Propuesta para volar (Ejido Capula)",
                interactive: true,
                title: '<img src="styles/legend/PropuestaparavolarEjidoCapula_2.png" /> Propuesta para volar (Ejido Capula)'
            });
var format_PropuestaparavolarPseudotsugamenziesii_3 = new ol.format.GeoJSON();
var features_PropuestaparavolarPseudotsugamenziesii_3 = format_PropuestaparavolarPseudotsugamenziesii_3.readFeatures(json_PropuestaparavolarPseudotsugamenziesii_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PropuestaparavolarPseudotsugamenziesii_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropuestaparavolarPseudotsugamenziesii_3.addFeatures(features_PropuestaparavolarPseudotsugamenziesii_3);
var lyr_PropuestaparavolarPseudotsugamenziesii_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PropuestaparavolarPseudotsugamenziesii_3, 
                style: style_PropuestaparavolarPseudotsugamenziesii_3,
                popuplayertitle: "Propuesta para volar (Pseudotsuga menziesii)",
                interactive: true,
                title: '<img src="styles/legend/PropuestaparavolarPseudotsugamenziesii_3.png" /> Propuesta para volar (Pseudotsuga menziesii)'
            });
var format_MuestreosDrVictor_4 = new ol.format.GeoJSON();
var features_MuestreosDrVictor_4 = format_MuestreosDrVictor_4.readFeatures(json_MuestreosDrVictor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MuestreosDrVictor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MuestreosDrVictor_4.addFeatures(features_MuestreosDrVictor_4);
var lyr_MuestreosDrVictor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MuestreosDrVictor_4, 
                style: style_MuestreosDrVictor_4,
                popuplayertitle: "Muestreos Dr. Victor",
                interactive: true,
                title: '<img src="styles/legend/MuestreosDrVictor_4.png" /> Muestreos Dr. Victor'
            });
var format_LmitedelParqueNacionalElChico_5 = new ol.format.GeoJSON();
var features_LmitedelParqueNacionalElChico_5 = format_LmitedelParqueNacionalElChico_5.readFeatures(json_LmitedelParqueNacionalElChico_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitedelParqueNacionalElChico_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitedelParqueNacionalElChico_5.addFeatures(features_LmitedelParqueNacionalElChico_5);
var lyr_LmitedelParqueNacionalElChico_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitedelParqueNacionalElChico_5, 
                style: style_LmitedelParqueNacionalElChico_5,
                popuplayertitle: "Límite del Parque Nacional El Chico",
                interactive: true,
                title: '<img src="styles/legend/LmitedelParqueNacionalElChico_5.png" /> Límite del Parque Nacional El Chico'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_PropuestaparavolarEjidoCapula_2.setVisible(true);lyr_PropuestaparavolarPseudotsugamenziesii_3.setVisible(true);lyr_MuestreosDrVictor_4.setVisible(true);lyr_LmitedelParqueNacionalElChico_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_PropuestaparavolarEjidoCapula_2,lyr_PropuestaparavolarPseudotsugamenziesii_3,lyr_MuestreosDrVictor_4,lyr_LmitedelParqueNacionalElChico_5];
lyr_PropuestaparavolarEjidoCapula_2.set('fieldAliases', {'Drawings': 'Drawings', });
lyr_PropuestaparavolarPseudotsugamenziesii_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MuestreosDrVictor_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LmitedelParqueNacionalElChico_5.set('fieldAliases', {'fid': 'fid', 'ID_ANP': 'ID_ANP', 'NOMBRE': 'NOMBRE', 'CAT_MANEJO': 'CAT_MANEJO', 'ESTADOS': 'ESTADOS', 'MUNICIPIOS': 'MUNICIPIOS', 'REGION': 'REGION', 'SUPERFICIE': 'SUPERFICIE', 'S_TERRES': 'S_TERRES', 'S_MARINA': 'S_MARINA', 'PRIM_DEC': 'PRIM_DEC', 'ULT_DOF': 'ULT_DOF', 'PCM1': 'PCM1', 'SINAP': 'SINAP', 'cov_id': 'cov_id', 'etiqueta': 'etiqueta', 'numpoligon': 'numpoligon', 'cita': 'cita', });
lyr_PropuestaparavolarEjidoCapula_2.set('fieldImages', {'Drawings': '', });
lyr_PropuestaparavolarPseudotsugamenziesii_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_MuestreosDrVictor_4.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_LmitedelParqueNacionalElChico_5.set('fieldImages', {'fid': '', 'ID_ANP': '', 'NOMBRE': '', 'CAT_MANEJO': '', 'ESTADOS': '', 'MUNICIPIOS': '', 'REGION': '', 'SUPERFICIE': '', 'S_TERRES': '', 'S_MARINA': '', 'PRIM_DEC': '', 'ULT_DOF': '', 'PCM1': '', 'SINAP': '', 'cov_id': '', 'etiqueta': '', 'numpoligon': '', 'cita': '', });
lyr_PropuestaparavolarEjidoCapula_2.set('fieldLabels', {'Drawings': 'no label', });
lyr_PropuestaparavolarPseudotsugamenziesii_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MuestreosDrVictor_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LmitedelParqueNacionalElChico_5.set('fieldLabels', {'fid': 'no label', 'ID_ANP': 'no label', 'NOMBRE': 'no label', 'CAT_MANEJO': 'no label', 'ESTADOS': 'no label', 'MUNICIPIOS': 'no label', 'REGION': 'no label', 'SUPERFICIE': 'no label', 'S_TERRES': 'no label', 'S_MARINA': 'no label', 'PRIM_DEC': 'no label', 'ULT_DOF': 'no label', 'PCM1': 'no label', 'SINAP': 'no label', 'cov_id': 'no label', 'etiqueta': 'no label', 'numpoligon': 'no label', 'cita': 'no label', });
lyr_LmitedelParqueNacionalElChico_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});