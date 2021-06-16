import { debounce } from "../procedures/debounce.js";

const sliderImages = document.querySelectorAll(".slide-in");

export const checkSlide = debounce(() => {
  sliderImages.forEach((sliderImage) => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imgBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isInView = window.scrollY < imgBottom;

    if (isHalfShown && isInView) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
});
