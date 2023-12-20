const mobileMenuToggleBtn = document.getElementById('mobile_menu_toggle_btn')
const mainNav = document.getElementById('main_nav')

const topLayer = document.getElementById('top_layer')
const animationHeaderSpans = document.querySelectorAll('.animation-header > span')


console.log(animationHeaderSpans)

// EVENT LISTENERS //
mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu)
topLayer.addEventListener('click', hideTopLayer)
// topLayer.addEventListener('pointerout', revealTopLayer)

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

function hideTopLayer()
{
    topLayer.classList.add('hidden')

    if (topLayer.classList.contains('hidden'))
    {
        animationHeaderSpans.forEach((animationHeaderSpan) =>
        {
            setTimeout(() =>
            {
                animationHeaderSpan.style.animationPlayState = 'running'
            }, 400)
        })
    }
}

// function revealTopLayer()
// {
//     topLayer.classList.remove('hidden')
// }