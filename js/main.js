const mobileMenuToggleBtn = document.getElementById('mobile_menu_toggle_btn')
const mainNav = document.getElementById('main_nav')
const slides = document.querySelectorAll('.hero-slide')
const heroPrevSlideBtn = document.getElementById('hero_prev_slide_btn')
const heroNextSlideBtn = document.getElementById('hero_next_slide_btn')



// EVENT LISTENERS //
mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu)
heroPrevSlideBtn.addEventListener('click', previousSlide)
heroNextSlideBtn.addEventListener('click', nextSlide)


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

// FUNCTIONS //

// Previous Slide
function previousSlide()
{
    const currentSlide = document.querySelector('.current')
    currentSlide.classList.remove('current')

    if (currentSlide.previousElementSibling)
    {
        currentSlide.previousElementSibling.classList.add('current')
    }
    else
    {
        slides[slides.length - 1].classList.add('current')
    }
}

// Next Slide
function nextSlide()
{
    const currentSlide = document.querySelector('.current')
    currentSlide.classList.remove('current')

    if (currentSlide.nextElementSibling)
    {
        currentSlide.nextElementSibling.classList.add('current')
    }
    else
    {
        slides[0].classList.add('current')
    }
}

