const SMO5Src = 'https://cdn.glitch.global/126c52b3-1b5d-4f58-bad5-9b89eae68738/ModelTerenuMensi.glb?v=1746887425233';
const ztm10Src = 'https://cdn.glitch.global/126c52b3-1b5d-4f58-bad5-9b89eae68738/ModelTerenuMensiZTM10.glb?v=1748164981881';
const COSrc = 'https://cdn.glitch.me/126c52b3-1b5d-4f58-bad5-9b89eae68738/CO.glb?v=1748514845719'

const viewer = document.getElementById('SMO5-viewer');
const btnSMO5 = document.getElementById('btn-SMO5');
const btnCO = document.getElementById('btn-CO');
const btnStructures = document.getElementById('btn-ztm10')

btnSMO5.addEventListener('click', () => {
  viewer.src = SMO5Src;
});

btnCO.addEventListener('click', () => {
  viewer.src = COSrc;
});

btnStructures.addEventListener('click', () => {
  viewer.src = ztm10Src;
});

//Přiblížení na hotspot
const modelViewer = document.querySelector('model-viewer');
const hotspots = document.querySelectorAll('button.hotspot');

hotspots.forEach(button => {
  button.addEventListener('click', () => {
 
    const position = button.getAttribute('data-position');
    modelViewer.setAttribute('camera-target', position);

    
    modelViewer.setAttribute('camera-orbit', '0deg 70deg 1250m');

    // 3) Pro okamžité přiblížení
    modelViewer.jumpCameraToGoal();

    
     modelViewer.animateCameraOrbit('0deg 55deg 1000m');
  });
});
