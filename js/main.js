document.addEventListener('DOMContentLoaded', () => {
  // Objeto con las traducciones para ES, EN, DE, IT
  const translations = {
    es: {
      pageTitle: "Jetski Kings - Aventura en el mar",
      nav: {
        home: "Inicio",
        tours: "Tours",
        about: "Sobre Nosotros",
        contact: "Contacto"
      },
      buttons: {
        bookNow: "Reserva Ahora",
        reserve: "Reservar",
        send: "Enviar"
      },
      hero: {
        title: "Alquila un Jetski",
        subtitle: "Vive la mejor experiencia en el mar con nuestras motos de agua",
        button: "Ver Tours"
      },
      tours: {
        title: "Nuestros Tours",
        subtitle: "Descubre lugares increíbles en Mallorca y más allá",
        card1Title: "Tour Costero",
        card1Desc: "Disfruta de un paseo inolvidable a lo largo de la costa, con paradas para nadar y explorar calas escondidas.",
        card2Title: "Atardecer en el Mar",
        card2Desc: "Contempla el atardecer desde una moto de agua y vive un momento mágico en pleno Mediterráneo."
      },
      about: {
        title: "Sobre Jetski Kings",
        paragraph1: "Somos una empresa dedicada a ofrecer experiencias inolvidables en el mar Mediterráneo. Con más de <strong>10 años de experiencia</strong>, nuestro equipo profesional te guiará a través de los mejores rincones costeros.",
        li1: "Equipo experimentado y certificado",
        li2: "Seguridad y comodidad garantizadas",
        li3: "Varias rutas y horarios disponibles",
        li4: "Atención al cliente las 24 horas",
        paragraph2: "¡Descubre la emoción de navegar en moto de agua con nosotros!"
      },
      contact: {
        title: "Contacto y Reservas",
        subtitle: "¿Listo para la aventura? Contáctanos o reserva a continuación.",
        infoTitle: "Información de Contacto",
        phoneLabel: "Teléfono:",
        emailLabel: "Email:",
        addressLabel: "Dirección:",
        schedule: "Horario: Lunes-Domingo, 9am - 8pm"
      },
      form: {
        nameLabel: "Nombre",
        emailLabel: "Correo electrónico",
        tourLabel: "Selecciona un Tour",
        tourOption1: "Tour Costero",
        tourOption2: "Atardecer en el Mar",
        messageLabel: "Mensaje / Peticiones Especiales"
      },
      footer: {
        design: "Diseñado por [AFRM Studio]",
        copyright: "© 2025 Jetski Kings. Todos los derechos reservados."
      }
    },

    en: {
      pageTitle: "Jetski Kings - Sea Adventure",
      nav: {
        home: "Home",
        tours: "Tours",
        about: "About Us",
        contact: "Contact"
      },
      buttons: {
        bookNow: "Book Now",
        reserve: "Reserve",
        send: "Send"
      },
      hero: {
        title: "Rent a Jetski",
        subtitle: "Experience the best sea adventure with our jet skis",
        button: "View Tours"
      },
      tours: {
        title: "Our Tours",
        subtitle: "Discover amazing places in Mallorca and beyond",
        card1Title: "Coastal Tour",
        card1Desc: "Enjoy an unforgettable ride along the coast, with stops for swimming and exploring hidden coves.",
        card2Title: "Sunset on the Sea",
        card2Desc: "Contemplate the sunset from a jet ski and live a magical moment in the Mediterranean."
      },
      about: {
        title: "About Jetski Kings",
        paragraph1: "We are a company dedicated to offering unforgettable experiences in the Mediterranean Sea. With more than <strong>10 years of experience</strong>, our professional team will guide you through the best coastal spots.",
        li1: "Experienced and certified staff",
        li2: "Guaranteed safety and comfort",
        li3: "Multiple routes and schedules available",
        li4: "24/7 customer support",
        paragraph2: "Discover the thrill of riding a jet ski with us!"
      },
      contact: {
        title: "Contact & Reservations",
        subtitle: "Ready for adventure? Contact us or book below.",
        infoTitle: "Contact Information",
        phoneLabel: "Phone:",
        emailLabel: "Email:",
        addressLabel: "Address:",
        schedule: "Opening Hours: Monday-Sunday, 9am - 8pm"
      },
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        tourLabel: "Select a Tour",
        tourOption1: "Coastal Tour",
        tourOption2: "Sunset on the Sea",
        messageLabel: "Message / Special Requests"
      },
      footer: {
        design: "Designed by [AFRM Studio]",
        copyright: "© 2025 Jetski Kings. All Rights Reserved."
      }
    },

    de: {
      pageTitle: "Jetski Kings - Meer Abenteuer",
      nav: {
        home: "Startseite",
        tours: "Touren",
        about: "Über Uns",
        contact: "Kontakt"
      },
      buttons: {
        bookNow: "Jetzt Buchen",
        reserve: "Reservieren",
        send: "Senden"
      },
      hero: {
        title: "Jetski-Verleih",
        subtitle: "Erlebe das beste Abenteuer auf dem Meer mit unseren Jetskis",
        button: "Touren ansehen"
      },
      tours: {
        title: "Unsere Touren",
        subtitle: "Entdecke erstaunliche Orte auf Mallorca und darüber hinaus",
        card1Title: "Küsten Tour",
        card1Desc: "Genieße eine unvergessliche Fahrt entlang der Küste, mit Stopps zum Schwimmen und Erkundung versteckter Buchten.",
        card2Title: "Sonnenuntergang auf dem Meer",
        card2Desc: "Erlebe den Sonnenuntergang von einem Jetski aus und genieße einen magischen Moment im Mittelmeer."
      },
      about: {
        title: "Über Jetski Kings",
        paragraph1: "Wir sind ein Unternehmen, das sich auf unvergessliche Erlebnisse im Mittelmeer spezialisiert hat. Mit mehr als <strong>10 Jahren Erfahrung</strong> führt dich unser professionelles Team zu den schönsten Küstenorten.",
        li1: "Erfahrenes und zertifiziertes Personal",
        li2: "Garantierte Sicherheit und Komfort",
        li3: "Verschiedene Routen und Zeiten verfügbar",
        li4: "24/7 Kundenservice",
        paragraph2: "Entdecke den Nervenkitzel einer Jetski-Fahrt mit uns!"
      },
      contact: {
        title: "Kontakt & Reservierungen",
        subtitle: "Bereit für ein Abenteuer? Kontaktiere uns oder buche unten.",
        infoTitle: "Kontaktinformationen",
        phoneLabel: "Telefon:",
        emailLabel: "E-Mail:",
        addressLabel: "Adresse:",
        schedule: "Öffnungszeiten: Montag-Sonntag, 9 Uhr - 20 Uhr"
      },
      form: {
        nameLabel: "Name",
        emailLabel: "E-Mail",
        tourLabel: "Wähle eine Tour",
        tourOption1: "Küsten Tour",
        tourOption2: "Sonnenuntergang auf dem Meer",
        messageLabel: "Nachricht / Besondere Wünsche"
      },
      footer: {
        design: "Entworfen von [AFRM Studio]",
        copyright: "© 2025 Jetski Kings. Alle Rechte vorbehalten."
      }
    },

    it: {
      pageTitle: "Jetski Kings - Avventura in mare",
      nav: {
        home: "Home",
        tours: "Tour",
        about: "Chi siamo",
        contact: "Contatti"
      },
      buttons: {
        bookNow: "Prenota Ora",
        reserve: "Prenota",
        send: "Invia"
      },
      hero: {
        title: "Noleggia un Jetski",
        subtitle: "Vivi la migliore esperienza in mare con le nostre moto d'acqua",
        button: "Vedi i Tour"
      },
      tours: {
        title: "I Nostri Tour",
        subtitle: "Scopri luoghi incredibili a Maiorca e oltre",
        card1Title: "Tour Costiero",
        card1Desc: "Goditi una corsa indimenticabile lungo la costa, con soste per nuotare ed esplorare calette nascoste.",
        card2Title: "Tramonto sul Mare",
        card2Desc: "Ammira il tramonto da una moto d'acqua e vivi un momento magico nel Mediterraneo."
      },
      about: {
        title: "Chi è Jetski Kings",
        paragraph1: "Siamo un'azienda dedicata a offrire esperienze indimenticabili nel Mar Mediterraneo. Con più di <strong>10 anni di esperienza</strong>, il nostro team professionale ti guiderà attraverso le migliori località costiere.",
        li1: "Staff esperto e certificato",
        li2: "Sicurezza e comfort garantiti",
        li3: "Varie rotte e orari disponibili",
        li4: "Assistenza clienti 24/7",
        paragraph2: "Scopri l'emozione di guidare una moto d'acqua con noi!"
      },
      contact: {
        title: "Contatti & Prenotazioni",
        subtitle: "Pronto per l'avventura? Contattaci o prenota qui sotto.",
        infoTitle: "Informazioni di Contatto",
        phoneLabel: "Telefono:",
        emailLabel: "Email:",
        addressLabel: "Indirizzo:",
        schedule: "Orari di Apertura: Lunedì-Domenica, 9:00 - 20:00"
      },
      form: {
        nameLabel: "Nome",
        emailLabel: "Email",
        tourLabel: "Seleziona un Tour",
        tourOption1: "Tour Costiero",
        tourOption2: "Tramonto sul Mare",
        messageLabel: "Messaggio / Richieste Speciali"
      },
      footer: {
        design: "Progettato da [AFRM Studio]",
        copyright: "© 2025 Jetski Kings. Tutti i diritti riservati."
      }
    }
  };

  // Función para cambiar el idioma
  function setLanguage(lang) {
    // 1) Cambiar el <title> (si deseas traducirlo dinámicamente)
    document.title = translations[lang].pageTitle;

    // 2) Para cada elemento con data-i18n, sustituir el texto
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      // Recorremos la notación del objeto (key1.key2...)
      const text = key.split('.').reduce((obj, i) => obj[i], translations[lang]);
      if (text) {
        // Verificamos si es un input/textarea/select con placeholder/option
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          // Cambiamos placeholder
          element.setAttribute('placeholder', text);
        } else if (element.tagName === 'OPTION') {
          // Para las <option>
          element.textContent = text;
        } else {
          // Para el resto de elementos (div, span, a, p, etc.)
          element.innerHTML = text;
        }
      }
    });
  }

  // Detectar clic en las banderas
  const langLinks = document.querySelectorAll('[data-lang]');
  langLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const lang = link.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Establecer un idioma por defecto, por ejemplo Inglés
  setLanguage('en');

  // Ejemplo de envío de formulario (simulado)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form Submitted! (Simulated)');
      form.reset();
    });
  }
});
