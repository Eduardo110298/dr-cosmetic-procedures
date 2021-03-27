const currentLanguage = (splittedHref) =>
  window.location.pathname === '/' ? 'en' : splittedHref[0]

const changeLanguage = () => {
  if (window.location.pathname === '/') {
    // If the location is the english home then redirect to the spanish home.
    window.location.href = '/home-es'
  } else if (window.location.pathname === '/home-es') {
    // If the location is the spanish home then redirect to the english home.
    window.location.href = '/'
  } else if (window.location.href === '/blogs/tag/en') {
    // If the location is the english blog then redirect to the spanish blog.
    window.location.href = '/blogs/tag/es'
  } else if (window.location.href === '/blogs/tag/es') {
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

    // Change the header menu items href and text

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
    console.log(menuItemAnchors)

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
document.addEventListener('DOMContentLoaded', function (event) {
  translateHeader()
})
