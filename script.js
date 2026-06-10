alert("script.js funguje");

const SMO5Src = 'ModelTerenuMensi_SMO5_domy.glb';
const ztm10Src = 'ModelTerenuMensiZTM10.glb';
const COSrc = 'CO.glb';

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

const modelViewer = document.querySelector('model-viewer');
const hotspots = document.querySelectorAll('button.hotspot');

hotspots.forEach(button => {
  button.addEventListener('click', () => {
    const position = button.getAttribute('data-position');

    modelViewer.setAttribute('camera-target', position);
    modelViewer.setAttribute('camera-orbit', '0deg 70deg 1250m');

    if (modelViewer.jumpCameraToGoal) {
      modelViewer.jumpCameraToGoal();
    }
  });
});

