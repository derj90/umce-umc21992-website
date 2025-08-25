# UMCE Virtual - Sitio de Presentación del Proyecto UMC21992

## 🎓 Descripción

Este sitio web moderno presenta el **Proyecto UMC21992: "Fortalecimiento de la docencia a través del uso e integración de TIC"** de la Universidad Metropolitana de Ciencias de la Educación (UMCE).

El sitio está diseñado con un estilo moderno inspirado en Apple, ofreciendo una experiencia visual atractiva e interactiva para mostrar los logros, objetivos y proyecciones del proyecto de transformación digital educativa.

## 🚀 Características

### Diseño y UX
- **Estilo Apple**: Diseño minimalista, moderno y elegante
- **Responsive**: Adaptable a todos los dispositivos (desktop, tablet, móvil)
- **Animaciones suaves**: Transiciones y efectos visuales fluidos
- **Navegación intuitiva**: Menú sticky con scroll suave
- **Elementos interactivos**: Tarjetas flotantes, efectos hover y ripple

### Secciones del Sitio

#### 🏠 Hero Section
- Presentación principal del proyecto
- Estadísticas clave animadas
- Llamadas a la acción prominentes
- Tarjetas flotantes con información destacada

#### 📋 Proyecto
- Timeline del desarrollo del proyecto (2022-2025)
- Características principales
- Marco de competencias TIC
- Reorganización institucional

#### 🎯 Objetivos
- Dos objetivos estratégicos principales
- Logros específicos de cada objetivo
- Indicadores de progreso visuales

#### 📊 Resultados
- Dashboard de métricas clave
- 94% de satisfacción docente
- 61 docentes capacitados
- Innovaciones metodológicas identificadas

#### 🔮 Futuro
- Roadmap de implementación
- Pilares de sostenibilidad
- Proyecciones a largo plazo

#### 📞 Contacto
- Información de contacto UMCE
- Enlaces a plataformas
- Visualización interactiva del campus

## 🛠 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con flexbox/grid, animaciones CSS
- **JavaScript (ES6+)**: Interactividad y efectos dinámicos
- **Google Fonts**: Tipografía Inter
- **CSS Variables**: Sistema de colores consistente
- **Responsive Design**: Mobile-first approach

## 📁 Estructura de Archivos

```
umce_presentation/
├── index.html              # Página principal
├── styles.css              # Estilos CSS principales
├── script.js               # JavaScript para interactividad
├── README.md               # Documentación del proyecto
├── assets/                 # Carpeta para imágenes y recursos
│   └── umce-logo.png       # Logo de la UMCE (placeholder)
└── favicon.ico             # Favicon del sitio
```

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor web local (opcional para desarrollo)

### Instalación Local

1. **Clona o descarga los archivos**:
   ```bash
   # Si tienes los archivos en el directorio actual
   cd umce_presentation
   ```

2. **Inicia un servidor local** (opcional):
   ```bash
   # Usando Python 3
   python -m http.server 8000
   
   # Usando Node.js (si tienes http-server instalado)
   npx http-server
   
   # Usando PHP
   php -S localhost:8000
   ```

3. **Abre en el navegador**:
   - Si usas servidor local: `http://localhost:8000`
   - Si abres directamente: Doble clic en `index.html`

### Personalización

#### Colores del Tema
Modifica las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #007AFF;    /* Azul principal */
    --secondary-color: #5856D6;  /* Púrpura secundario */
    --accent-color: #FF6B6B;     /* Color de acento */
    /* ... más variables */
}
```

#### Contenido
- **Textos**: Edita directamente en `index.html`
- **Estadísticas**: Modifica los números en las secciones `.stat-number` y `.metric-value`
- **Imágenes**: Reemplaza los archivos en la carpeta `assets/`

#### Funcionalidades JavaScript
- **Animaciones**: Configura en `script.js`
- **Contadores**: Ajusta velocidad y efectos
- **Navegación**: Personaliza comportamiento del menú

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos
- ✅ Desktop (1200px+)
- ✅ Laptop (992px - 1199px)
- ✅ Tablet (768px - 991px)
- ✅ Mobile (< 768px)

## 🎨 Guía de Estilo

### Tipografía
- **Fuente principal**: Inter (Google Fonts)
- **Jerarquía**: H1 (48px+), H2 (36px+), H3 (24px+)
- **Pesos**: 300 (light), 400 (regular), 600 (semibold), 700 (bold)

### Espaciado
- **Secciones**: 120px padding vertical
- **Elementos**: 24px gaps estándar
- **Cards**: 32px padding interno

### Colores UMCE
- **Primario**: Azul institucional (#007AFF)
- **Secundario**: Púrpura complementario (#5856D6)
- **Texto**: Grises neutros (#1D1D1F, #86868B)

## 🔧 Funcionalidades Técnicas

### JavaScript
- **Mobile Navigation**: Menú hamburguesa responsivo
- **Smooth Scrolling**: Navegación fluida entre secciones
- **Intersection Observer**: Animaciones basadas en scroll
- **Counter Animations**: Animación de números estadísticos
- **Parallax Effects**: Efectos de profundidad sutil
- **Ripple Effects**: Feedback visual en botones

### CSS
- **CSS Grid & Flexbox**: Layouts responsivos modernos
- **CSS Custom Properties**: Variables para consistencia
- **Backdrop Filter**: Efectos de desenfoque moderno
- **CSS Animations**: Transiciones y efectos suaves
- **Media Queries**: Adaptabilidad móvil

### Accesibilidad
- **Semántica HTML5**: Estructura accesible
- **Navegación por teclado**: Soporte completo
- **Contraste**: Cumple estándares WCAG
- **Responsive**: Usable en todos los dispositivos

## 📈 Métricas del Proyecto

### Datos Presentados
- **293 cursos** disponibles en la plataforma
- **61 docentes** capacitados
- **20 instancias** formativas ejecutadas
- **94% satisfacción** general del programa
- **14+ programas** académicos participantes

### Resultados Destacados
- 77% de aprobación en cursos
- 73.6% del personal técnico capacitado
- 96% recomendaría la formación
- 16 experiencias innovadoras sistematizadas

## 🚀 Despliegue

### Hosting Estático
Ideal para sitios como:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Firebase Hosting**

### Configuración de Servidor
```nginx
# Ejemplo para Nginx
location / {
    try_files $uri $uri/ /index.html;
    add_header Cache-Control "public, max-age=31536000";
}
```

## 🤝 Contribución

Para contribuir al proyecto:
1. Revisa la estructura de archivos
2. Mantén la consistencia de estilo
3. Prueba en múltiples dispositivos
4. Documenta cambios significativos

## 📄 Licencia

Este proyecto es propiedad de la Universidad Metropolitana de Ciencias de la Educación (UMCE).

## 📞 Contacto

- **Institución**: Universidad Metropolitana de Ciencias de la Educación
- **Dirección**: Av. José Pedro Alessandri 774, Ñuñoa, Santiago
- **Email**: udfv@umce.cl
- **Web**: https://www.umce.cl

---

**Desarrollado para la presentación del Proyecto UMC21992**  
*Transformando la educación a través de la innovación tecnológica* 🎓✨