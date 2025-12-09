# Portafolio Profesional - Omar Trejo Landa

[![Astro](https://img.shields.io/badge/Astro-5.16.3-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Portafolio personal moderno y minimalista construido con Astro y Tailwind CSS v4, diseñado para destacar proyectos y experiencia profesional.

## ✨ Características

- **🚀 Performance óptimo** con Astro (zero JS por defecto)
- **🎨 Diseño moderno** con Tailwind CSS v4 y sistema de diseño personalizado
- **♿ Accesible** siguiendo mejores prácticas de a11y
- **📱 Responsive** adaptado a todos los dispositivos
- **🌙 Dark mode** nativo con paleta profesional
- **✍️ TypeScript** con configuración strict
- **🎭 Animaciones fluidas** y efectos interactivos
- **🔍 SEO optimizado** con meta tags y Open Graph

## 🛠️ Tech Stack

- **Framework**: [Astro 5.16.3](https://astro.build)
- **Estilos**: [Tailwind CSS 4.1.17](https://tailwindcss.com) 
- **Lenguaje**: TypeScript
- **Fuentes**: [Outfit](https://fonts.google.com/specimen/Outfit) de Google Fonts
- **Animaciones**: Canvas API + CSS Animations

## 📁 Estructura del Proyecto

```
portafolio/
├── public/                 # Assets estáticos
├── src/
│   ├── components/        # Componentes Astro
│   │   ├── ui/           # Componentes reutilizables
│   │   │   ├── BackgroundEffects.astro
│   │   │   ├── Button.astro
│   │   │   └── SocialLink.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── data/             # Datos de contenido
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── navigation.ts
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── site.ts
│   │   └── skills.ts
│   ├── layouts/          # Layouts base
│   │   └── Layout.astro
│   ├── pages/            # Rutas
│   │   └── index.astro
│   ├── styles/           # Estilos globales
│   │   └── global.css    # Tema Tailwind + animaciones
│   └── types/            # Definiciones TypeScript
│       └── index.ts
├── astro.config.mjs      # Configuración Astro
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm install`             | Instala las dependencias                            |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`   |
| `npm run build`           | Construye el sitio para producción en `./dist/`     |
| `npm run preview`         | Previsualiza la build local antes de desplegar      |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                       |

## 🎨 Sistema de Diseño

### Paleta de Colores

El proyecto usa una paleta personalizada definida en `global.css`:

- **Primario**: Emerald (verde esmeralda) - `emerald-400` a `emerald-900`
- **Secundario**: Navy (azul marino) - `navy-400` a `navy-900`
- **Acento**: Amber (ámbar cálido) - `amber-400` a `amber-900`
- **Base**: Slate/Gray para fondos y textos

### Tipografía

- **Font family**: Outfit (Google Fonts)
- **Pesos disponibles**: 300, 400, 500, 600, 700, 900

### Animaciones

Animaciones personalizadas incluidas:
- `fade-in`: Aparición suave
- `fade-in-up`: Aparición desde abajo
- `slide-up`: Deslizamiento hacia arriba
- `pulse-glow`: Efecto de brillo pulsante
- `float-slow/slower`: Flotación suave para elementos decorativos

## 🔧 Configuración

### Tailwind CSS v4

El proyecto usa Tailwind CSS v4 configurado vía Vite plugin:

```javascript
// astro.config.mjs
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

El tema se define en `src/styles/global.css` usando la directiva `@theme`.

### TypeScript

Configuración strict de TypeScript para máxima seguridad de tipos:

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

## 📝 Personalización

### Modificar contenido

1. **Información personal**: Edita `src/data/personal.ts`
2. **Experiencia laboral**: Modifica `src/data/experience.ts`
3. **Proyectos**: Actualiza `src/data/projects.ts`
4. **Habilidades**: Edita `src/data/skills.ts`
5. **Educación**: Modifica `src/data/education.ts`

### Cambiar colores

Edita las variables CSS en `src/styles/global.css` dentro del bloque `@theme`:

```css
@theme {
  --color-emerald-500: #10b981;
  /* ... otros colores */
}
```

### Añadir secciones

1. Crea un nuevo componente en `src/components/`
2. Importa y usa en `src/pages/index.astro`
3. Añade navegación en `src/data/navigation.ts`

## 🌐 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Vercel detectará automáticamente Astro
3. Deploy! 🚀

### Netlify

1. Conecta tu repo en [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

### Otros hosts

Astro genera archivos estáticos, compatible con:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Cualquier host de archivos estáticos

## 🔍 SEO

El proyecto incluye:
- Meta tags optimizados (descripción, keywords, autor)
- Open Graph para redes sociales
- Twitter Cards
- Canonical URLs
- Sitemap automático (vía Astro)
- Robots.txt

## ♿ Accesibilidad

- HTML semántico (`<header>`, `<section>`, `<nav>`)
- Atributos ARIA donde necesario
- Navegación por teclado
- Estados de focus visibles
- Contraste de colores WCAG AA

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo tu licencia preferida.

## 👤 Autor

**Omar Trejo Landa**
- Email: omartrejolanda@gmail.com
- LinkedIn: [omartrejol](https://www.linkedin.com/in/omartrejol)
- GitHub: [OmarTrejoo](https://github.com/OmarTrejoo)

---

Desarrollado con ❤️ usando Astro y Tailwind CSS
