/*
  EDITA ESTE ARCHIVO PARA PERSONALIZAR EL ÁLBUM.
  - Cambia los textos entre comillas.
  - En cada recuerdo puedes cambiar el título y el mensaje.
  - Para añadir una foto: pon el archivo en images/ y copia otro bloque dentro de memories.
  - Conserva las comillas y las comas para que el archivo funcione.
*/
const album = {
  eyebrow: "UN REGALO HECHO PARA TI",
  title: "Hola, gordi ❤️",
  intro: "He guardado aquí un montón de recuerdos nuestros. Porque hay momentos que merecen quedarse para siempre y recordarlos.",
  letterTitle: "Un trocito de nosotros",
  letterText: "Amor, quería regalarte algo que no se te olvide ni quede guardado en una caja. Un sitio al que puedas volver cuando te apetezca sonreír, recordar algún día bonito o simplemente acordarte de lo muchísimo que te quiero. Gracias por ser como eres y por todos los momentos que compartimos. Y ojalá que nos queden muchísimos más. ❤️",
  dedicationEyebrow: "OTRO TROCITO PARA TI",
  dedicationTitle: "Hay algo más que quiero decirte",
  dedicationText: "Aquí va esa dedicatoria que sale de mí y que quiero que sea solo tuya. Gracias por hacer especiales todos los momentos, por las risas, por las tonterías que solo nosotros entendemos y por estar a mi lado. Me encanta tenerte en mi vida y quiero seguir llenando contigo páginas como estas. Te elegiría miles y miles de veces mas. Te quiero como a nadie he hecho en mi vida. ❤️",
  dedicationSignature: "Siempre nosotros ❤️",
  galleryEyebrow: "PEQUEÑOS TROZOS DE FELICIDAD",
  galleryTitle: "Momentos que quiero guardar toda la vida",
  noteTitle: "Por si algún día se te olvida",
  noteText: "Eres mi personas favorita. Me encanta compartir la vida contigo, hasta en los días más normales. No hace falta que pase nada fuera de lo común: si estoy contigo, ya tengo un buen día y un recuerdo al que siempre quiero volver.",
  finalTitle: "Y esto no termina aquí…",
  finalText: "Quedan fotos por hacer, sitios por descubrir, tonterías por las que reírnos y un montón de recuerdos que todavía no existen. Tengo ganas de vivirlos contigo amor. Te amo ❤️",
  footerText: "Hecho para ti, con todo mi cariño ❤️",
  memories: [
    { image: "page-01.jpg", title: "Tú y yo", caption: "De todas las fotos, las mejores son las que estamos juntos." },
    { image: "page-02.jpg", title: "Un recuerdo bonito", caption: "Un momento de esos que me alegro poder haber guardado y poder recordar." },
    { image: "page-03.jpg", title: "Nuestro pequeño mundo", caption: "A veces lo mejor del día es simplemente compartirlo contigo." },
    { image: "page-04.jpg", title: "Nuestro primer mundial", caption: "Espero poder vivir mas victorias a tu lado." },
    { image: "page-05.jpg", title: "Una foto más para nosotros", caption: "Y que no falten las fotos, las risas y las ganas." },
    { image: "page-06.jpg", title: "Qué bien se está contigo", caption: "Da igual el lugar, contigo una sonrisa siempre tendré." },
    { image: "page-07.jpg", title: "Aventura juntos", caption: "Me encanta hacer planes contigo por muy sencillos que sean." },
    { image: "page-08.jpg", title: "De nuestros días", caption: "Un pedacito de nuestra historia y nuestros viajes guardado aquí." },
    { image: "page-09.jpg", title: "Sonrisas que se quedan", caption: "Ojalá pudiera escuchar las risas y los momentos de las fotos." },
    { image: "page-10.jpg", title: "Más momentos", caption: "Cualquier plan es tan bonito como tú." },
    { image: "page-11.jpg", title: "Otro momento nuestro", caption: "Nuestro nuevo afán por los animales, los acuarios y los zoos." },
    { image: "page-12.jpg", title: "Juntos sabe mejor", caption: "Mi parte favorita de muchos planes es con quién los comparto." },
    { image: "page-13.jpg", title: "De esos que repetiría", caption: "Si pudiese volver a vivir los momentos, no dudaria en repetirlos contigo." },
    { image: "page-14.jpg", title: "Un recuerdo que guardo", caption: "Una foto tonta de algo que forma parte de nosotros." },
    { image: "page-15.jpg", title: "Nuestro mundo", caption: "Qué suerte poder mirar atrás y encontrar tantos momentos juntos." },
    { image: "page-16.jpg", title: "Siempre tú", caption: "Entre tantas cosas bonitas, tú sigues siendo mi favorita." },
    { image: "page-17.jpg", title: "Un ratito feliz", caption: "No hace falta mucho más para que un día merezca la pena." },
    { image: "page-18.jpg", title: "Contigo por ahí perdidos", caption: "Que sigamos llenando la galería de lugares, momentos y experiencias." },
    { image: "page-19.jpg", title: "De nuestra historia", caption: "Cada foto guarda algo que las palabras no siempre saben contar." },
    { image: "page-20.jpg", title: "Otro para el recuerdo", caption: "Este álbum también es una excusa para decirte que te quiero." },
    { image: "page-21.jpg", title: "Mi persona favorita", caption: "Qué bonito coincidir contigo en esta vida." },
    { image: "page-22.jpg", title: "Un momento más", caption: "Que nunca nos falten motivos para hacernos fotos juntos." },
    { image: "page-23.jpg", title: "Pequeñas aventuras", caption: "Nuestra primera experiencia." },
    { image: "page-24.jpg", title: "De los que hacen sonreír", caption: "Volver a estas fotos siempre me saca una sonrisa." },
    { image: "page-25.jpg", title: "Un recuerdo especial", caption: "He de decir que soy mucho mas piloto que tú." },
    { image: "page-26.jpg", title: "Tú haces el momento", caption: "Lo especial no siempre es lo que hacemos, sino estar juntos." },
    { image: "page-27.jpg", title: "Más momentos así", caption: "Quiero más días que terminen en recuerdos." },
    { image: "page-28.jpg", title: "Nosotros", caption: "Dos personas, mil tonterías y muchas cosas bonitas por vivir." },
    { image: "page-29.jpg", title: "Una foto para volver", caption: "Los mejores momentos, los que estamos solos." },
    { image: "page-30.jpg", title: "Lo bonito de compartir", caption: "Gracias por estar en tantos capítulos de mi vida." },
    { image: "page-31.jpg", title: "Y las que quedan", caption: "Todavía nos quedan muchísimas fotos por hacer, amor." },
    { image: "page-32.jpg", title: "Continuará…", caption: "Esta historia sigue, y me hace ilusión que sea contigo. ❤️" }
  ]
};
