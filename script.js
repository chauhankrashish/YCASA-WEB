let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.slide').length;

        function showSlide(index) {
            const slides = document.querySelector('.slides');
            if (index < 0) {
                currentIndex = totalSlides - 3;
            } else if (index > totalSlides - 3) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            const translateValue = -currentIndex * (100 / 3);
            slides.style.transform = `translateX(${translateValue}%)`;
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

// ************* slide **************

let currentIndex2 = 0;
        const totalSlides2 = document.querySelectorAll('.slide2').length;

        function showSlide3(index) {
            const slides2 = document.querySelector('.slides2');
            if (index < 0) {
                currentIndex2 = totalSlides2 - 3;
            } else if (index > totalSlides2 - 3) {
                currentIndex2 = 0;
            } else {
                currentIndex2 = index;
            }

            const translateValue = -currentIndex2 * (100 / 3);
            slides2.style.transform = `translateX(${translateValue}%)`;
        }

        function prevSlide2() {
            showSlide3(currentIndex2 - 1);
        }

        function nextSlide2() {
            showSlide3(currentIndex2 + 1);
        }