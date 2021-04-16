/**
 * 参考：ionic动画自定义
 * https://github.com/ionic-team/ionic/blob/master/core/src/components/modal/animations/ios.enter.ts
 * https://www.joshmorony.com/create-a-custom-modal-page-transition-animation-in-ionic/
 * @param animation
 * @param baseEl
 * @returns {Promise<Animation>}
 */
const slideInEnterAnimation = function (AnimationC, baseEl) {
  const baseAnimation = new AnimationC()
  const backdropAnimation = new AnimationC()
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'))

  const wrapperAnimation = new AnimationC()
  wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'))

  wrapperAnimation.beforeStyles({ 'opacity': 1 })
    .fromTo('translateX', '-100%', '0%')

  backdropAnimation.fromTo('opacity', 0.01, 0.4)

  baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(400)
    .beforeAddClass('show-modal')
    .add(backdropAnimation)
    .add(wrapperAnimation)

  return Promise.resolve(baseAnimation)
}

const slideOutLeaveAnimation = function (AnimationC, baseEl) {
  const baseAnimation = new AnimationC()

  const backdropAnimation = new AnimationC()
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'))

  const wrapperAnimation = new AnimationC()
  const wrapperEl = baseEl.querySelector('.modal-wrapper')
  wrapperAnimation.addElement(wrapperEl)
  const wrapperElRect = wrapperEl.getBoundingClientRect()

  wrapperAnimation.beforeStyles({ 'opacity': 1 })
    .fromTo('translateX', '0%', `${window.innerWidth - wrapperElRect.left}px`)

  backdropAnimation.fromTo('opacity', 0.4, 0.0)

  baseAnimation
    .addElement(baseEl)
    .easing('ease-out')
    .duration(250)
    .add(backdropAnimation)
    .add(wrapperAnimation)

  return Promise.resolve(baseAnimation)
}

const popInEnterAnimation = function (AnimationC, baseEl) {
  const baseAnimation = new AnimationC()

  const backdropAnimation = new AnimationC()
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'))

  const wrapperAnimation = new AnimationC()
  wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'))

  wrapperAnimation
    .fromTo('transform', 'scaleX(0.1) scaleY(0.1)', 'translateX(0%) scaleX(1) scaleY(1)')
    .fromTo('opacity', 0, 1)

  backdropAnimation.fromTo('opacity', 0.01, 0.4)
  baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(400)
    .beforeAddClass('show-modal')
    .add(backdropAnimation)
    .add(wrapperAnimation)

  return Promise.resolve(baseAnimation)
}

const popOutLeaveAnimation = function (AnimationC, baseEl) {
  const baseAnimation = new AnimationC()

  const backdropAnimation = new AnimationC()
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'))

  const wrapperAnimation = new AnimationC()
  const wrapperEl = baseEl.querySelector('.modal-wrapper')
  wrapperAnimation.addElement(wrapperEl)
  // const wrapperElRect = wrapperEl.getBoundingClientRect()

  wrapperAnimation
    .fromTo('transform', 'scaleX(1) scaleY(1)', 'scaleX(0.1) scaleY(0.1)')
    .fromTo('opacity', 1, 0)

  backdropAnimation.fromTo('opacity', 0.4, 0.0)
  baseAnimation
    .addElement(baseEl)
    .easing('ease-out')
    .duration(400)
    .add(backdropAnimation)
    .add(wrapperAnimation)
  return Promise.resolve(baseAnimation)
}

export { slideInEnterAnimation, slideOutLeaveAnimation, popInEnterAnimation, popOutLeaveAnimation }
