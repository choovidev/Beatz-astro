## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos y assets
│   ├── img/            # Imágenes públicas
│   │   ├── miembro.jpg # Imagen de perfil de miembro
│   │   ├── 1.jpg      # Imagen de proyecto 1
│   │   ├── 2.jpg      # Imagen de proyecto 2
│   │   ├── 3.jpg      # Imagen de proyecto 3
│   │   ├── 4.jpg      # Imagen de proyecto 4
│   │   ├── 5.jpg      # Imagen de proyecto 5
│   │   ├── 6.jpg      # Imagen de proyecto 6
│   │   ├── 7.jpg      # Imagen de proyecto 7
│   │   ├── 8.jpg      # Imagen de proyecto 8
│   │   ├── 9.jpg      # Imagen de proyecto 9
│   │   └── 10.jpg     # Imagen de proyecto 10
│   └── favicon.svg
│
├── src/
│   ├── assets/         # Recursos estáticos
│   │   ├── astro.svg
│   │   └── background.svg
│   │
│   ├── components/     # Componentes reutilizables
│   │   ├── Header.astro
│   │   └── Footer.astro
│   │
│   ├── content/        # Contenido del sitio
│   │   └── posts/      # Artículos del blog
│   │       ├── mi-primer-articulo.md
│   │       └── mi-segundo-articulo.md
│   │
│   ├── data/          # Datos y configuraciones
│   │   └── proyectos.json
│   │
│   ├── layouts/       # Plantillas de diseño
│   │   └── Layout.astro
│   │
│   ├── pages/         # Páginas del sitio
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── blog.astro
│   │   ├── proyectos.astro
│   │   ├── blog/
│   │   │   └── [slug].astro    # Página dinámica para artículos del blog
│   │   └── proyectos/
│   │       └── [slug].astro    # Página dinámica para proyectos
│   │
│   ├── styles/        # Estilos globales y CSS
│   │   └── global.css
│   │
│   └── content.config.ts  # Configuración de contenido
│
├── .astro/            
├── .vscode/           
├── astro.config.mjs   
├── package.json       
├── package-lock.json  
├── tsconfig.json      
└── .gitignore        # Archivos ignorados por Git
```