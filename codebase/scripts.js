const layer1 = document.querySelector('.layer-1');
const layer1Part2 = document.querySelector('.layer-1-part2');
const layer2 = document.querySelector('.layer-2');
const layer3 = document.querySelector('.layer-3');
const layer3Part2 = document.querySelector('.layer-3-part2');

const arrowup = document.querySelector('.arrow-up');

// Logo
const devInci = document.querySelector('.intro-logo');
const cornerLogo = document.querySelector('.corner-logo');

// L1 elements
const doorwayLeft = document.querySelector('.l1-doorway-left');
const doorwayRight = document.querySelector('.l1-doorway-right');
const frontLionLeft = document.querySelector('.front-lion-left');
const frontLionRight = document.querySelector('.front-lion-right');
const subfigureLeft = document.querySelector('.subfigure-left');
const subfigureRight = document.querySelector('.subfigure-right');
let introModal = document.querySelector('.intro-modal');

const l1Elements = [
  doorwayLeft,
  doorwayRight,
  frontLionLeft,
  frontLionRight,
  subfigureLeft,
  subfigureRight,
];

// L2 elements
const l2CenterTopLeft = document.querySelector('.l2-center-top-left');
const l2CenterTopRight = document.querySelector('.l2-center-top-right');
const l2CenterBottomLeft = document.querySelector('.l2-center-bottom-left');
const l2CenterBottomRight = document.querySelector('.l2-center-bottom-right');
const l2LeftPart = document.querySelector('.l2-left-part');
const l2RightPart = document.querySelector('.l2-right-part');
const l2CornerTopLeft = document.querySelector('.cornerparts-top-left');
const l2CornerTopRight = document.querySelector('.cornerparts-top-right');
const l2CornerBottomLeft = document.querySelector('.cornerparts-bottom-left');
const l2CornerBottomRight = document.querySelector('.cornerparts-bottom-right');
const techIcons = document.querySelectorAll('.tech-icon');
const mission = document.querySelector('.mission');

// L3 elements
const foregroundTop = document.querySelector('.l3-foreground-top');
const foregroundBottom = document.querySelector('.l3-foreground-bottom');
const l3BackgroundCenter = document.querySelector('.l3-background-center');
const showCaseTitle = document.querySelector('.showcase-title');

// Form elements

const formHeader = document.querySelector('.form-header');
const nameElements = document.querySelectorAll('.name-element');
const emailElements = document.querySelectorAll('.email-element');
const subjectElements = document.querySelectorAll('.subject-element');
const subjectInput = document.querySelector('.form-input-subject');
const submitBtn = document.querySelector('.submit-btn');

const handleIntroAnimation = (e) => {
  cornerLogo.classList.add('corner-logo-transition');
};

window.addEventListener('load', handleIntroAnimation);

const handleAnimations = (e) => {
  console.log(`handle animations triggered`);

  switch (true) {
    case layer1.classList.contains('active-layer'):
      layer1Animation(e);
      break;
    case layer1Part2.classList.contains('active-layer'):
      layer1Part2Animation(e);
      break;
    case layer2.classList.contains('active-layer'):
      layer2Animation(e);
      break;
    case layer3.classList.contains('active-layer'):
      layer3Animation(e);
      break;
    case layer3.classList.contains('animation-complete'):
      returnAnimation(e);
    case layer3Part2.classList.contains('active-layer'):
      layer3Part2Animation(e);
      break;
    default:
      layer1Animation(e); // default? Call a default function if none of the elements have the "active" class
  }
};

const layer1Animation = (e) => {
  const delta = Math.sign(e.deltaY);

  if (delta < 0) {
    introModal.classList.add('modal-active');

    // L1 TRANSITION
    frontLionLeft.classList.add('move-lion-left-split');
    frontLionRight.classList.add('move-lion-right-split');
    subfigureLeft.classList.add('move-subfigure-left-split');
    subfigureRight.classList.add('move-subfigure-right-split');
    layer1Part2.classList.add('active-layer');
    layer1.classList.add('active-layer');
  }

  layer1.classList.remove('active-layer');
};

const layer1Part2Animation = (e) => {
  const delta = Math.sign(e.deltaY);

  console.log(`active animation: l1p2, delta: ${delta}`);

  if (delta > 0) {
    // REVERSE L1 TRANSITION

    console.log('l1 animation reversed');

    frontLionLeft.classList.remove('move-lion-left-split');
    frontLionRight.classList.remove('move-lion-right-split');
    subfigureLeft.classList.remove('move-subfigure-left-split');
    subfigureRight.classList.remove('move-subfigure-right-split');
    introModal.classList.remove('modal-active');
    layer1Part2.classList.remove('active-layer');

    // transition out
    frontLionLeft.classList.add('move-lion-left-combine');
    frontLionRight.classList.add('move-lion-right-combine');
    subfigureLeft.classList.add('move-subfigure-left-combine');
    subfigureRight.classList.add('move-subfigure-right-combine');
    introModal.classList.add('modal-shrink');
  } else if (delta < 0 && layer1Part2.classList.contains('active-layer')) {
    // L1P2 TRANSITION
    console.log('l1p2 animation initiated');

    loadLayer2Content();

    // change arrowup color to orange
    arrowup.style.backgroundImage = 'url(../../design/images/arrowup.png)';
    // open transition
    doorwayLeft.classList.add('l1-doorway-left-slide');
    doorwayRight.classList.add('l1-doorway-right-slide');
    frontLionLeft.classList.add('move-lion-left-split-pt2');
    frontLionRight.classList.add('move-lion-right-split-pt2');
    subfigureLeft.classList.add('move-subfigure-left-split-pt2');
    subfigureRight.classList.add('move-subfigure-right-split-pt2');

    frontLionLeft.classList.remove('move-lion-left-split');
    frontLionRight.classList.remove('move-lion-right-split');
    subfigureLeft.classList.remove('move-subfigure-left-split');
    subfigureRight.classList.remove('move-subfigure-right-split');

    introModal.classList.remove('modal-active');
    introModal.classList.add('modal-shrink');

    layer1Part2.classList.remove('active-layer');
    layer2.classList.add('active-layer');
  }
};

// L2 ANIMATIONS

const layer2Animation = (e) => {
  const delta = Math.sign(e.deltaY);

  hideLayer2Content();

  console.log(`l3 animation, delta: ${delta}`);
  if (delta > 0) {
    // L1P2 REVERSE TRANSITION
    console.log(`l1p2 transition reverse`);

    layer2.classList.remove('active-layer');

    doorwayLeft.classList.replace(
      'l1-doorway-left-slide',
      'l1-doorway-left-slideback'
    );
    doorwayRight.classList.replace(
      'l1-doorway-right-slide',
      'l1-doorway-right-slideback'
    );
    frontLionLeft.classList.replace(
      'move-lion-left-split-pt2',
      'move-lion-left-combine'
    );
    frontLionRight.classList.replace(
      'move-lion-right-split-pt2',
      'move-lion-right-combine'
    );
    subfigureLeft.classList.replace(
      'move-subfigure-left-split-pt2',
      'move-subfigure-left-combine'
    );
    subfigureRight.classList.replace(
      'move-subfigure-right-split-pt2',
      'move-subfigure-right-combine'
    );
    introModal.classList.remove('modal-active');
  } else if (delta < 0 && layer2.classList.contains('active-layer')) {
    //Perhaps this already activates only if l2 is active
    console.log(`initiate l2 animation`);

    showCaseTitle.classList.add('show-showcase-title');

    arrowup.style.backgroundImage =
      'url(../../design/images/arrowup-orange.png)';
    // center circle split
    l2CenterTopLeft.classList.remove('l2-center-top-left-return');
    l2CenterTopLeft.classList.add('l2-center-top-left-split');
    l2CenterTopLeft.classList.replace(
      'l2-center-top-left-return',
      'l2-center-top-left-split'
    );
    l2CenterTopRight.classList.remove('l2-center-top-right-return');
    l2CenterTopRight.classList.add('l2-center-top-right-split');
    l2CenterBottomLeft.classList.remove('l2-center-bottom-left-return');
    l2CenterBottomLeft.classList.add('l2-center-bottom-left-split');
    l2CenterBottomRight.classList.remove('l2-center-bottom-right-return');
    l2CenterBottomRight.classList.add('l2-center-bottom-right-split');
    l2LeftPart.classList.add('l2-left-part-transition');
    l2RightPart.classList.add('l2-right-part-transition');
    l2CornerTopLeft.classList.add('cornerparts-top-left-transition');
    l2CornerTopRight.classList.add('cornerparts-top-right-transition');
    l2CornerBottomLeft.classList.add('cornerparts-bottom-left-transition');
    l2CornerBottomRight.classList.add('cornerparts-bottom-right-transition');

    layer2.classList.remove('active-layer');
    layer3.classList.add('active-layer');
  }
};

// L2 ICONS AND TEXT ANIMATION

const loadLayer2Content = () => {
  techIcons.forEach((icon, i) => {
    icon.classList.add('circle-element-transition-show');
    icon.style.cssText += `transition-delay: ${i * 0.1 + 2.7}s`;
  });

  mission.classList.add('mission-transition-show');
};

const hideLayer2Content = () => {
  techIcons.forEach((icon, i) => {
    icon.classList.remove('circle-element-transition-show');
    icon.style.cssText += `transition-delay: ${i * 0.1 + 0.2}s`;
    // icon.classList.add('circle-element-transition-hide');
  });

  mission.classList.replace(
    'mission-transition-show',
    'mission-transition-hide'
  );
};

const layer3Animation = (e) => {
  const delta = Math.sign(e.deltaY);

  if (delta > 0) {
    console.log(`l2 reverse animation initiated, delta: ${delta}`);
    // L2 REVERSE TRANSITION

    showCaseTitle.classList.remove('show-showcase-title');
    showCaseTitle.classList.add('hide-showcase-title');

    loadLayer2Content();

    layer3.classList.remove('active-layer');
    layer2.classList.add('active-layer');

    l2CenterTopLeft.classList.replace(
      'l2-center-top-left-split',
      'l2-center-top-left-return'
    );
    l2CenterTopRight.classList.replace(
      'l2-center-top-right-split',
      'l2-center-top-right-return'
    );
    l2CenterBottomLeft.classList.replace(
      'l2-center-bottom-left-split',
      'l2-center-bottom-left-return'
    );
    l2CenterBottomRight.classList.replace(
      'l2-center-bottom-right-split',
      'l2-center-bottom-right-return'
    );
    l2LeftPart.classList.replace(
      'l2-left-part-transition',
      'l2-left-part-reverse-transition'
    );
    l2RightPart.classList.replace(
      'l2-right-part-transition',
      'l2-right-part-reverse-transition'
    );
    l2CornerTopLeft.classList.replace(
      'cornerparts-top-left-transition',
      'cornerparts-top-left-reverse-transition'
    );
    l2CornerTopRight.classList.replace(
      'cornerparts-top-right-transition',
      'cornerparts-top-right-reverse-transition'
    );
    l2CornerBottomLeft.classList.replace(
      'cornerparts-bottom-left-transition',
      'cornerparts-bottom-left-reverse-transition'
    );
    l2CornerBottomRight.classList.replace(
      'cornerparts-bottom-right-transition',
      'cornerparts-bottom-right-reverse-transition'
    );
  } else if (delta < 0 && layer3.classList.contains('active-layer')) {
    console.log(`l3 animation initiated, delta: ${delta}`);
    showCaseTitle.classList.remove('show-showcase-title');
    showCaseTitle.classList.add('hide-showcase-title');
    foregroundTop.classList.add('l3-foreground-top-transition');
    foregroundBottom.classList.add('l3-foreground-bottom-transition');
    l3BackgroundCenter.classList.add('l3-background-center-transition');
    layer3Part2.classList.add('active-layer');
    layer3.classList.remove('active-layer');
    showForm();
  }
};

const layer3Part2Animation = (e) => {
  const delta = Math.sign(e.deltaY);

  delta > 0 ? l3ReverseAnimation() : returnToFrontAnimation();
};

const l3ReverseAnimation = () => {
  console.log(`l3 reverse animation initiated`);

  hideForm();

  submitBtn.classList.remove('submit-btn-transition-show');
  submitBtn.classList.add('submit-btn-transition-hide');

  showCaseTitle.classList.add('show-showcase-title');
  showCaseTitle.classList.remove('hide-showcase-title');

  layer3.classList.add('active-layer');
  foregroundTop.classList.replace(
    'l3-foreground-top-transition',
    'l3-foreground-top-reverse-transition'
  );
  foregroundBottom.classList.replace(
    'l3-foreground-bottom-transition',
    'l3-foreground-bottom-reverse-transition'
  );
  l3BackgroundCenter.classList.replace(
    'l3-background-center-transition',
    `l3-background-center-reverse-transition`
  );
};

const returnToFrontAnimation = () => {
  console.log(`return animation triggered`);
  // figure out a better way to return to first screen
  // for each animated function, create a reverse func?
  // RTFA shouldnt trigger initial logo animation

  doorwayLeft.classList.replace(
    'l1-doorway-left-slide',
    'l1-doorway-left-slideback'
  );
  doorwayRight.classList.replace(
    'l1-doorway-right-slide',
    'l1-doorway-right-slideback'
  );
  frontLionLeft.classList.replace(
    'move-lion-left-split-pt2',
    'move-lion-left-combine'
  );
  frontLionRight.classList.replace(
    'move-lion-right-split-pt2',
    'move-lion-right-combine'
  );
  subfigureLeft.classList.replace(
    'move-subfigure-left-split-pt2',
    'move-subfigure-left-combine'
  );
  subfigureRight.classList.replace(
    'move-subfigure-right-split-pt2',
    'move-subfigure-right-combine'
  );
  introModal.classList.remove('modal-active');
  l2LeftPart.classList.replace(
    'l2-left-part-transition',
    'l2-left-part-reverse-transition'
  );
  l2RightPart.classList.replace(
    'l2-right-part-transition',
    'l2-right-part-reverse-transition'
  );

  hideForm();

  setTimeout(() => window.location.reload(), 1300);
};

// Set L2 tech icons in circle

function arrangeInCircle(radius, elements) {
  const container = document.getElementById('container');
  const angle = (2 * Math.PI) / elements.length; // Calculate the angle between each element
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const angleOffset = angle * i;
    const x = Math.cos(angleOffset) * radius + centerX;
    const y = Math.sin(angleOffset) * radius + centerY;

    element.style.left = x + 'px';
    element.style.top = y + 'px';
  }
}

const innerRadius = 265;
const innerElements = document.getElementsByClassName('circle-element');
arrangeInCircle(innerRadius, innerElements);

// CONTACT FORM FUNCTIONALITY

const showForm = () => {
  formHeader.classList.remove('hide-form-header');
  formHeader.classList.add('form-header-transition');
  formHeader.style.cssText -= 'transition-delay: 0.8s';

  nameElements.forEach((element) => {
    element.classList.remove('hide-name-element');
    element.classList.add('name-element-transition');
    element.style.cssText -= 'transition-delay: 0.5s';
  });

  emailElements.forEach((element) => {
    element.classList.remove('hide-email-element');
    element.classList.add('email-element-transition');
    element.style.cssText -= 'transition-delay: 0.3s';
  });

  subjectElements.forEach((element) => {
    element.classList.remove('hide-subject-element');
    element.classList.add('subject-element-transition');
    element.style.cssText -= 'transition-delay: 0.1s';
  });

  submitBtn.classList.add('submit-btn-transition-show');
  submitBtn.style.cssText += 'transition-delay: 1.6s';
  submitBtn.style.cssText += 'transition-duration: 0.5s';
  adjustSubmitBtnHover();

  subjectInput.style.cssText += 'height: 200px';
};

const hideForm = () => {
  formHeader.classList.add('hide-form-header');
  formHeader.classList.remove('form-header-transition');
  formHeader.style.cssText += 'transition-delay: 0.8s';

  nameElements.forEach((element) => {
    element.classList.replace('name-element-transition', 'hide-name-element');
    element.style.cssText += 'transition-delay: 0.5s';
  });

  emailElements.forEach((element) => {
    element.classList.replace('email-element-transition', 'hide-email-element');
    element.style.cssText += 'transition-delay: 0.3s';
  });

  subjectElements.forEach((element) => {
    element.classList.replace(
      'subject-element-transition',
      'hide-subject-element'
    );
    element.style.cssText += 'transition-delay: 0.1s';
  });

  submitBtn.style.cssText -= 'transition-delay: 1.6s';
  submitBtn.style.cssText -= 'transition-duration: 0.5s';
  // adjustSubmitBtnHover();

  subjectInput.style.cssText += 'height: 200px';
};

// The object of this function is to make it so that the transition duration of
// the hover effect is not the same as during form transition
const adjustSubmitBtnHover = () => {
  if (submitBtn.classList.contains('submit-btn-transition-show')) {
    setTimeout(() => {
      submitBtn.style.cssText -= 'transition-delay: 1.6s';
      submitBtn.style.cssText += 'transition-duration: 0.5s';
    }, 1700);
  }
};

// Enforce a delay between animations
let lastScrollTime = 0;
const scrollDelay = 600;

window.addEventListener('wheel', (e) => {
  const currentTime = Date.now();
  const timeSinceLastScroll = currentTime - lastScrollTime;

  if (timeSinceLastScroll >= scrollDelay) {
    handleAnimations(e);
  }

  lastScrollTime = currentTime;
});
