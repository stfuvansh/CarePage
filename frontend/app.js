const patientNameInput = document.getElementById('patientNameInput');
const dateInput = document.getElementById('dateInput');
const searchBtn = document.getElementById('searchBtn');
const imageUpload = document.getElementById('imageUpload');
const recentPrescriptionsSection = document.getElementById('recentPrescriptionsSection');
const recentPrescriptionsContainer = document.getElementById('recentPrescriptionsContainer');
const searchResultsSection = document.getElementById('searchResultsSection');
const searchResultsContainer = document.getElementById('searchResultsContainer');

let selectedImage = null;
let prescriptionData = null;

imageUpload.addEventListener('change', function () {
    const imageFile = imageUpload.files;
    if (imageFile.length > 0) {
        selectedImage = imageFile[0];
        if (!selectedImage.type.startsWith('image/')) {
            return;
        }
        const prescriptionData = {
            patientName: patientNameInput.value,
            prescriptionDate: dateInput.value,
            image: selectedImage
        };
        console.log(prescriptionData);
    }
});


