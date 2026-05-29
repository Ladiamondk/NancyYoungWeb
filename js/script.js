// Hamburger menu
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // Expand/collapse
  function toggleExpand(panelId, toggleId) {
    const panel = document.getElementById(panelId);
    const toggle = document.getElementById(toggleId);
    panel.classList.toggle('open');
    toggle.classList.toggle('open');
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => observer.observe(el));

  // FormSubmit: show thank you inline
  const form = document.querySelector('.campaign-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Standard FormSubmit submission — activation email will be sent on first submit
    });
  }

// VideoPlay; Auto play video when in view
document.addEventListener("DOMContentLoaded", function () {
  const campaignVideo = document.getElementById("autoplayVideo");
  const audioToggleBtn = document.getElementById("videoAudioToggle");
  
  if (campaignVideo && audioToggleBtn) {
    const mutedIconBlock = audioToggleBtn.querySelector(".audio-icon-muted");
    const playingIconBlock = audioToggleBtn.querySelector(".audio-icon-playing");

    // 1. Audio Toggle Interaction Logic
    audioToggleBtn.addEventListener("click", function () {
      if (campaignVideo.muted) {
        campaignVideo.muted = false;
        mutedIconBlock.style.display = "none";
        playingIconBlock.style.display = "flex";
        audioToggleBtn.setAttribute("aria-label", "Mute video");
      } else {
        campaignVideo.muted = true;
        mutedIconBlock.style.display = "flex";
        playingIconBlock.style.display = "none";
        audioToggleBtn.setAttribute("aria-label", "Unmute video");
      }
    });

    // 2. Scroll Optimization (Intersection Observer API)
    const observerOptions = {
      root: null,
      threshold: 0.4 // Triggers play actions when 40% of the display frame is visible
    };

    const videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          campaignVideo.play().catch(err => {
            console.warn("Autoplay buffered or constrained by local settings:", err);
          });
        } else {
          campaignVideo.pause();
        }
      });
    }, observerOptions);

    videoObserver.observe(campaignVideo);
  }
});