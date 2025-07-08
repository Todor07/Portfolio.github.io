import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('header nav a')
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href')
        if (href.startsWith('#')) {
          e.preventDefault()
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })
    // To-top button show/hide
    const toTopBtn = document.getElementById('toTopBtn')
    const onScroll = () => {
      if (window.scrollY > 750) {
        toTopBtn.classList.add('show')
      } else {
        toTopBtn.classList.remove('show')
      }
    }
    window.addEventListener('scroll', onScroll)
    // To-top button click
    const onToTopClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    toTopBtn.addEventListener('click', onToTopClick)
    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.replaceWith(link.cloneNode(true))
      })
      window.removeEventListener('scroll', onScroll)
      toTopBtn.removeEventListener('click', onToTopClick)
    }
  }, [])

  return (
    <>
      <header>
        <h1>Todor Damyanov</h1>
        <br />
        <img
          src="https://cdn-icons-png.flaticon.com/512/10771/10771017.png"
          alt="PFP"
          className="header_photo"
        />
        <br />
        <br />
        <p>C# Developer • Designer • Creator</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Todor Damyanov. I have well-developed skills in C# programming, with a solid understanding of Object-Oriented Programming principles.
          I enjoy building efficient and maintainable code using C#.
          Alongside backend development, I am proficient in HTML and CSS, which allows me to create well-structured and visually appealing web pages.
          I'm passionate about combining these skills to deliver complete and polished software solutions.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project One</h3>
          <p> - </p>
        </div>
        <div className="project">
          <h3>Project Two</h3>
          <p> - </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/manjkgov" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>Todor Damyanov </p>
      </footer>

      <div className="to-top" id="toTopBtn" title="Jump to top">
        <img
          src="data:image/svg+xml;utf8,<svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20 50L40 30L60 50' stroke='white' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><path d='M28 50L40 38L52 50' stroke='white' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/></svg>"
          alt="Arrow Up"
        />
      </div>
    </>
  )
}

export default App
