fetch('camera.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('cameraphoto').innerHTML += html;

        // Move DOM queries and event listeners here, after camera.html is loaded
        const captureButton = document.getElementById('captureButton');
        const shutterSound = document.getElementById("shutter-sound");
        const lens = document.querySelector('.lens-glass');
        const capturedPhoto = document.querySelector('.captured-polaroid');
        const photo = document.getElementById('photo');

        if (captureButton) {
            captureButton.addEventListener('click', () => {
                // Reset lens rotatie-animatie
                lens.classList.remove("rotate");
                void lens.offsetWidth; // Force reflow om animatie te herstarten
                lens.classList.add("rotate");

                // Speel sluitergeluid af
                shutterSound.play();

                // Start polaroid animatie (als van toepassing)
                if (capturedPhoto) {
                    capturedPhoto.classList.remove("show");
                    void capturedPhoto.offsetWidth;
                    capturedPhoto.classList.add("show");
                }

                // Start 'foto komt uit camera'-animatie
                if (photo) {
                    photo.classList.remove("show");
                    void photo.offsetWidth;
                    photo.classList.add("show");
                }
            });
        }
    })
    .catch(error => console.error('Fout bij het laden van camera:', error));