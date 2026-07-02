# AGENTS.md — SilenceSolution (SSpagina)

## Stack

- **Nuxt 4** (Vue 3, estructura `app/`, auto-imports)
- **Tailwind CSS v4** — tema definido en `app/assets/css/app.css` vía `@theme`; `tailwind.config.ts` es legado, prefiere editar `app.css`
- **TypeScript**, `@nuxtjs/color-mode` (modo oscuro vía clase `.dark`), `@vueuse/motion` (directiva `v-motion`), `@nuxt/image`, `lucide-vue-next`
- Google Fonts: Inter (cuerpo), Barlow Condensed (títulos) — precargadas en `nuxt.config.ts`

## Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run generate  # generación de sitio estático
npm run preview   # previsualizar build
npm run postinstall  # ejecuta `nuxt prepare` (genera tipos .nuxt)
```

No existen scripts de test, lint ni typecheck.

## Archivos clave

| Ruta | Propósito |
|---|---|
| `nuxt.config.ts` | configuración app, módulos, baseURL, transiciones páginas, SEO |
| `app/assets/css/app.css` | tema Tailwind v4, vars CSS, modo oscuro, transiciones |
| `app/app.vue` | raíz: `<NuxtLayout><NuxtPage /></NuxtLayout>` |
| `app/layouts/default.vue` | envuelve `AppNavbar`, `<slot/>`, `AppFooter`, `AppWhatsApp` |
| `app/pages/index.vue` | página principal componiendo secciones |
| `app/pages/servicios/` | páginas de servicios: `restauracion.vue`, `cabinas.vue`, `mamparas.vue` |
| `app/components/sections/` | `HeroSection`, `AboutSection`, `StatsSection`, `ServicesSection`, `ContactSection` |

## Particularidades y convenciones

- **baseURL**: `/SilenceSolution/` por defecto. Sobreescribe con variable de entorno `NUXT_APP_BASE_URL`. Se usa en rutas de favicon; los assets estáticos deben referenciarse con `{{ baseURL }}`, no con `/` absoluto.
- **Modo oscuro**: se alterna vía clase `.dark`. El módulo color-mode maneja la persistencia.
- **Transición de página**: definida como transición `page` en `nuxt.config.ts` y CSS en `app.css` (fade + slide).
- **Colores personalizados** (usados en todo el proyecto): `green-deep`, `green-mid`, `green-accent`, `gray-light`, `dark`, `dark-card`.
- **Animaciones**: `@vueuse/motion` usa la directiva `v-motion` con detección de viewport — no usar clases de transición regulares.
- **Iconos**: importar desde `lucide-vue-next`.
- **Páginas de servicio** comparten un componente `ServiceLayout.vue` (no es un layout de Nuxt).
- **Media**:
  - Tipos definidos en `app/types/media.ts`.
  - Componentes: `MediaGallery`, `MediaCard`, `MediaLightbox` en `app/components/media/`.
  - Assets estáticos en `public/media/` y `public/logos/`.
- `.nuxt/`, `.output/`, `node_modules/`, `dist/` están en `.gitignore`.

## Estructura

La raíz es Nuxt 4 (directorio `app/`). Todo el código Vue vive dentro de `app/`. El entrypoint `app.vue` está dentro de `app/`. Auto-imports estándar de Nuxt para componentes, composables y utilidades.
