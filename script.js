document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FFFFFF" // Change the color here
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 8,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2, // Adjust the size of particles here
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 80,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            // Rest of your configuration options...
        },
        // Rest of your configuration options...
    });

    // Redirect when clicking on the particle animation
    document.getElementById('particles-js').addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5502/index.html'; // Your local URL
    });
});
