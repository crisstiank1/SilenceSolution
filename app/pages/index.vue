<template>
  <div>
    <HeroSection />
    <div class="sound-wave-divider"></div>
    <AboutSection />
    <StatsSection />
    <div class="sound-wave-divider"></div>
    <ServicesSection />
    <div class="sound-wave-divider"></div>
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import StatsSection from '~/components/sections/StatsSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

definePageMeta({
  layout: 'default'
})
</script>
