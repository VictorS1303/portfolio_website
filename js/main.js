const mobileMenuToggleBtn = document.getElementById('mobile_menu_toggle_btn')
const mainNav = document.getElementById('main_nav')
const scrollToTopBtn = document.getElementById('scroll_to_top_btn')

const topLayer = document.getElementById('top_layer')
const themeHeaderLetters = document.querySelectorAll('.theme-header-letter')
const animationHeaderVideo = document.getElementById('animation_header_video')
console.log(themeHeaderLetters)


// EVENT LISTENERS //
window.addEventListener('scroll', toggleScrollToTopBtn)
scrollToTopBtn.addEventListener('click', scrollToTop)
mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu)
topLayer.addEventListener('click', hideTopLayer)

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

// Hide Top Layer
function hideTopLayer()
{
    // Add hidden class to top layer
    topLayer.classList.add('hidden')

    // Check if top layer contains the class of 'hidden'
    if (topLayer.classList.contains('hidden'))
    {
        // Call the runHeaderAnimation function
        runHeaderAnimation()

        // Play Background Video
        animationHeaderVideo.play()
    }
}

// Run Header Animation
function runHeaderAnimation()
{
    // Looping through each span inside the header
    themeHeaderLetters.forEach((themeHeaderLetter) =>
    {
        // Let the header letter animation wait to kick in until 500ms after the top layer has been removed
        setTimeout(() =>
        {
            themeHeaderLetter.style.animationPlayState = 'running'
        }, 500)
    })
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
