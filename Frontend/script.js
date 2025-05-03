document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open")
    menuToggle.classList.toggle("open")
  })

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Immediately activate all reveal elements on page load
  // This ensures content appears properly when navigating between pages
  const revealElements = document.querySelectorAll(".reveal")
  revealElements.forEach((element) => {
    element.classList.add("active")
  })

  // Add reveal class to elements
  document.querySelectorAll(".team-member, .contact-item, .about-description, .section-title").forEach((el) => {
    el.classList.add("reveal")
    // Immediately activate to ensure content is visible on page navigation
    el.classList.add("active")
  })

  // Staggered animation for team members and contact items
  const teamMembers = document.querySelectorAll(".team-member")
  teamMembers.forEach((member, index) => {
    member.style.transitionDelay = `${0.1 * index}s`
  })

  const contactItems = document.querySelectorAll(".contact-item")
  contactItems.forEach((item, index) => {
    item.style.transitionDelay = `${0.1 * index}s`
  })

  // Add webinar link to all pages' navigation
  const navLinksAll = document.querySelectorAll(".nav-links")
  navLinksAll.forEach((navLink) => {
    // Check if the webinar link already exists
    const webinarLinkExists = Array.from(navLink.children).some(
      (li) => li.querySelector("a")?.getAttribute("href") === "webinar.html",
    )

    // Only add the link if it doesn't exist
    if (!webinarLinkExists) {
      const webinarLi = document.createElement("li")
      const webinarLink = document.createElement("a")
      webinarLink.href = "webinar.html"
      webinarLink.textContent = "Webinar"

      // Check if current page is webinar.html
      if (window.location.pathname.includes("webinar.html")) {
        webinarLink.classList.add("active")
      }

      webinarLi.appendChild(webinarLink)
      navLink.appendChild(webinarLi)
    }
  })
})

// Add page transition effect
document.addEventListener("DOMContentLoaded", () => {
  // Immediately fade in the main content
  const mainContent = document.querySelector("main")
  if (mainContent) {
    mainContent.style.opacity = "0"
    mainContent.style.transform = "translateY(20px)"
    mainContent.style.transition = "opacity 0.5s ease, transform 0.5s ease"

    // Small timeout to ensure the transition happens
    setTimeout(() => {
      mainContent.style.opacity = "1"
      mainContent.style.transform = "translateY(0)"
    }, 50)
  }

  // Handle page navigation with transitions
  const navLinks = document.querySelectorAll(".nav-links a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only apply to internal links that aren't anchor links
      if (this.getAttribute("href").startsWith("#")) return

      e.preventDefault()
      const targetHref = this.getAttribute("href")

      // Fade out current page
      if (mainContent) {
        mainContent.style.opacity = "0"
        mainContent.style.transform = "translateY(20px)"

        // Navigate after transition completes
        setTimeout(() => {
          window.location.href = targetHref
        }, 300)
      } else {
        window.location.href = targetHref
      }
    })
  })
})
