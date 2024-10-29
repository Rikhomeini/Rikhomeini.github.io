particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 20000,  // Mengurangi jumlah partikel agar tidak terlalu padat
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#ff9000", "#ff0266", "#00ffff"]  // Menggunakan beberapa warna untuk variasi
        },
        "shape": {
          "type": "circle",
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.5,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 6,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 5,  // Kecepatan yang lebih lambat untuk efek yang lebih halus
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"  // Mengubah mode hover menjadi "grab" untuk efek yang lebih menarik
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    }
  );