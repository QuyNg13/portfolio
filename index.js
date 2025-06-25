fetch('components/camera/camera.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('cameraphoto').innerHTML += html;

        const captureButton = document.getElementById('captureButton');
        const shutterSound = document.getElementById('shutter-sound');
        const lens = document.querySelector('.lens-glass');
        const capturedPhoto = document.querySelector('.captured-polaroid');
        const photo = document.getElementById('photo');

        if (lens) {
            lens.classList.remove('rotate');
            void lens.offsetWidth;
            lens.classList.add('rotate');
        }

        if (shutterSound) {
            shutterSound.currentTime = 0;
            shutterSound.play();
        }

        if (capturedPhoto) {
            capturedPhoto.classList.remove('show');
            void capturedPhoto.offsetWidth;
            setTimeout(() => {
                capturedPhoto.classList.add('show');
            }, 800);
        }

        if (photo) {
            photo.classList.remove('show');
            void photo.offsetWidth;
            setTimeout(() => {
                photo.classList.add('show');
            }, 800);
        }

        if (captureButton) {
            captureButton.addEventListener('click', () => {
                lens.classList.remove('rotate');
                void lens.offsetWidth;
                lens.classList.add('rotate');

                shutterSound.currentTime = 0;
                shutterSound.play();

                if (capturedPhoto) {
                    capturedPhoto.classList.remove('show');
                    void capturedPhoto.offsetWidth;

                    setTimeout(() => {
                        capturedPhoto.classList.add('show');
                    }, 1000);
                }

                if (photo) {
                    photo.classList.remove('show');
                    void photo.offsetWidth;
                    setTimeout(() => {
                        photo.classList.add('show');
                    });
                }
            });
        }
    })
    .catch(error => console.error('Fout bij het laden van camera:', error));

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".mask-text");
  const text = el.textContent;
  el.textContent = "";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.setProperty("--char-index", i);
    el.appendChild(span);
  });
});