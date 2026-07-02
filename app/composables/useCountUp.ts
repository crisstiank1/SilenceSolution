import { ref, onMounted, onUnmounted } from 'vue'

export function useCountUp(target: number, duration = 1500) {
  const value = ref(0)
  const elementRef = ref<HTMLElement | null>(null)

  let observer: IntersectionObserver | null = null
  let animationId: number | null = null
  let hasAnimated = false

  function animate() {
    if (hasAnimated) return
    hasAnimated = true

    const startTime = performance.now()
    const startValue = 0

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      value.value = Math.round(startValue + (target - startValue) * eased)

      if (progress < 1) {
        animationId = requestAnimationFrame(step)
      }
    }

    animationId = requestAnimationFrame(step)
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer?.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    if (observer) observer.disconnect()
  })

  return { value, elementRef }
}
