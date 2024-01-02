const topLayer = document.getElementById('top_layer')



topLayer.addEventListener('click', hideTopLayer)


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
