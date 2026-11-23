const $ = (s, el = document) => el.querySelector(s)
const $$ = (s, el = document) => [...el.querySelectorAll(s)]

const hero = $('#hero')
const big = $('#big')
const header = $('#header')
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

const cases = {
  krealink: {
    kicker: '1st place, HacXLerate 2026',
    title: 'KreaLink',
    sub: 'AI-creator marketplace with escrow payments',
    img: 'assets/project-krealink.svg',
    alt: 'KreaLink brand dashboard with matched creators and escrow status',
    facts: [
      ['My role', 'Main developer, 44 of 47 commits'],
      ['Team', 'Tech Mafias'],
      ['Brief', 'Kampus.vc problem statement'],
      ['Result', '1st at HacXLerate 2026, then ByteXL Round 2 finalist']
    ],
    about: 'KreaLink connects brands with AI creators. A brand posts a campaign brief, the platform ranks the creators who fit it, and the payment stays in escrow until the work is delivered. It won HacXLerate 2026 at Shoolini and took our team to ByteXL\'s national Round 2 in Hyderabad in October 2026.',
    problem: 'Three kinds of users (brands, creators and admins) touching the same data and real money. Every read and write had to be locked down properly, and nobody should be able to fake a payment from the browser.',
    points: [
      'Separate brand, creator and admin portals on Firebase Authentication',
      'Razorpay checkout with the HMAC-SHA256 signature verified on the server',
      '600+ lines of Firestore security rules, tested in the emulator with 44 passing unit tests',
      'An explainable creator ranking engine built on 8 weighted signals',
      'Gemini / OpenAI to turn messy campaign briefs into structured ones',
      'Admin console with audit logs that can\'t be edited'
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Razorpay', 'Gemini API', 'Vercel', 'node:test']
  },
  webbrothers: {
    kicker: 'Co-founder, Web Brothers Digital',
    title: 'Web Brothers Digital',
    sub: 'Studio site and lead funnel for our web agency',
    img: 'assets/project-webbrothers.svg',
    alt: 'Web Brothers Digital site with enquiry form sending to WhatsApp and email',
    facts: [
      ['My role', 'Co-founder, lead full-stack dev'],
      ['Since', 'May 2026'],
      ['Based in', 'Moradabad'],
      ['Who it\'s for', 'Local businesses']
    ],
    about: 'Web Brothers Digital is the small web studio I co-founded. We design and build websites for local businesses in and around Moradabad, and our own site is the first thing every client sees.',
    problem: 'Most of the shops we talked to had no proper way to collect enquiries online. People would call once, forget, or never hear back. The site had to turn a visitor into a real conversation fast.',
    points: [
      'Studio website on Next.js with TypeScript and Tailwind CSS',
      'Enquiry form handled by Server Actions with validation on the server',
      'Automatic confirmation emails sent through the Resend API',
      'One-tap WhatsApp hand-off so a lead becomes a chat straight away',
      'SEO and OpenGraph metadata so local searches actually find us'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Server Actions', 'Resend API', 'WhatsApp', 'Vercel']
  },
  supermarket: {
    kicker: 'Data analysis',
    title: 'Supermarket Sales Analysis',
    sub: 'Exploratory data analysis in Python',
    img: 'assets/project-supermarket.svg',
    alt: 'Charts showing Saturday as peak revenue day and 19:00 as busiest hour',
    facts: [
      ['Type', 'Solo project'],
      ['When', 'November 2026'],
      ['Data', '1,000+ transactions, 3 branches'],
      ['Questions answered', '16']
    ],
    about: 'An exploratory analysis of supermarket sales data: which days, hours, product lines and customers actually bring in the money.',
    problem: 'The raw data is just rows of invoices with timestamps, branches and product lines. The job was turning that into things a store manager could act on, like when to staff up and what to promote.',
    points: [
      'Cleaned the dataset and fixed dates and types in Pandas',
      'Answered 16 business questions with groupby and pivot tables',
      'Charts for hourly footfall, daily revenue and branch comparisons in Matplotlib and Seaborn',
      'Saturday is the top revenue day and 19:00 is the busiest hour',
      'Female customers spend 44% more on food & beverages, which is useful for targeted offers'
    ],
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter', 'Google Colab']
  },
  calculator: {
    kicker: 'Systems programming',
    title: 'Scientific Calculator in C',
    sub: 'Menu-driven calculator with a browser twin',
    img: 'assets/project-calculator.svg',
    alt: 'C calculator running in a terminal next to its web simulator',
    facts: [
      ['Type', 'Solo project'],
      ['When', 'November 2026'],
      ['Language', 'C, compiled with GCC'],
      ['Extra', 'Web simulator in HTML, CSS, JS']
    ],
    about: 'A scientific calculator written in C, plus a browser version that mirrors exactly what the C program does, one step at a time.',
    problem: 'Calculators usually break on the edge cases: dividing by zero, log of zero or a negative number, square root of a negative, tan at 90°. I wanted the program to catch every one of them instead of printing garbage or crashing.',
    points: [
      'Menu-driven program with a switch-case for every operation',
      'Guards for division by zero, invalid logs, negative roots and undefined tangents',
      'Each operation in its own function, so adding a new one is easy',
      'A web simulator that walks through the same steps as the C code'
    ],
    stack: ['C (GCC)', 'math.h', 'HTML', 'CSS', 'JavaScript']
  }
}

function setTime() {
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(new Date())
  $$('.ist').forEach(el => el.textContent = time)
}

setTime()
setInterval(setTime, 15000)
$('#year').textContent = new Date().getFullYear()

function fitHero() {
  big.style.fontSize = '100px'
  let widest = 0
  $$('.line', big).forEach(line => {
    widest = Math.max(widest, line.getBoundingClientRect().width)
  })
  if (!widest) return

  const mobile = innerWidth <= 768
  const target = mobile ? innerWidth * 0.86 : Math.min(innerWidth * 0.42, 640)
  const maxByHeight = mobile ? 110 : (innerHeight - 380) / 2.6
  const size = Math.max(44, Math.min(100 * target / widest, maxByHeight, 180))
  big.style.fontSize = size.toFixed(1) + 'px'
}

function fitFooter() {
  const name = $('.footer-name')
  const box = name.parentElement
  const pad = parseFloat(getComputedStyle(box).paddingLeft) * 2
  name.style.fontSize = '100px'
  const size = 100 * (box.clientWidth - pad) / name.getBoundingClientRect().width
  name.style.fontSize = size.toFixed(1) + 'px'
}

function fitAll() {
  fitHero()
  fitFooter()
}

fitAll()
if (document.fonts) document.fonts.ready.then(fitAll)

let resizeTimer
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(fitAll, 120)
})

if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    hero.style.setProperty('--mx', (x * 2).toFixed(3))
    hero.style.setProperty('--my', (y * 2).toFixed(3))
  })

  hero.addEventListener('mouseleave', () => {
    hero.style.setProperty('--mx', '0')
    hero.style.setProperty('--my', '0')
  })
}

const burger = $('#burger')
const nav = $('#nav')

function onScroll() {
  const overHero = window.scrollY < hero.offsetHeight - header.offsetHeight
  header.classList.toggle('dark', overHero && !nav.classList.contains('open'))
  header.classList.toggle('scrolled', window.scrollY > 10)
}

window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

function toggleMenu(open) {
  nav.classList.toggle('open', open)
  burger.classList.toggle('open', open)
  burger.setAttribute('aria-expanded', open)
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  document.body.classList.toggle('menu-open', open)
  onScroll()
}

burger.addEventListener('click', () => toggleMenu(!nav.classList.contains('open')))
$$('a', nav).forEach(a => a.addEventListener('click', () => toggleMenu(false)))
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) toggleMenu(false)
})

const navLinks = $$('a', nav)
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id))
  })
}, { rootMargin: '-45% 0px -50% 0px' })

$$('main section[id]').forEach(s => spy.observe(s))

const chips = $$('.chip')
const projectList = $('#projects')
const projects = $$('.project')

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter
    chips.forEach(c => {
      c.classList.toggle('active', c === chip)
      c.setAttribute('aria-pressed', c === chip)
    })
    projectList.classList.toggle('filtered', filter !== 'all')

    projects.forEach(p => {
      const match = filter === 'all' || p.dataset.cat.split(' ').includes(filter)
      p.classList.toggle('hide', !match)
      p.classList.remove('show')
      if (match) {
        void p.offsetWidth
        p.classList.add('show')
      }
    })
  })
})

$$('[data-purpose]').forEach(link => {
  link.addEventListener('click', () => {
    const radio = $(`input[name="purpose"][value="${link.dataset.purpose}"]`)
    if (radio) radio.checked = true
  })
})

const drawer = $('#drawer')
const drawerBody = $('#d-body')
let opener = null

function openCase(id, btn) {
  const c = cases[id]
  if (!c) return
  opener = btn

  $('#d-kicker').textContent = c.kicker
  drawerBody.innerHTML = `
    <h2 class="d-title" id="d-title">${c.title}</h2>
    <p class="d-sub">${c.sub}</p>
    <img class="d-img" src="${c.img}" alt="${c.alt}">
    <dl class="d-facts">
      ${c.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}
    </dl>
    <h3>What it is</h3>
    <p class="d-text">${c.about}</p>
    <h3>The tricky part</h3>
    <p class="d-text">${c.problem}</p>
    <h3>What I built</h3>
    <ul class="d-points">${c.points.map(p => `<li>${p}</li>`).join('')}</ul>
    <h3>Stack</h3>
    <ul class="tags">${c.stack.map(s => `<li>${s}</li>`).join('')}</ul>
    <div class="d-actions">
      <a class="btn btn-dark" href="https://github.com/Anirudh1818" target="_blank" rel="noopener">See my GitHub</a>
      <a class="btn btn-light" href="#contact" id="d-ask">Ask me about it</a>
    </div>
  `

  drawer.showModal()
  drawer.scrollTop = 0
  document.body.classList.add('drawer-open')
  requestAnimationFrame(() => requestAnimationFrame(() => drawer.classList.add('show')))

  $('#d-ask').addEventListener('click', e => {
    e.preventDefault()
    closeCase(() => $('#contact').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }))
  })
}

function closeCase(after) {
  if (!drawer.open) return
  drawer.classList.remove('show')
  document.body.classList.remove('drawer-open')
  setTimeout(() => {
    drawer.close()
    if (typeof after === 'function') after()
    else if (opener) opener.focus()
  }, reduceMotion ? 0 : 420)
}

$$('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => openCase(btn.dataset.open, btn))
})

$('#d-close').addEventListener('click', () => closeCase())

drawer.addEventListener('cancel', e => {
  e.preventDefault()
  closeCase()
})

drawer.addEventListener('click', e => {
  if (e.clientX < drawer.getBoundingClientRect().left) closeCase()
})

const copyBtn = $('#copy-email')

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('saxenaanirudh59@gmail.com')
    copyBtn.textContent = 'Copied'
  } catch (err) {
    const range = document.createRange()
    range.selectNodeContents($('.email-row a'))
    getSelection().removeAllRanges()
    getSelection().addRange(range)
    copyBtn.textContent = 'Press Ctrl+C'
  }
  copyBtn.classList.add('done')
  setTimeout(() => {
    copyBtn.textContent = 'Copy'
    copyBtn.classList.remove('done')
  }, 2200)
})

const form = $('#form')
const notice = $('#notice')
const sendBtn = $('#send')

const fields = [
  {
    input: $('#name'),
    wrap: $('#f-name'),
    err: $('#e-name'),
    check: v => v.length < 2 ? 'Add your name (at least 2 letters).' : ''
  },
  {
    input: $('#email'),
    wrap: $('#f-email'),
    err: $('#e-email'),
    check: v => {
      if (!v) return 'Add your email so I can reply.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "That email doesn't look right. Check for typos."
      return ''
    }
  },
  {
    input: $('#message'),
    wrap: $('#f-msg'),
    err: $('#e-msg'),
    check: v => v.length < 10 ? 'Write a little more, at least 10 characters.' : ''
  }
]

const clean = str => str.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]))

function validate(f) {
  const msg = f.check(f.input.value.trim())
  f.wrap.classList.toggle('bad', !!msg)
  f.err.textContent = msg
  f.input.setAttribute('aria-invalid', msg ? 'true' : 'false')
  return !msg
}

fields.forEach(f => {
  f.input.addEventListener('blur', () => {
    if (f.input.value.trim()) validate(f)
  })
  f.input.addEventListener('input', () => {
    if (f.wrap.classList.contains('bad')) validate(f)
  })
})

function showNotice(type, html) {
  notice.className = 'notice show ' + type
  notice.innerHTML = html
}

form.addEventListener('submit', async e => {
  e.preventDefault()

  const ok = fields.map(validate).every(Boolean)
  if (!ok) {
    showNotice('bad', 'A couple of fields need fixing before this can be sent.')
    fields.find(f => f.wrap.classList.contains('bad')).input.focus()
    return
  }

  if (form.elements._honey.value) return

  const data = Object.fromEntries(new FormData(form))
  data._subject = `Portfolio: ${data.purpose} from ${data.name}`

  sendBtn.disabled = true
  sendBtn.textContent = 'Sending…'
  showNotice('wait', 'Sending your message…')

  let res
  try {
    res = await fetch('https://formsubmit.co/ajax/saxenaanirudh59@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    })
  } catch (err) {
    showNotice('wait', 'Sending through the backup route…')
    form.submit()
    return
  }

  const json = await res.json().catch(() => ({}))
  sendBtn.disabled = false
  sendBtn.textContent = 'Send message'

  if (res.ok && String(json.success) !== 'false') {
    showNotice('ok', `Message sent. Thanks ${clean(data.name)}, I'll reply to <b>${clean(data.email)}</b> soon.`)
    form.reset()
    fields.forEach(f => f.input.setAttribute('aria-invalid', 'false'))
  } else {
    showNotice('bad', `Couldn't send it${json.message ? ' (' + clean(json.message) + ')' : ''}. Email me directly at <a href="mailto:saxenaanirudh59@gmail.com"><b>saxenaanirudh59@gmail.com</b></a>.`)
  }
})
