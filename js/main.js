const mobileMenuToggleBtn = document.getElementById('mobile_menu_toggle_btn')
const mainNav = document.getElementById('main_nav')
const scrollToTopBtn = document.getElementById('scroll_to_top_btn')
const themeHeaderLetters = document.querySelectorAll('.theme-header-letter')
const animationHeaderVideo = document.getElementById('animation_header_video')
const typeWriterWordElement = document.querySelector('.typewriter-word')
const whereWhatWhoImage = document.getElementById('where_what_who_image')
const whereWhatWhoImageTitle = document.getElementById('where_what_who_image_title')
const spareTimeImage = document.getElementById('spare_time_image')
const spareTimeImageTitle = document.getElementById('spare_time_image_title')

const whereWhatWhoImageDescContainer = document.getElementById('where_what_who_image_desc_container')
const spareTimeImageDescContainer = document.getElementById('spare_time_image_desc_container')

const imageTitle = document.getElementById('image_title')


// EVENT LISTENERS //
window.addEventListener('scroll', toggleScrollToTopBtn)
scrollToTopBtn.addEventListener('click', scrollToTop)
mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu)
whereWhatWhoImageDescContainer.addEventListener('click', (e) => updateWhereWhatWhoImage(e))
spareTimeImageDescContainer.addEventListener('click', (e) => updateSpareTimeImage(e))



// FUNCTIONS //

// Toggle Mobile Menu
function toggleMobileMenu()
{
    mobileMenuToggleBtn.classList.toggle('active')
    mainNav.classList.toggle('active')

    updateMobileMenuToggleIcon()
}

function updateMobileMenuToggleIcon()
{
    mobileMenuToggleBtn.classList.contains('fa-bars')
        ? (mobileMenuToggleBtn.classList.remove('fa-bars'), mobileMenuToggleBtn.classList.add('fa-times'))
        : (mobileMenuToggleBtn.classList.add('fa-bars'), mobileMenuToggleBtn.classList.remove('fa-times'))
}



// Toggle Scroll To Top Btn
function toggleScrollToTopBtn()
{
    window.scrollY > 500
        ? scrollToTopBtn.classList.add('active')
        : scrollToTopBtn.classList.remove('active')
}

// Scroll To Top
function scrollToTop()
{
    window.scrollTo(0, 0)
}


// Update Who, What & Where Image
function updateWhereWhatWhoImage(e)
{
    const imageTitle = e.target.dataset.sparetime

    if (e.target.matches('span'))
    {
        whereWhatWhoImage.src = `../images/index_images/${e.target.dataset.location}.webp`
        whereWhatWhoImage.alt = `../images/index_images/${e.target.dataset.location}.webp`
        whereWhatWhoImageTitle.textContent = e.target.dataset.location

        whereWhatWhoImageTitle.textContent = imageTitle.charAt(0).toUpperCase() + imageTitle.slice(1);
    }
}

// // Update Spare Time Image
function updateSpareTimeImage(e)
{
    const imageTitle = e.target.dataset.sparetime

    if (e.target.matches('span'))
    {
        spareTimeImage.src = `../images/index_images/${e.target.dataset.sparetime}.webp`
        spareTimeImage.alt = `../images/index_images/${e.target.dataset.sparetime}.webp`
        spareTimeImageTitle.textContent = e.target.dataset.sparetime

        spareTimeImageTitle.textContent = imageTitle.charAt(0).toUpperCase() + imageTitle.slice(1);
    }
}

