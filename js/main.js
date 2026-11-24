(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const projects = [
    {
      name: 'Sora', category: 'Drinks · Identity', image: 'assets/project-lumi.jpg', alt: 'Amber botanical drink bottle with citrus and ice against a red backdrop',
      year: '2025', services: 'Positioning, Naming, Identity, Packaging',
      title: 'A brighter ritual', italic: 'after dark.',
      dek: 'A botanical aperitif with a softer side and a little more sunlight in its outlook.',
      story: 'We gave Sora a point of view built around the small pause before the evening begins. The identity pairs a warm, direct voice with a tactile bottle system designed to feel at home on the table, not hidden behind the bar.'
    },
    {
      name: 'Kinfield', category: 'Beauty · Identity', image: 'assets/project-kin.jpg', alt: 'Forest-green botanical skincare bottle on stone with herbs and linen',
      year: '2025', services: 'Strategy, Identity, Packaging, Art Direction',
      title: 'Care for', italic: 'the in-between.',
      dek: 'Everyday skin care for the parts of life that never fit neatly into a routine.',
      story: 'Kinfield needed to feel considered without feeling precious. We built a quiet, botanical identity around everyday usefulness: clear names, a pared-back palette and packaging that is pleasing to reach for, again and again.'
    },
    {
      name: 'Casa Sol', category: 'Hospitality · Experience', image: 'assets/project-solstice.jpg', alt: 'A quiet modernist hotel overlooking the Mediterranean at golden hour',
      year: '2024', services: 'Positioning, Identity, Digital, Guest Experience',
      title: 'Somewhere', italic: 'to slow down.',
      dek: 'A sunlit coastal stay shaped around the art of doing absolutely nothing.',
      story: 'A new kind of small hotel deserved more than another postcard identity. Casa Sol finds its character in the unhurried details: a generous welcome, a local point of view and a visual language that leaves room to breathe.'
    },
    {
      name: 'Sunday Table', category: 'Food · Packaging', image: 'assets/project-sunday.jpg', alt: 'Fresh tomatoes and bread on a yellow kitchen table',
      year: '2025', services: 'Naming, Identity, Packaging, Campaign',
      title: 'A little more', italic: 'at the table.',
      dek: 'A pantry range for people who believe the best meals are the ones that run long.',
      story: 'We turned a handful of pantry staples into an invitation to gather. The sunny palette, handwritten cues and easy-to-read labels feel familiar from the first glance, while a flexible system makes room for a growing kitchen shelf.'
    },
    {
      name: 'Form & Friends', category: 'Culture · Campaign', image: 'assets/project-form.jpg', alt: 'Two friends walking together through a sunlit European street',
      year: '2024', services: 'Platform, Identity, Campaign, Social',
      title: 'Better when', italic: 'we’re together.',
      dek: 'A culture platform celebrating the lovely, ordinary magic of showing up.',
      story: 'Form & Friends began with a simple thought: culture is something we make with each other. A warm, open identity and a candid campaign gave the platform a way to speak across events, editorial and the everyday.'
    },
    {
      name: 'Open Road', category: 'Outdoor · Identity', image: 'assets/project-roam.jpg', alt: 'A lone hiker walking over a highland ridge',
      year: '2025', services: 'Strategy, Identity, Digital, Campaign',
      title: 'Take the', italic: 'long way.',
      dek: 'Outdoor essentials for people who leave the map folded in their pocket.',
      story: 'Open Road is made for the route that takes longer and turns out better. We created a durable identity system with an adventurous voice, built to move between field notes, kit labels and stories from the trail.'
    },
    {
      name: 'Ritual', category: 'Coffee · Packaging', image: 'assets/project-ritual.jpg', alt: 'Espresso and a coffee tin on a deep blue table',
      year: '2024', services: 'Positioning, Identity, Packaging, E-commerce',
      title: 'A better', italic: 'kind of daily.',
      dek: 'A quietly confident coffee for the first cup, the fifth cup and all the little gaps.',
      story: 'Ritual makes room for coffee as a daily pleasure rather than a performance. We brought a confident typographic identity to a compact range of tins and a clear digital shop, balancing craft with a lighter touch.'
    },
    {
      name: 'Openhouse', category: 'Retail · Experience', image: 'assets/project-openhouse.jpg', alt: 'Warm independent bookshop with shelves of art books',
      year: '2024', services: 'Naming, Identity, Signage, Experience',
      title: 'Come in.', italic: 'Stay awhile.',
      dek: 'An independent bookshop and gathering place built for curious neighbours.',
      story: 'Openhouse is part shop, part living room, part reason to take the longer walk home. The identity keeps things welcoming and flexible, from the front window to the handwritten notes tucked inside a book.'
    },
    {
      name: 'Orbit', category: 'Fragrance · Packaging', image: 'assets/project-orbit.jpg', alt: 'Cobalt glass perfume bottle on a chrome plinth against yellow',
      year: '2025', services: 'Positioning, Identity, Packaging, Art Direction',
      title: 'A scent with', italic: 'its own gravity.',
      dek: 'An independent fragrance house for memories that refuse to stay put.',
      story: 'Orbit treats fragrance like a place you can return to. We created a sharp, tactile packaging world and a naming system that feels open-ended, giving each scent its own orbit while keeping the family unmistakable.'
    },
    {
      name: 'Common Plate', category: 'Food · Community', image: 'assets/project-commons.jpg', alt: 'Friends cooking together in a home kitchen',
      year: '2025', services: 'Strategy, Identity, Community, Campaign',
      title: 'Good food.', italic: 'Good company.',
      dek: 'A neighbourhood food project bringing more people to the same table.',
      story: 'Common Plate is less about what is on the menu and more about who gets a seat. We built an open-hearted identity that travels from market stall to shared supper, with a voice that feels like an invitation from a friend.'
    }
  ];

  const storyDrafts = [
    { type: "Field notes · 04 min", title: "The things we keep are rarely the loudest.", body: "A little thought on the objects, places and ideas we return to. The most memorable things rarely demand attention; they earn it slowly, through care, usefulness and a point of view that feels like it belongs." },
    { type: "Perspective · 03 min", title: "What if the brave choice was to do less?", body: "More is not always more. Sometimes a clearer edit gives a good idea the room it needs to become distinctive. We look at the small decisions that make a brand feel more focused, not less ambitious." },
    { type: "Making · 05 min", title: "A good label is a promise you can hold.", body: "Packaging is a first conversation, a practical tool and a small piece of a brand people bring home. The trick is to make those first few seconds matter without forgetting what the product has to do." },
    { type: "Studio life · 02 min", title: "Making space for the unexpected bit.", body: "The useful moment in a workshop is often the one just after the obvious answer. A short note on staying curious, leaving the door open and letting the right detail find its way into the work." },
    { type: "Culture · 06 min", title: "People notice how you make them feel.", body: "An identity can be smart and still feel distant. Warmth is not decoration; it is a choice in the words, images and small interactions people carry with them." },
    { type: "Good company · 03 min", title: "The table is still the best place to begin.", body: "Good conversations happen when people have something to share. A few observations from the kitchens, studios and long lunches that keep reminding us why collaboration is worth the effort." },
    { type: "Rituals · 04 min", title: "The first cup has a way of setting the tone.", body: "Small rituals can hold a surprising amount of meaning. Good brands make ordinary moments feel considered without asking them to be anything other than ordinary." },
    { type: "Point of view · 03 min", title: "Distinctive doesn’t have to mean difficult.", body: "Being recognisable is useful. Being approachable is useful too. The best identities make room for a strong point of view and a clear invitation in the same breath." },
    { type: "Field notes · 05 min", title: "A good idea knows when to travel light.", body: "A flexible idea is not a vague one. It knows what matters most, so it can adapt to a new place, a new audience or a new format without losing its way." },
    { type: "Packaging · 04 min", title: "What happens after the unboxing?", body: "A package has a life before it reaches the shelf and long after it comes home. First impressions matter; so does the everyday experience that follows." },
    { type: "Culture · 03 min", title: "A shared table is a small public square.", body: "A table is a place to be fed, but also a place to listen, learn and meet somebody new. That simple thought shaped the Common Plate identity." },
    { type: "Studio notes · 02 min", title: "Start with the little thing everyone overlooks.", body: "The memorable detail is often hiding in plain sight: the local phrase, the familiar gesture, the welcome that feels just right. Look closely enough and a brand’s most ownable idea is already there." },
    { type: "Thinking · 04 min", title: "The best brief is a conversation we keep having.", body: "A brief is a starting point, not a fence. The useful questions keep coming as we learn more about the business, the people around it and the problem worth solving." },
    { type: "Field notes · 03 min", title: "Small changes can open a different door.", body: "A new direction does not always need a dramatic gesture. Sometimes one honest detail shifts the whole picture and gives a familiar offer a fresh reason to be noticed." },
    { type: "Perspective · 05 min", title: "When new doesn’t need to mean different.", body: "There is a difference between chasing novelty and finding a better way forward. The strongest refreshes keep what people value and make the next chapter feel natural." },
    { type: "Naming · 04 min", title: "A name should leave room for the person using it.", body: "The best names are easy to say and generous with meaning. They make sense at first glance, then reveal a little more as the business grows into them." },
    { type: "Design · 03 min", title: "Nobody remembers a brand’s perfect moodboard.", body: "A reference can start a conversation, but it cannot finish the work. The useful part is finding the idea underneath it and making something only this brand could own." },
    { type: "Good company · 02 min", title: "A neighbourhood is built on small hellos.", body: "Local character is made of ordinary encounters: a familiar face, a remembered order, a door held open. Those small exchanges can tell a bigger story about belonging." },
    { type: "Making · 05 min", title: "What a good launch leaves behind.", body: "A launch gets attention for a moment. A good identity keeps doing its job after the banners come down, helping people recognise the business and find their way back." },
    { type: "Studio notes · 03 min", title: "The most useful question is usually the plain one.", body: "When a project gets tangled, a simple question can clear a surprising amount of space. What is this for? Who needs it? What would make it genuinely better?" },
    { type: "Packaging · 04 min", title: "Let the product speak. Then give it a voice.", body: "A good package lets the product take the lead. Clear information, a little character and a thoughtful material choice can do more than decoration ever will." },
    { type: "Identity · 05 min", title: "A brand system shouldn’t need a long explanation.", body: "A system is working when people can use it with confidence. Good rules make room for expression while keeping the everyday decisions simple." },
    { type: "Perspective · 03 min", title: "The case for keeping a little rough edge.", body: "Not every corner needs polishing. A human detail, a mark of the hand or a voice with a real point of view can make a considered brand feel more alive." },
    { type: "Colour · 02 min", title: "Good colour doesn’t have to shout.", body: "Colour can make a quiet promise just as well as a bold one. The important thing is knowing what it needs to say, and where the rest of the palette should step aside." },
    { type: "Art direction · 04 min", title: "Keep the picture that doesn’t fit the deck.", body: "The image that feels a little out of place can be the one that gives a campaign its pulse. Follow the story, not the tidy grid, and see where it takes you." },
    { type: "Experience · 05 min", title: "What makes a shop feel like someone thought of you?", body: "A good retail experience is full of small acts of care: a clear sign, a useful pause, a person who knows when to step in. The room does not have to be large to feel generous." },
    { type: "Words · 03 min", title: "The smallest message can do the biggest work.", body: "A line on a label, a note after checkout or a sign by the door may only have a few words. It still deserves the same attention as the headline." },
    { type: "Identity · 04 min", title: "You can be clear without being literal.", body: "A brand can communicate exactly what it is without showing the most obvious picture of it. Clarity comes from the idea holding together, not from spelling everything out." },
    { type: "Culture · 03 min", title: "People don’t need another reason to scroll.", body: "The internet is already full. A good campaign earns a moment by offering something worth noticing: a useful thought, a fresh image or a story that feels like it came from a person." },
    { type: "Packaging · 04 min", title: "Make the first unboxing feel like the second purchase.", body: "The moment a package is opened is a beginning, not a finale. A careful detail can make the product easier to use and give someone a reason to choose it again." },
    { type: "Thinking · 05 min", title: "How long should a trend stay in the room?", body: "Trends can be useful guests. We ask what they bring to the conversation, what they help people notice and when it is time to let them move along." },
    { type: "Studio life · 03 min", title: "A little humour can carry a lot of weight.", body: "A well-timed smile can make a complex idea easier to remember. It works best when it grows out of the brand’s character, rather than being added on at the end." },
    { type: "Field notes · 04 min", title: "Sometimes the familiar is the interesting place to start.", body: "A shared reference gives people somewhere to meet. The craft is in seeing it from a new angle and making the familiar feel newly worth a look." },
    { type: "Brand voice · 05 min", title: "No one follows a brand manual. They follow a feeling.", body: "A guide can help a team stay consistent, but people meet the brand in real moments. The voice, response and little choices need to feel like the same person is there." },
    { type: "Making · 02 min", title: "Try saying it out loud before you set it in type.", body: "Read the line aloud. If it feels awkward in a room, it probably will on a screen too. A spoken sentence has a way of finding the words that actually belong." },
    { type: "Campaigns · 04 min", title: "A campaign can make space for a quiet detail.", body: "Not every image needs to explain the whole story. A single detail, given enough space, can invite people to look a little closer and stay for the next frame." },
    { type: "Process · 03 min", title: "What changes when you let the room lead?", body: "The best work often comes from listening to the place it will live. A shop, a kitchen or a neighbourhood can offer clues no desk research can quite replace." },
    { type: "Design systems · 05 min", title: "Build a toolkit, not a straitjacket.", body: "A useful identity has enough structure to stay recognisable and enough give to feel fresh. It should make the next good decision easier, not make every decision for you." },
    { type: "Perspective · 03 min", title: "There’s usually a better way to say premium.", body: "Quality can be shown through care, restraint and a product that keeps its promises. It does not need to borrow the same old signals to feel valuable." },
    { type: "Experience · 04 min", title: "Good service is part of the brand, too.", body: "A promise is only as good as the moment it is kept. The experience after the first impression is where people decide whether the brand really meant what it said." },
    { type: "Everyday · 02 min", title: "Make the ordinary thing easier to love.", body: "The small, repeated parts of life are worth designing for. A little clarity or care in the everyday can mean more than another feature people rarely use." },
    { type: "Identity · 05 min", title: "A visual identity needs to live past the launch.", body: "A launch is a moment; a brand is a daily practice. Build the pieces so they can keep working across new products, new people and new places." },
    { type: "Studio notes · 03 min", title: "Leave something for people to discover.", body: "Not every answer needs to arrive in the first second. A small layer of discovery gives people a reason to look again, and makes the experience feel like it has a little depth." }
  ];

  const storyImages = [
    { image: 'assets/project-openhouse.jpg', alt: 'Warm independent bookshop with shelves of art books' },
    { image: 'assets/project-roam.jpg', alt: 'A hiker crossing a highland ridge' },
    { image: 'assets/project-sunday.jpg', alt: 'Fresh tomatoes and bread on a yellow kitchen table' },
    { image: 'assets/project-kin.jpg', alt: 'Botanical skincare bottle in natural window light' },
    { image: 'assets/project-form.jpg', alt: 'Two friends walking through a city street' },
    { image: 'assets/project-commons.jpg', alt: 'Friends cooking together in a home kitchen' },
    { image: 'assets/project-ritual.jpg', alt: 'Espresso and a coffee tin on a deep blue table' },
    { image: 'assets/project-orbit.jpg', alt: 'Cobalt perfume bottle against a bright yellow background' },
    { image: 'assets/project-lumi.jpg', alt: 'Amber botanical drink bottle with citrus and ice' },
    { image: 'assets/project-solstice.jpg', alt: 'A quiet coastal hotel in warm afternoon light' }
  ];
  const stories = storyDrafts.map((story, index) => ({ ...story, ...storyImages[index % storyImages.length] }));

  const cities = {
    Lahore: { country: 'Pakistan · Working everywhere', code: 'PK' },
    Karachi: { country: 'Pakistan · By the Arabian Sea', code: 'PK' },
    London: { country: 'United Kingdom · A good connection', code: 'UK' },
    Amsterdam: { country: 'The Netherlands · A good connection', code: 'NL' },
    Dubai: { country: 'United Arab Emirates · Open to the world', code: 'UAE' },
    'New York': { country: 'United States · Working everywhere', code: 'US' },
    Singapore: { country: 'Singapore · A good connection', code: 'SG' },
    Sydney: { country: 'Australia · Working everywhere', code: 'AU' }
  };

  /* Loading curtain */
  const loader = $('.site-loader');
  const hideLoader = () => window.setTimeout(() => loader?.classList.add('is-hidden'), prefersReducedMotion ? 0 : 550);
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader, { once: true });
  window.setTimeout(() => loader?.classList.add('is-hidden'), 2400);

  /* Header, full-screen menu and in-page links */
  const header = $('#site-header');
  const menuButton = $('#menu-toggle');
  const menuPanel = $('#menu-panel');
  const closeMenuButton = $('#menu-close');
  const setMenu = (open) => {
    if (!menuButton || !menuPanel) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menuPanel.setAttribute('aria-hidden', String(!open));
    menuPanel.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-is-open', open);
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  closeMenuButton?.addEventListener('click', () => setMenu(false));
  $$('#menu-panel a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

  /* Hero stills: gentle crossfade, with direct-access dots */
  const heroFrames = $$('.hero-frame');
  const heroDots = $$('[data-hero-dot]');
  let heroIndex = 0;
  let heroTimer;
  const setHero = (index) => {
    if (!heroFrames.length) return;
    heroIndex = (index + heroFrames.length) % heroFrames.length;
    heroFrames.forEach((frame, i) => frame.classList.toggle('is-active', i === heroIndex));
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === heroIndex);
      dot.setAttribute('aria-pressed', String(i === heroIndex));
    });
  };
  const startHeroTimer = () => {
    window.clearInterval(heroTimer);
    if (prefersReducedMotion || document.hidden || heroFrames.length < 2) return;
    heroTimer = window.setInterval(() => setHero(heroIndex + 1), 5400);
  };
  heroDots.forEach((dot) => dot.addEventListener('click', () => { setHero(Number(dot.dataset.heroDot)); startHeroTimer(); }));
  document.addEventListener('visibilitychange', startHeroTimer);
  startHeroTimer();

  /* Subtle pointer drift on the opening film-still */
  const hero = $('.hero');
  if (finePointer && hero && !prefersReducedMotion) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - .5) * 8;
      hero.style.setProperty('--px', `${x}px`);
      hero.style.setProperty('--py', `${y}px`);
    });
    hero.addEventListener('pointerleave', () => { hero.style.setProperty('--px', '0px'); hero.style.setProperty('--py', '0px'); });
  }

  /* Reveal as sections enter view */
  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -5% 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else revealItems.forEach((item) => item.classList.add('is-visible'));

  /* Scroll-linked featured gallery */
  const featureSection = $('.featured-work');
  const featureTrack = $('#featured-track');
  const featureSlides = $$('[data-feature-slide]');
  const featureCurrent = $('#feature-current');
  const featureSegments = $$('[data-feature-index]');
  let activeFeature = 0;
  let scrollQueued = false;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const setFeatureState = (index) => {
    activeFeature = clamp(index, 0, featureSlides.length - 1);
    featureSlides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === activeFeature);
      const inactive = i !== activeFeature && !prefersReducedMotion;
      slide.setAttribute('aria-hidden', String(inactive));
      if ('inert' in slide) slide.inert = inactive;
    });
    featureSegments.forEach((segment, i) => {
      segment.classList.toggle('is-active', i === activeFeature);
      if (i === activeFeature) segment.setAttribute('aria-current', 'true');
      else segment.removeAttribute('aria-current');
    });
    if (featureCurrent) featureCurrent.textContent = String(activeFeature + 1).padStart(2, '0');
  };

  const updateScrollState = () => {
    scrollQueued = false;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pageProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    $('#page-progress-bar')?.style.setProperty('transform', `scaleX(${pageProgress})`);
    header?.classList.toggle('is-scrolled', window.scrollY > 42);

    if (featureSection && featureSlides.length) {
      if (prefersReducedMotion) {
        const visibleCenter = window.innerHeight * .5;
        let nearest = 0;
        let nearestDistance = Infinity;
        featureSlides.forEach((slide, i) => {
          const rect = slide.getBoundingClientRect();
          const distance = Math.abs((rect.top + rect.bottom) / 2 - visibleCenter);
          if (distance < nearestDistance) { nearestDistance = distance; nearest = i; }
        });
        setFeatureState(nearest);
      } else {
        const rect = featureSection.getBoundingClientRect();
        const travel = featureSection.offsetHeight - window.innerHeight;
        const progress = travel > 0 ? clamp(-rect.top / travel, 0, 1) : 0;
        if (featureTrack) featureTrack.style.transform = `translate3d(-${progress * (featureSlides.length - 1) * 100}vw, 0, 0)`;
        setFeatureState(Math.round(progress * (featureSlides.length - 1)));
      }
    }
  };
  const requestScrollUpdate = () => {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(updateScrollState);
    }
  };
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate);
  updateScrollState();

  const goToFeature = (index) => {
    const nextIndex = clamp(index, 0, featureSlides.length - 1);
    if (!featureSection) return;
    if (prefersReducedMotion) {
      featureSlides[nextIndex]?.scrollIntoView({ behavior: 'auto', block: 'center' });
      setFeatureState(nextIndex);
      return;
    }
    const sectionTop = window.scrollY + featureSection.getBoundingClientRect().top;
    const travel = Math.max(0, featureSection.offsetHeight - window.innerHeight);
    const ratio = featureSlides.length > 1 ? nextIndex / (featureSlides.length - 1) : 0;
    window.scrollTo({ top: sectionTop + travel * ratio, behavior: 'smooth' });
  };
  $('[data-feature-prev]')?.addEventListener('click', () => goToFeature(activeFeature - 1));
  $('[data-feature-next]')?.addEventListener('click', () => goToFeature(activeFeature + 1));
  featureSegments.forEach((segment) => segment.addEventListener('click', () => goToFeature(Number(segment.dataset.featureIndex))));

  /* Project list/grid and project detail dialog */
  const projectList = $('#project-list');
  $$('[data-view]').forEach((button) => button.addEventListener('click', () => {
    const grid = button.dataset.view === 'grid';
    projectList?.classList.toggle('is-grid', grid);
    $$('[data-view]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
  }));

  const caseDialog = $('#case-dialog');
  const caseDialogContent = $('#case-dialog-content');
  const openProject = (index) => {
    const project = projects[index];
    if (!project || !caseDialog || !caseDialogContent) return;
    caseDialogContent.innerHTML = `
      <div class="case-dialog__layout">
        <div class="case-dialog__image"><img src="${project.image}" alt="${project.alt}"></div>
        <div class="case-dialog__copy">
          <span class="eyebrow">${project.category} · ${project.year}</span>
          <h2 id="case-dialog-title">${project.title}<em>${project.italic}</em></h2>
          <p class="case-dialog__dek">${project.dek}</p>
          <div class="case-dialog__meta">
            <div><span class="eyebrow">The thought</span><span>${project.story}</span></div>
            <div><span class="eyebrow">What we did</span><span>${project.services}</span></div>
          </div>
          <div class="case-dialog__bottom"><span>Concept case study · ${String(index + 1).padStart(2, '0')} / 10</span><button type="button" class="text-link" data-project-next="${(index + 1) % projects.length}">Next project <span aria-hidden="true">↗</span></button></div>
        </div>
      </div>`;
    if (!caseDialog.open) caseDialog.showModal();
  };
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-project-open]');
    if (button) openProject(Number(button.dataset.projectOpen));
    const next = event.target.closest('[data-project-next]');
    if (next) openProject(Number(next.dataset.projectNext));
  });

  /* Notes carousel + story reader */
  const journalTrack = $('#journal-track');
  if (journalTrack) {
    journalTrack.innerHTML = stories.map((story, index) => `
      <button class="journal-card" type="button" data-story-open="${index}" data-cursor="READ" aria-label="Read studio note: ${story.title}">
        <span class="journal-card__image"><img src="${story.image}" alt="${story.alt}" loading="lazy"><span class="journal-card__index">${String(index + 1).padStart(2, '0')}</span></span>
        <span class="journal-card__meta eyebrow">${story.type}</span><span class="journal-card__title">${story.title}</span><span class="journal-card__arrow" aria-hidden="true">↗</span>
      </button>`).join('');
  }
  const moveJournal = (direction) => {
    if (!journalTrack) return;
    const card = $('.journal-card', journalTrack);
    const amount = card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(journalTrack).gap || '0') : journalTrack.clientWidth * .8;
    journalTrack.scrollBy({ left: direction * amount, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };
  $('[data-news-prev]')?.addEventListener('click', () => moveJournal(-1));
  $('[data-news-next]')?.addEventListener('click', () => moveJournal(1));

  const storyDialog = $('#story-dialog');
  const storyDialogContent = $('#story-dialog-content');
  const openStory = (index) => {
    const story = stories[index];
    if (!story || !storyDialog || !storyDialogContent) return;
    storyDialogContent.innerHTML = `
      <div class="story-dialog__inner">
        <div class="story-dialog__image"><img src="${story.image}" alt="${story.alt}"></div>
        <span class="eyebrow">${story.type}</span>
        <h2 id="story-dialog-title">${story.title}</h2>
        <p>${story.body}</p>
        <a class="text-link text-link--light" href="#contact" data-story-contact>Talk it through <span aria-hidden="true">↗</span></a>
      </div>`;
    if (!storyDialog.open) storyDialog.showModal();
  };
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-story-open]');
    if (button) openStory(Number(button.dataset.storyOpen));
    if (event.target.closest('[data-story-contact]')) storyDialog?.close();
  });

  /* City selector */
  const cityName = $('#city-name');
  const cityLine = $('#city-line');
  const cityEmail = $('#city-email');
  $$('[data-city]').forEach((button) => button.addEventListener('click', () => {
    const city = button.dataset.city;
    const info = cities[city];
    if (!info) return;
    $$('[data-city]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    if (cityName) cityName.textContent = city;
    if (cityLine) cityLine.textContent = info.country;
    if (cityEmail) {
      cityEmail.href = `mailto:hello@yourdomain.com?subject=${encodeURIComponent(`Hello from ${city}`)}`;
      cityEmail.innerHTML = `hello@yourdomain.com <span aria-hidden="true">↗</span>`;
    }
  }));

  /* Cookie preferences */
  const cookieBanner = $('#cookie-banner');
  const cookieDialog = $('#cookie-dialog');
  const COOKIE_KEY = 'motifStudioCookieChoice';
  const getCookieChoice = () => {
    try { return JSON.parse(localStorage.getItem(COOKIE_KEY) || 'null'); } catch { return null; }
  };
  const saveCookieChoice = (choice) => {
    try { localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...choice, savedAt: new Date().toISOString() })); } catch { /* local storage may be unavailable in strict preview modes */ }
    cookieBanner?.classList.remove('is-visible');
    cookieDialog?.close();
  };
  const storedChoice = getCookieChoice();
  const analyticsInput = $('#analytics-cookie');
  const marketingInput = $('#marketing-cookie');
  if (storedChoice) {
    if (analyticsInput) analyticsInput.checked = Boolean(storedChoice.analytics);
    if (marketingInput) marketingInput.checked = Boolean(storedChoice.marketing);
  } else {
    window.setTimeout(() => cookieBanner?.classList.add('is-visible'), 1200);
  }
  document.addEventListener('click', (event) => {
    const control = event.target.closest('[data-cookie]');
    if (!control) return;
    const action = control.dataset.cookie;
    if (action === 'accept') saveCookieChoice({ necessary: true, analytics: true, marketing: true });
    if (action === 'reject') saveCookieChoice({ necessary: true, analytics: false, marketing: false });
    if (action === 'manage') cookieDialog?.showModal();
  });
  $('#save-cookie-settings')?.addEventListener('click', () => saveCookieChoice({ necessary: true, analytics: Boolean(analyticsInput?.checked), marketing: Boolean(marketingInput?.checked) }));

  /* All dialog close controls and backdrop clicks */
  $$('[data-dialog-close]').forEach((button) => button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.dialogClose);
    dialog?.close();
  }));
  $$('.site-dialog').forEach((dialog) => dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  }));

  /* Custom cursor: one quiet, context-aware indicator */
  const cursor = $('#cursor');
  const cursorLabel = $('#cursor-label');
  if (finePointer && cursor && cursorLabel) {
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let cursorFrame = 0;
    let overTarget = false;
    const paintCursor = () => {
      cursorX += (mouseX - cursorX) * .22;
      cursorY += (mouseY - cursorY) * .22;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      cursorFrame = window.requestAnimationFrame(paintCursor);
    };
    cursorFrame = window.requestAnimationFrame(paintCursor);
    window.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.classList.add('is-visible');
      const target = event.target.closest('[data-cursor]');
      const label = target?.getAttribute('data-cursor');
      cursorLabel.textContent = label || 'VIEW';
      overTarget = Boolean(target);
      cursor.classList.toggle('is-small', !overTarget);
    }, { passive: true });
    document.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
    window.addEventListener('blur', () => cursor.classList.remove('is-visible'));
    window.addEventListener('pagehide', () => window.cancelAnimationFrame(cursorFrame), { once: true });
  }

  /* Copyright year and initial state */
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  setFeatureState(0);
})();
