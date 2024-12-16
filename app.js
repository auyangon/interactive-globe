
var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProviderViewModel: Cesium.createDefaultImageryProviderViewModel(),
    terrainProviderViewModel: Cesium.createDefaultTerrainProviderViewModel(),
    shouldAnimate: true
});

// Add a pin for a university
viewer.entities.add({
    name: "California State University, Fresno",
    position: Cesium.Cartesian3.fromDegrees(-119.7674, 36.8085),
    point: { pixelSize: 10, color: Cesium.Color.RED }
});

// Set camera to show the globe
viewer.zoomTo(viewer.entities);
