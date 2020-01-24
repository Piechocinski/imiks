const offerHeadings = document.querySelectorAll(`.trigger`);


function expandBox() {
    const box = this.nextElementSibling;
    const parentSection = this.parentElement.parentElement.parentElement.id;

    if (this.classList.contains(`active`)){
        box.style.display = `none`;
        this.style.marginBottom = 0;
        this.classList.remove(`active`);
    }else{

        offerHeadings.forEach(function (headline) {
            headline.nextElementSibling.style.display = `none`;
            headline.style.marginBottom = 0;
            headline.classList.remove(`active`);
        });

        box.style.display = `inline-block`;
        this.classList.toggle(`active`);
        if (parentSection === `offer-section`){
            this.style.marginBottom = `${box.offsetHeight + 25}px`;
        }
    }
}

offerHeadings.forEach(function (box) {
    box.addEventListener(`click`, expandBox)
});

window.addEventListener("resize", function() {
    offerHeadings.forEach(function (head) {
        const section = head.parentElement.parentElement.parentElement.id;
        if (section === `offer-section`) {
            head.style.marginBottom = `${head.nextElementSibling.offsetHeight}px`;
        }
    });
});

// Slider

function slider() {
    const slides = document.querySelectorAll(`#slider li`);
    const btnNext = document.querySelector(`#slider-next`);
    const btnPrev = document.querySelector(`#slider-prev`);
    let index = 0;

    function nextSlide() {
        if(index === slides.length -1){
            index = 0;
        }else{
            index += 1;
        }
        console.log(index);
    }

    function prevSlide() {
        if(index === 0){
            index = slides.length -1;
        }else{
            index -= 1;
        }
        console.log(index);
    }

    btnNext.addEventListener(`click`, function () {
        nextSlide();
        slides.forEach(function (slide) {
            slide.style.transform = `translateX(${-100 * index}%)`;
        });
    });
    btnPrev.addEventListener(`click`, function () {
        prevSlide();
        slides.forEach(function (slide) {
            slide.style.transform = `translateX(${-100 * index}%)`;
        });
    });
}

slider();