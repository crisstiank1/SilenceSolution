<template>
  <section id="contacto" class="py-24 md:py-32 bg-[#f5f5f5] dark:bg-[#0a0a0a] transition-colors duration-300">
    <div class="container mx-auto px-4 lg:px-8">
      
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto">
        
        <!-- Left Column: Contact Info -->
        <div class="lg:w-5/12 flex flex-col justify-center" v-motion :initial="{ opacity: 0, x: -24 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }">
          <span class="inline-block self-start py-1 px-3 rounded-full bg-green-accent/10 text-green-mid dark:text-green-accent font-sans font-medium text-sm tracking-wider uppercase mb-6">
            Hablemos
          </span>
          <h2 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            COTIZA TU <span class="text-green-mid">PROYECTO</span>
          </h2>
          <p class="font-sans text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            Déjanos tus datos y un especialista acústico se pondrá en contacto contigo para diseñar la mejor solución para tu espacio.
          </p>

          <div class="space-y-6">
            <a href="mailto:scsilencesolution@gmail.com" class="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-green-mid dark:hover:text-green-mid transition-colors duration-300">
              <div class="w-12 h-12 bg-white dark:bg-dark-card rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-green-mid transition-colors shadow-sm text-green-deep dark:text-gray-300 group-hover:text-green-mid">
                <Mail :size="20" />
              </div>
              <span class="font-sans font-medium text-lg">scsilencesolution@gmail.com</span>
            </a>
            
            <a href="https://wa.me/570000000000" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-green-mid dark:hover:text-green-mid transition-colors duration-300">
              <div class="w-12 h-12 bg-white dark:bg-dark-card rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-green-mid transition-colors shadow-sm text-green-deep dark:text-gray-300 group-hover:text-green-mid">
                <Phone :size="20" />
              </div>
              <span class="font-sans font-medium text-lg">+57 000 000 0000</span>
            </a>

            <div class="flex items-center gap-4 pt-4 mt-8 border-t border-gray-200 dark:border-gray-800">
              <p class="font-sans text-sm text-gray-500 uppercase tracking-wider font-medium">Síguenos</p>
              <a href="#" class="p-2 text-gray-500 hover:text-green-mid transition-colors hover:-translate-y-1 transform">
                <Instagram :size="22" />
              </a>
              <a href="#" class="p-2 text-gray-500 hover:text-green-mid transition-colors hover:-translate-y-1 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="lg:w-7/12" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1, transition: { duration: 600, delay: 200 } }">
          <div class="bg-white dark:bg-[#111111] p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden">
            <!-- Decorative blur -->
            <div class="absolute -top-10 -right-10 w-64 h-64 bg-green-mid/10 dark:bg-green-mid/5 rounded-full blur-3xl pointer-events-none"></div>

            <form @submit.prevent="submitForm" class="space-y-8 relative z-10">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="relative">
                  <input type="text" id="name" v-model="form.name" required class="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-green-mid dark:focus:border-green-mid py-3 outline-none text-gray-900 dark:text-white transition-colors peer placeholder-transparent" placeholder="Nombre completo" />
                  <label for="name" class="absolute left-0 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-green-mid -translate-y-4 peer-placeholder-shown:translate-y-0 cursor-text pointer-events-none">Nombre completo</label>
                </div>
                
                <div class="relative">
                  <input type="text" id="company" v-model="form.company" class="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-green-mid dark:focus:border-green-mid py-3 outline-none text-gray-900 dark:text-white transition-colors peer placeholder-transparent" placeholder="Empresa / Espacio" />
                  <label for="company" class="absolute left-0 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-green-mid -translate-y-4 peer-placeholder-shown:translate-y-0 cursor-text pointer-events-none">Empresa / Espacio</label>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="relative">
                  <input type="text" id="city" v-model="form.city" required class="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-green-mid dark:focus:border-green-mid py-3 outline-none text-gray-900 dark:text-white transition-colors peer placeholder-transparent" placeholder="Ciudad" />
                  <label for="city" class="absolute left-0 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-green-mid -translate-y-4 peer-placeholder-shown:translate-y-0 cursor-text pointer-events-none">Ciudad</label>
                </div>
                
                <div class="relative">
                  <input type="tel" id="phone" v-model="form.phone" required class="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-green-mid dark:focus:border-green-mid py-3 outline-none text-gray-900 dark:text-white transition-colors peer placeholder-transparent" placeholder="Teléfono" />
                  <label for="phone" class="absolute left-0 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-green-mid -translate-y-4 peer-placeholder-shown:translate-y-0 cursor-text pointer-events-none">Teléfono</label>
                </div>
              </div>

              <div class="relative pt-2">
                <select id="type" v-model="form.type" required :class="['w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-green-mid dark:focus:border-green-mid py-3 outline-none transition-colors appearance-none cursor-pointer', form.type === '' ? 'text-gray-500' : 'text-gray-900 dark:text-white']">
                  <option value="" disabled selected class="text-gray-500 bg-white dark:bg-[#111]">Selecciona tipo de servicio</option>
                  <option value="restauracion" class="text-gray-900 dark:text-white bg-white dark:bg-[#111]">Restauración Acústica</option>
                  <option value="cabina" class="text-gray-900 dark:text-white bg-white dark:bg-[#111]">Cabina Acústica</option>
                  <option value="mampara" class="text-gray-900 dark:text-white bg-white dark:bg-[#111]">Mampara / Laminado</option>
                  <option value="otro" class="text-gray-900 dark:text-white bg-white dark:bg-[#111]">Otro servicio a medida</option>
                </select>
                <div class="absolute right-0 top-6 pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>

              <div class="relative pt-4">
                <textarea id="message" v-model="form.message" rows="4" required class="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-green-mid dark:focus:border-green-mid py-3 outline-none text-gray-900 dark:text-white transition-colors peer placeholder-transparent resize-none" placeholder="Cuéntanos tu proyecto..."></textarea>
                <label for="message" class="absolute left-0 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-top-1 peer-focus:text-sm peer-focus:text-green-mid -translate-y-4 peer-placeholder-shown:translate-y-0 cursor-text pointer-events-none">Cuéntanos tu proyecto...</label>
              </div>

              <div class="pt-6">
                <button type="submit" :disabled="isSubmitting || successMsg" class="relative overflow-hidden w-full px-8 py-4 bg-green-deep hover:bg-green-mid text-white rounded-xl font-medium transition-all shadow-md group disabled:opacity-90 disabled:cursor-not-allowed disabled:hover:bg-green-deep">
                  <span v-if="!isSubmitting && !successMsg" class="absolute inset-0 w-full h-full bg-green-mid scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></span>
                  
                  <div class="relative z-10 flex items-center justify-center gap-3">
                    <template v-if="isSubmitting">
                      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Enviando...</span>
                    </template>
                    <template v-else-if="successMsg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white animate-[bounce_0.5s_ease-in-out]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>¡Mensaje Enviado!</span>
                    </template>
                    <template v-else>
                      <span>Enviar mensaje</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                    </template>
                  </div>
                </button>
                <p v-if="errorMsg" class="mt-4 text-center text-red-500 dark:text-red-400 font-medium text-sm transition-opacity">Hubo un error al enviar. Por favor intenta de nuevo.</p>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, Instagram } from 'lucide-vue-next'

const form = ref({
  name: '',
  company: '',
  city: '',
  phone: '',
  type: '',
  message: ''
})

const isSubmitting = ref(false)
const successMsg = ref(false)
const errorMsg = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  successMsg.value = false
  errorMsg.value = false

  try {
    const response = await fetch('https://formspree.io/f/placeholder_form_id', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      successMsg.value = true
      form.value = {
        name: '', company: '', city: '', phone: '', type: '', message: ''
      }
      setTimeout(() => { successMsg.value = false }, 4000)
    } else {
      errorMsg.value = true
    }
  } catch (error) {
    errorMsg.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>
