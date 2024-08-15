function splitTextIntoSpans(target) {
  let elements = document.querySelectorAll(target)
  elements.forEach((element) => {
      element.classList.add('split-text')
      let text = element.innerText
      let splitText = text
          .split(" ")
          .map(function (word) {
              let char = word.split('').map(char => {
                  return `<span class="split-char">${char}</span>`
              }).join('')
              return `<div class="split-word">${char}&nbsp</div>`
          }).join('')

      element.innerHTML = splitText
  })
}

splitTextIntoSpans('.s-s-button');


// ===============animated numbers ==================


// const counters = document.querySelectorAll('.value');
// const speed = 200;

// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
     
//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 10);
//         }else{
//           counter.innerText = value;
//         }
     
//    }
   
//    animate();
// });

const numbersSection = document.querySelector(".number-section")

window.addEventListener("scroll", () => {
  const numbersSectionPosition = numbersSection.getBoundingClientRect();

  if(numbersSectionPosition.top < window.innerHeight && numbersSectionPosition.bottom >= 0){
    document.querySelectorAll(".value").forEach(counter => {
      const target = parseInt(counter.getAttribute("akhi"));
      const speed = 4000;

      const updateCount = () => {
        const value = parseInt(counter.innerText);
        const inc = target / speed;

        if(value < target){
          counter.innerText = Math.ceil(value + inc);
          setTimeout(updateCount, 10);
        }else {
          counter.innerText = target;
        }
      };
      updateCount();
    })
  }
});