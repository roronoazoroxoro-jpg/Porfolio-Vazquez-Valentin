# 📝 GUÍA DE PERSONALIZACIÓN DEL PORTAFOLIO

## Bienvenido al Portafolio Professional

Este es un portafolio completamente personalizable con tema de ciberseguridad. Sigue esta guía para adaptarlo a tus necesidades.

## ⚙️ CONFIGURACIÓN RÁPIDA

### 1. Actualizar Datos Personales

**Archivo**: `config.json`

```json
"personalInfo": {
  "nombre": "Tu Nombre",
  "titulo": "Tu Título",
  "subtitulo": "Tus Especialidades",
  "descripcion": "Tu descripción profesional"
}
```

### 2. Actualizar Contacto

**Archivo**: `config.json` - Sección `contacto`

```json
"contacto": {
  "email": "tu.email@example.com",
  "telefono": "Tu teléfono",
  "github": "Tu perfil GitHub",
  "linkedin": "Tu perfil LinkedIn"
}
```

### 3. Cambiar Redes Sociales

En `index.html`, busca la sección de redes sociales y actualiza los links:

```html
<a href="tu-url-github" class="social-link" title="GitHub">
    <i class="fab fa-github"></i>
</a>
```

## 🎨 PERSONALIZACIÓN DE ESTILOS

### Cambiar Colores

**Archivo**: `css/styles.css` - Variables CSS

```css
:root {
    --primary-color: #00ff41;      /* Color primario (verde neon) */
    --secondary-color: #ff0099;    /* Color secundario (magenta) */
    --tertiary-color: #00d9ff;     /* Color terciario (cyan) */
    --dark-bg: #0a0e27;            /* Fondo oscuro */
    --darker-bg: #050812;          /* Fondo más oscuro */
}
```

### Cambiar Fuente

En `css/styles.css`, busca la propiedad `font-family`:

```css
body {
    font-family: 'Tu Nueva Fuente', monospace;
}
```

### Ajustar Espaciado

Modifica los valores de `padding` y `margin` en las clases CSS según necesites.

## 📄 EDITAR CONTENIDO PRINCIPAL

### Mensaje de Bienvenida

**Archivo**: `index.html`

Busca la sección `.terminal-body` y edita:

```html
<p class="typing-effect">$ whoami</p>
<p class="typing-effect" style="animation-delay: 1s;">Tu nombre aquí</p>
```

### Sección de Habilidades

En `index.html`, busca `<section id="habilidades">` y actualiza los skills:

```html
<span class="skill-tag">Tu Habilidad</span>
```

### Información de Contacto

En `index.html`, sección de contacto:

```html
<p>tu.email@example.com</p>
<p>+54 (Tu teléfono)</p>
<p>Tu ubicación</p>
```

## 🚀 AÑADIR NUEVOS PROYECTOS

### Paso 1: Crear archivo HTML del proyecto

1. Copia `projects/facial-recognition.html`
2. Renómbralo: `projects/tu-proyecto.html`
3. Edita el contenido adaptando títulos, descripción y detalles

### Paso 2: Añadir tarjeta en index.html

En la sección `#proyectos`, añade una nueva tarjeta:

```html
<div class="project-card">
    <div class="project-header" style="background: linear-gradient(135deg, #COLOR1, #COLOR2);">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve del proyecto</p>
        <div class="project-tags">
            <span>Tecnología 1</span>
            <span>Tecnología 2</span>
        </div>
        <a href="projects/tu-proyecto.html" class="project-link">Ver Documentación →</a>
    </div>
</div>
```

### Paso 3: Actualizar config.json

Añade tu proyecto a la sección `proyectos`:

```json
{
  "id": 14,
  "nombre": "Nombre del Proyecto",
  "descripcion": "Descripción breve",
  "url": "projects/tu-proyecto.html",
  "icon": "fas fa-icon-name",
  "color": "linear-gradient(135deg, #COLOR1, #COLOR2)"
}
```

## 🎯 LINKS DE ICONOS ÚTILES

Para cambiar iconos, usa Font Awesome (ya incluido):

- **Cómo**: `<i class="fas fa-icon-name"></i>`
- **Ejemplos**:
  - `fa-code` - Código
  - `fa-database` - Base de datos
  - `fa-server` - Servidor
  - `fa-lock` - Seguridad
  - `fa-robot` - Robot/IA
  - `fa-brain` - Machine Learning
  - `fas fa-link` - Blockchain
  - `fas fa-comment-dots` - Chat

Visita: https://fontawesome.com/icons

## 🌐 Deploy (PUBLICAR EN LÍNEA)

### Opción 1: GitHub Pages (Gratuito)

```bash
# 1. Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# 2. En GitHub Settings → Pages → Main branch
# Tu sitio estará en: https://tu-usuario.github.io/portfolio
```

### Opción 2: Netlify (Gratuito & Fácil)

1. Ir a https://netlify.com
2. Conectar tu repositorio GitHub
3. Deploy automático

### Opción 3: Vercel (Gratuito)

1. Ir a https://vercel.com
2. Conectar GitHub
3. Deploy en segundos

## 📱 RESPONSIVE DESIGN

El portafolio es 100% responsive. Para probar diferentes tamaños:

**En navegador**:
- Presiona `F12` o `Ctrl+Shift+I`
- Click en icono de teléfono (Mobile)
- Cambia el tamaño de ventana

## ✅ CHECKLIST DE PERSONALIZACIÓN

- [ ] Actualizar nombre y datos personales
- [ ] Cambiar email y teléfono de contacto
- [ ] Actualizar links de redes sociales
- [ ] Modificar descripción profesional
- [ ] Ajustar lista de skills/habilidades
- [ ] Revisar y actualizar proyectos
- [ ] Cambiar colores si lo deseas
- [ ] Probar en móvil y desktop
- [ ] Publicar en línea
- [ ] Compartir portafolio

## 🐛 SOLUCIÓN DE PROBLEMAS

### Los estilos no se ven
- Limpiar caché del navegador (Ctrl+F5)
- Verificar rutas de archivos CSS

### Los links no funcionan
- Verificar rutas en `href`
- Asegurar nombres de archivo consistentes

### Animaciones lentas
- Reducir efecto matrix en `main.js`
- Optimizar imágenes

## 📞 SOPORTE

Para ayuda adicional:
- Revisa la documentación de Font Awesome
- Consulta MDN Web Docs para CSS/HTML/JS
- Busca en Stack Overflow

---

**¡Éxito con tu portafolio! 🚀**

*Última actualización: 31 de Marzo de 2026*
