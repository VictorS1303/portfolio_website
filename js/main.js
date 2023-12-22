const mobileMenuToggleBtn = document.getElementById('mobile_menu_toggle_btn')
const mainNav = document.getElementById('main_nav')

const topLayer = document.getElementById('top_layer')
const animationHeaderSpans = document.querySelectorAll('.animation-header > span')
const webHeaderSpans = document.querySelectorAll('.web-header > span')
const contentHeaderSpans = document.querySelectorAll('.content-header > span')
const animationHeaderVideo = document.getElementById('animation_header_video')


// EVENT LISTENERS //
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
    animationHeaderSpans.forEach((animationHeaderSpan) =>
    {
        // Set the play state of each span 'running' 500ms after the top layer has been hidden
        setTimeout(() =>
        {
            animationHeaderSpan.style.animationPlayState = 'running'
        }, 500)
    })


    webHeaderSpans.forEach((webHeaderSpan) =>
    {
        // Set the play state of each span 'running' 500ms after the top layer has been hidden
        setTimeout(() =>
        {
            webHeaderSpan.style.animationPlayState = 'running'
        }, 500)
    })

    contentHeaderSpans.forEach((contentHeaderSpan) =>
    {
        // Set the play state of each span 'running' 500ms after the top layer has been hidden
        setTimeout(() =>
        {
            contentHeaderSpan.style.animationPlayState = 'running'
        }, 500)
    })
}
