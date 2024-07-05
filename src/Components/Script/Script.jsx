import { useEffect } from 'react';

const Script = () => {
  useEffect(() => {
    const menu = document.querySelector('.header .menu');

    const toggleMenu = () => {
      menu.classList.toggle('active');
    };

    document.querySelector('#menu-btn').onclick = toggleMenu;

    const handleScroll = () => {
      menu.classList.remove('active');
    };

    window.onscroll = handleScroll;

    const handleInputNumber = (inputNumber) => {
      if (inputNumber.value.length > inputNumber.maxLength) {
        inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
      }
    };

    document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
      inputNumber.oninput = () => {
        handleInputNumber(inputNumber);
      };
    });

    const handleImageClick = (images) => {
      const src = images.getAttribute('src');
      document.querySelector(
        '.view-property .details .thumb .big-image img'
      ).src = src;
    };

    document
      .querySelectorAll('.view-property .details .thumb .small-images img')
      .forEach((images) => {
        images.onclick = () => {
          handleImageClick(images);
        };
      });

    // const handleHeadingClick = (headings) => {
    //   headings.parentElement.classList.toggle('active');
    // };

    // document
    //   .querySelectorAll('.faq .box-container .box h3')
    //   .forEach((headings) => {
    //     headings.onclick = () => {
    //       handleHeadingClick(headings);
    //     };
    //   });

    return () => {
      window.onscroll = null;
    };
  }, []);

  return null;
};

export default Script;