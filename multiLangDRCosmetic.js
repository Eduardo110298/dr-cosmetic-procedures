const currentLanguage = (splittedHref) => {
  if (window.location.pathname === '/') return 'en'
  if (window.location.pathname === '/blogs/tag/es') return 'es'
  if (window.location.pathname === '/blogs/tag/es/') return 'es'
  if (window.location.pathname === '/blogs/tag/en') return 'es'
  if (window.location.pathname === '/blogs/tag/en/') return 'en'
  else return splittedHref[0]
}

const changeLanguage = () => {
  if (window.location.pathname === '/') {
    // If the location is the english home then redirect to the spanish home.
    window.location.href = '/home-es'
  } else if (window.location.pathname === '/home-es') {
    // If the location is the spanish home then redirect to the english home.
    window.location.href = '/'
  } else if (
    window.location.pathname === '/blogs/tag/en' ||
    window.location.pathname === '/blogs/tag/en/'
  ) {
    // If the location is the english blog then redirect to the spanish blog.
    window.location.href = '/blogs/tag/es'
  } else if (
    window.location.pathname === '/blogs/tag/es' ||
    window.location.pathname === '/blogs/tag/es/'
  ) {
    // If the location is the spanish blog then redirect to the english blog.
    window.location.href = '/blogs/tag/en'
  } else {
    // Array with the language portion in the first position (due the reverse function)
    let splittedHref = window.location.href.split('-').reverse()
    // Current language
    let currentLang = currentLanguage(splittedHref)
    // Set the correct language identifier to the url
    splittedHref[0] = currentLang === 'es' ? 'en' : 'es'
    // Join the Url Array again
    let newHref = splittedHref.reverse().join('-')
    // Navigate to the correct location
    window.location.href = newHref
  }
}

const translateHeader = () => {
  const menuItems = document.querySelector('.theme-menu > ul').children

  // Change the functionality of the Language Switcher
  menuItems[3].children[0].href = 'javascript:changeLanguage()'

  const lang = currentLanguage(window.location.href.split('-').reverse())
  if (lang === 'es') {
    // Change the header logo href
    document.querySelector('.theme-logo-parent').children[0].href = '/home-es'

    let menuItemAnchors = []

    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i]

      if (i === menuItems.length - 1 && item.dataset.zpMoreMenu !== undefined) {
        const subMenuItems = item.children[1].children // The nested ul > li
        item.children[0].innerText = 'Más'

        for (let item of subMenuItems) {
          const link = item.children[0] // the anchor inside the list item
          menuItemAnchors.push(link)
        }
      } else {
        const link = item.children[0] // the anchor inside the list item
        menuItemAnchors.push(link)
      }
    }
    for (const link of menuItemAnchors) {
      switch (link.text) {
        case 'Doctors':
        case 'Doctors ':
          link.href = '/doctors-es'
          link.text = 'Doctores'
          break
        case 'Get a Quote':
        case 'Get a Quote ':
          link.href = '/get-a-quote-es'
          link.text = 'Cotización'
          break
        case 'Before & After':
        case 'Before & After ':
          link.href = '/before-and-after-es'
          link.text = 'Antes y Después'
          break
        case 'Español':
        case 'Español ':
          link.text = 'English'
          break
        case 'Contact Us':
        case 'Contact Us ':
          link.href = '/contactus-es'
          link.text = 'Contacto'
          break
        case 'Interviews':
        case 'Interviews ':
          link.href = '/interviews-es'
          link.text = 'Entrevistas'
          break
        case 'Press':
        case 'Press ':
          link.href = '/blogs/tag/es'
          link.text = 'Blog'
          break
      }
    }
  }
}

const translateNewsletter = () => {
  const lang = currentLanguage(window.location.href.split('-').reverse())
  if (lang === 'es') {
    document.querySelector('.zpnewsletter-heading span').innerText =
      'Únete a nuestra lista de correos'
    document.querySelector('.zpnewsletter-desc span').innerText =
      'No te pierdas ninguna actualización'
    document.querySelector('.zpnewsletter-email-input-field').placeholder =
      'Correo electrónico'
    document.querySelector(
      '.zpnewsletter-button.zpbutton-type-primary'
    ).innerText = 'Subscribete ahora'
  }
}

const translateFooter = () => {
  const lang = currentLanguage(window.location.href.split('-').reverse())
  if (lang === 'es') {
    document.querySelector(
      '.duink-footer-contact-heading > h3 > span'
    ).innerText = 'CONTACTOS'
    document.querySelector('.duink-footer-santo-domingo span').innerText =
      'Santo domingo, República Dominicana'
    document.querySelectorAll(
      '.duink-footer-still-not-certain h3 span div'
    )[0].innerText = '¿Aún no estás seguro?'
    document.querySelectorAll(
      '.duink-footer-still-not-certain h3 span div'
    )[1].innerText = 'Te entendemos'
    document.querySelector(
      '.duink-footer-still-not-certain-extra-text div > p > span'
    ).innerText =
      'Deje su información de contacto a continuación y permítenos llamarte.'
    document.querySelector('.duink-footer-contact-buttonj div > a').href =
      '/contactus-es'
    document.querySelector(
      '.duink-footer-contact-buttonj div > a > span'
    ).innerText = 'CONTÁCTANOS'
    document.querySelector('.duink-footer-press-link div > a').href =
      '/blogs/tag/es'
    document.querySelector(
      '.duink-footer-press-link div > a > span'
    ).innerText = 'Blog'
    document.querySelector('.duink-footer-doctors-link div > a').href =
      '/doctors-es'
    document.querySelector(
      '.duink-footer-doctors-link div > a > span'
    ).innerText = 'Doctores'
    document.querySelector('.duink-footer-get-a-quote-link div > a').href =
      '/get-a-quote-es'
    document.querySelector(
      '.duink-footer-get-a-quote-link div > a > span'
    ).innerText = 'Cotización'
  }
}

const removeProblematicTextFromBlogArchive = () => {
  // "Blog tagges as" text
  document.querySelector('.theme-blog-list-seo').style.display = 'none'
  // Tags container in sidebar
  document.querySelectorAll('.theme-blog-category-container')[2].style.display =
    'none'
  // Categories and tags container in each blog post in the list
  for (const item of document.querySelectorAll(
    '.theme-blog-part.theme-blog-post-footer-area'
  )) {
    item.style.display = 'none'
  }
}

const removeProblematicTextFromBlogSingle = () => {
  document.querySelector(
    '.theme-blog-part.theme-blog-post-footer-area'
  ).style.display = 'none'
  document.querySelector(
    '.zpsection.theme-single-blog-comment-container'
  ).style.display = 'none'
}

const translateBlogArchive = () => {
  // RSS text
  document.querySelector(
    '.theme-blog-category-container.theme-blog-rss-feed > a > span'
  ).innerText = 'Suscríbete a nuestro RSS Feed'

  // Author text
  for (const item of document.querySelectorAll('.theme-blog-author')) {
    item.innerHTML = item.innerHTML.replace('By', 'Por')
  }

  // Read more text
  for (const item of document.querySelectorAll('.theme-blog-readmore a')) {
    item.text = 'Leer más'
  }

  // Comments text
  for (const item of document.querySelectorAll('.theme-blog-comment a')) {
    item.innerHTML = item.innerHTML.replace('Comment', 'Comentario')
  }
}

const isBlogArchivePage = () =>
  window.location.pathname.substr(0, 10) === '/blogs/tag'

const isBlogSinglePage = () =>
  window.location.pathname.substr(0, 11) === '/blogs/post'

const translateBlogSingle = () => {
  // Author text
  const item = document.querySelector('.theme-blog-author')
  item.innerHTML = item.innerHTML.replace('By', 'Por')
}

const translateBlog = () => {
  const lang = currentLanguage(window.location.href.split('-').reverse())
  if (lang === 'es') {
    if (isBlogArchivePage()) {
      translateBlogArchive()
    } else if (isBlogSinglePage()) {
      translateBlogSingle()
    }
  }
}

const translateSalesIQChat = () => {
  const lang = currentLanguage(window.location.href.split('-').reverse())
  if (lang === 'es') {
    if (document.getElementById('zsiq_float') !== undefined) {
      // Burble texts
      document.getElementById('zsiq_maintitle').innerText =
        'Estamos desconectados'
      document.getElementById('zsiq_maintitle').title = 'Estamos desconectados'
      document.getElementById('zsiq_byline').innerText = 'Deja un mensaje'
      document.getElementById('zsiq_byline').title = 'Deja un mensaje'
      if (document.getElementById('siqiframe')) {
        // Iframe texts
        document
          .getElementById('siqiframe')
          .contentWindow.document.getElementById('attname').innerText =
          'Deja un mensaje'
        document
          .getElementById('siqiframe')
          .contentWindow.document.getElementById('visname').placeholder =
          'Ingrese su nombre'
        document
          .getElementById('siqiframe')
          .contentWindow.document.getElementById('visemail').placeholder =
          'Ingrese su correo electrónico'
        document
          .getElementById('siqiframe')
          .contentWindow.document.getElementById('msgarea').placeholder =
          'Escriba su mensaje aqui y presione en Enviar'
        document
          .getElementById('siqiframe')
          .contentWindow.document.getElementById(
            'sqico-send'
          ).innerHTML = document
          .getElementById('siqiframe')
          .contentWindow.document.getElementById('sqico-send')
          .innerHTML.replace('Submit', 'Enviar')
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return true
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  translateHeader()
  translateNewsletter()
  translateFooter()
  if (isBlogArchivePage()) {
    removeProblematicTextFromBlogArchive()
  } else if (isBlogSinglePage()) {
    removeProblematicTextFromBlogSingle()
  }
  translateBlog()

  const interval = setInterval(() => {
    console.log('iterando..')
    if (translateSalesIQChat()) {
      console.log('traducido!')
      clearInterval(interval)
    }
  }, 3000)
})
