ÁLBUM DIGITAL DE LAURA — EDITABLE

IMPORTANTE: sí, puedes editarlo tú. No hace falta pagar ninguna plataforma ni saber programar mucho.

VER EL ÁLBUM EN TU ORDENADOR
1. Descomprime el ZIP.
2. Abre la carpeta laura_album.
3. Haz doble clic en index.html. Se abrirá en el navegador.

CAMBIAR LOS TEXTOS Y DEDICATORIAS
1. Abre content.js con el Bloc de notas (o mejor, Visual Studio Code).
2. Cambia el texto que aparece entre comillas después de title, intro, letterText, noteText, finalText, etc.
3. Guarda el archivo y vuelve a cargar la página en el navegador.
4. Los títulos y mensajes de cada foto se editan en los campos title y caption de cada bloque de memories.

CAMBIAR UNA FOTO
1. Abre la carpeta images.
2. Sustituye la foto por otra usando exactamente el mismo nombre de archivo (por ejemplo page-01.jpg).
3. Recarga el álbum.

AÑADIR O QUITAR FOTOS
- Cada foto está en content.js, dentro de memories, con image, title y caption.
- Para añadir una foto, copia un bloque completo de memories, cambia el nombre del archivo y los textos, y mete la foto en images/.
- Para quitar una foto, elimina su bloque entero de memories.
- Consejo: conserva las comas entre bloques y no borres las comillas.

PUBLICARLO EN GITHUB PAGES
1. Descomprime el ZIP.
2. Sube el contenido de la carpeta laura_album (index.html, styles.css, script.js, content.js e images/) a un repositorio de GitHub.
3. En GitHub, entra en Settings > Pages y activa la publicación desde la rama principal (root).
4. GitHub te dará una dirección pública. Ábrela en el móvil para comprobar que funciona.
5. Graba esa dirección pública en el NFC. No grabes una ruta del ordenador ni un enlace a index.html local.

Si lo pones dentro de una carpeta de tu repositorio NFCstars, la dirección pública será la URL de GitHub Pages seguida del nombre de esa carpeta.

PRIVACIDAD
El álbum solo mostrará las fotos y los textos que incluyas. Si lo publicas en GitHub Pages, cualquier persona que tenga el enlace podrá verlo; evita incluir información que quieras mantener privada.


AÑADIR O EDITAR LA SEGUNDA DEDICATORIA
Abre content.js y busca dedicationTitle, dedicationText y dedicationSignature. Cambia el texto entre comillas por tus propias palabras. Puedes escribir una dedicatoria larga; la página adapta el texto automáticamente. Guarda los cambios y vuelve a subir los archivos a GitHub Pages.
