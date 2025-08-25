# Assets - Recursos del Sitio UMCE Virtual

Esta carpeta contiene todos los recursos visuales del sitio web de presentación del Proyecto UMC21992.

## 📁 Estructura de Archivos

```
assets/
├── README.md           # Este archivo
├── umce-logo.png       # Logo oficial de la UMCE
├── icon-192.png        # Ícono PWA 192x192px
├── icon-512.png        # Ícono PWA 512x512px
├── favicon.ico         # Favicon del sitio
├── og-image.jpg        # Imagen para redes sociales
└── screenshots/        # Capturas del sitio
    ├── desktop.png
    ├── tablet.png
    └── mobile.png
```

## 🎨 Especificaciones de Imágenes

### Logo UMCE (umce-logo.png)
- **Formato**: PNG con transparencia
- **Tamaño**: 200x200px mínimo
- **Uso**: Header, footer, elementos de marca
- **Calidad**: Alta resolución para pantallas Retina

### Íconos PWA
- **icon-192.png**: 192x192px, formato PNG
- **icon-512.png**: 512x512px, formato PNG
- **Uso**: Progressive Web App, instalación en dispositivos
- **Estilo**: Minimalista, colores UMCE

### Favicon
- **favicon.ico**: 32x32px, formato ICO
- **Uso**: Pestaña del navegador
- **Diseño**: Logo UMCE simplificado

### Open Graph Image (og-image.jpg)
- **Formato**: JPG optimizado
- **Tamaño**: 1200x630px (ratio 1.91:1)
- **Uso**: Previsualización en redes sociales
- **Contenido**: Logo UMCE + título del proyecto

## 🔧 Optimización

Todas las imágenes deben estar optimizadas para web:
- **Compresión**: Sin pérdida de calidad visual
- **Formato**: PNG para transparencias, JPG para fotos
- **Tamaño**: Mínimo necesario para cada uso
- **Retina**: 2x para pantallas de alta densidad

## 📱 Responsive Images

Para diferentes dispositivos:
- **Desktop**: Imágenes full resolution
- **Tablet**: 75% del tamaño original
- **Mobile**: 50% del tamaño original

## 🎯 Directrices de Marca

### Colores UMCE
- **Azul principal**: #007AFF
- **Azul secundario**: #5856D6
- **Grises**: #1D1D1F, #86868B

### Estilo Visual
- **Minimalista**: Diseño limpio y moderno
- **Profesional**: Apropiado para contexto académico
- **Tecnológico**: Refleja innovación digital

## 📋 Lista de Imágenes Necesarias

### Prioritarias
- [ ] Logo oficial UMCE (transparente)
- [ ] Favicon personalizado
- [ ] Ícono PWA 192px
- [ ] Ícono PWA 512px

### Opcionales
- [ ] Imagen hero background
- [ ] Íconos de redes sociales
- [ ] Imagen campus UMCE
- [ ] Gráficos ilustrativos
- [ ] Screenshots del sitio

## 🚀 Implementación

### En HTML
```html
<!-- Logo en header -->
<img src="assets/umce-logo.png" alt="UMCE" class="logo">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">

<!-- PWA Icons -->
<link rel="apple-touch-icon" href="assets/icon-192.png">

<!-- Open Graph -->
<meta property="og:image" content="assets/og-image.jpg">
```

### En CSS
```css
.logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

/* Responsive images */
@media (max-width: 768px) {
    .hero-image {
        background-image: url('assets/hero-mobile.jpg');
    }
}
```

## 📞 Solicitud de Recursos

Para obtener los recursos oficiales de la UMCE:
1. Contactar a la Dirección de Comunicaciones
2. Solicitar logo vectorial oficial
3. Verificar directrices de marca institucional
4. Obtener aprobación para uso en el proyecto

---

*Nota: Todos los recursos visuales deben cumplir con las directrices de marca de la UMCE y tener los permisos correspondientes para su uso.*