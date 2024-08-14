const headerNoTopo = document.querySelector('header')
window.addEventListener('scroll', quandoNoTopo)

function quandoNoTopo() {
  const rect = headerNoTopo.getBoundingClientRect()
  if (rect.top === 0) {
    headerNoTopo.classList.add('sombraSticky')
  } else if (rect.top !== 0) {
    headerNoTopo.classList.remove('sombraSticky')
  }
}

const section2 = document.querySelector('.section2')
window.addEventListener('scroll', mostrarSection2)

function mostrarSection2() {
  const rect = section2.getBoundingClientRect()
  if (rect.top <= 500) {
    section2.classList.add('show')
  }
}

const section3 = document.querySelector('.section3')

window.addEventListener('scroll', mostrarSection3)


function mostrarSection3() {
  const rect = section3.getBoundingClientRect()
  if (rect.top <= 500) {
    section3.classList.add('show')
  }
}

const section4 = document.querySelector('.section4')

window.addEventListener('scroll', mostrarSection4)


function mostrarSection4() {
  const rect = section4.getBoundingClientRect()
  if (rect.top <= 500) {
    section4.classList.add('show')
  }
}