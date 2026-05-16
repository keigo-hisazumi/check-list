import { ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'

const SWIPE_THRESHOLD = 100
const DIRECTION_THRESHOLD = 10
const EDGE_RESISTANCE = 0.3
export const TRANSITION_DURATION = 300

export function useSwipe(
  currentIndex: ComputedRef<number>,
  itemCount: ComputedRef<number>,
  isDisabled: Ref<boolean>,
  onNavigate: (newIndex: number) => void
) {
  const translateX = ref(0)
  const isTransitioning = ref(false)

  let touchStartX = 0
  let touchStartY = 0
  let touchCurrentX = 0
  let touchCurrentY = 0
  let isSwiping = false
  let swipeDirection: 'horizontal' | 'vertical' | null = null

  const reset = () => {
    isSwiping = false
    swipeDirection = null
    translateX.value = 0
  }

  const handleTouchStart = (e: TouchEvent) => {
    if (isDisabled.value || !e.touches.length) return
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
    touchCurrentX = touchStartX
    touchCurrentY = touchStartY
    isSwiping = true
    swipeDirection = null
    isTransitioning.value = false
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDisabled.value || !isSwiping || !e.touches.length) return
    touchCurrentX = e.touches[0].clientX
    touchCurrentY = e.touches[0].clientY

    const diffX = touchCurrentX - touchStartX
    const diffY = touchCurrentY - touchStartY

    if (!swipeDirection) {
      const total = Math.hypot(Math.abs(diffX), Math.abs(diffY))
      if (total > DIRECTION_THRESHOLD) {
        swipeDirection = Math.abs(diffX) > Math.abs(diffY) ? 'horizontal' : 'vertical'
      }
    }

    if (swipeDirection === 'vertical') return

    if (swipeDirection === 'horizontal') {
      e.preventDefault()
      const idx = currentIndex.value
      if ((idx === 0 && diffX > 0) || (idx === itemCount.value - 1 && diffX < 0)) {
        translateX.value = diffX * EDGE_RESISTANCE
      } else {
        translateX.value = diffX
      }
    }
  }

  const handleTouchEnd = () => {
    if (isDisabled.value) {
      isSwiping = false
      return
    }
    if (!isSwiping) return

    if (swipeDirection === 'vertical') {
      reset()
      return
    }

    const swipeDistance = touchCurrentX - touchStartX
    const idx = currentIndex.value

    isTransitioning.value = true

    if (swipeDirection === 'horizontal') {
      if (swipeDistance > SWIPE_THRESHOLD && idx > 0) {
        onNavigate(idx - 1)
      } else if (swipeDistance < -SWIPE_THRESHOLD && idx < itemCount.value - 1) {
        onNavigate(idx + 1)
      }
    }

    reset()
    setTimeout(() => { isTransitioning.value = false }, TRANSITION_DURATION)
  }

  return { translateX, isTransitioning, handleTouchStart, handleTouchMove, handleTouchEnd }
}
