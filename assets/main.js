"use strict";

// Public contact only. Sending happens in the visitor's email application.
const CONTACT_EMAIL = "info@kostovsoftware.com";

const projects = {
  elevator: {
    title: "Elevator Maintenance",
    category: "SaaS / Operations",
    description:
      "Signal Plus Solutions gives elevator maintenance companies one place to organize recurring maintenance, coordinate service teams, and keep a clear history of every elevator.",
    features: [
      "Monthly maintenance planning and service reminders",
      "Elevator records, service history, and field notes",
      "Engineer assignments, locations, and maintenance reports",
    ],
    tags: ["Ruby on Rails", "B2B SaaS", "Operations"],
    url: "https://signalplus.click",
  },
  pazaro: {
    title: "Pazaro",
    category: "Marketplace / Commerce",
    description:
      "A reseller marketplace built to make discovering, listing, and buying pre-loved items straightforward. A responsive React frontend connects to a Ruby on Rails API.",
    features: [
      "Searchable listings with category-specific filters",
      "Listing creation, photos, and seller accounts",
      "Offers and notifications",
    ],
    tags: ["React", "Ruby on Rails", "AWS", "Marketplace"],
  },
  wedding: {
    title: "Wedding Planner",
    category: "Planning / Lifestyle",
    description:
      "A wedding planning platform that brings the details of a big day together, helping couples move from inspiration to an organized celebration.",
    features: [
      "Guest management, invitations, and save-the-date pages",
      "Seating plans, checklists, and financial planning",
      "Venue and product discovery with personal favorites",
    ],
    tags: ["React", "Python", "Planning platform"],
    url: "https://kazhavda.mk",
  },
  nightlife: {
    title: "Nightlife / Kadevecer",
    category: "Discovery / Entertainment",
    description:
      "Kadevecer.online brings local nightlife into one place, connecting people with events, venues, artists, and their next night out.",
    features: [
      "Event, venue, and artist discovery",
      "Venue menus, reviews, and reservations",
      "Articles and AI-assisted event content review",
    ],
    tags: ["Ruby on Rails", "PostgreSQL", "AWS S3", "AI integration"],
    url: "https://kadevecer.online",
  },
  mishel: {
    title: "Mishel Trajkovski",
    category: "Website / Music & Culture",
    description:
      "A personal website for international accordion musician Mishel Trajkovski. A dedicated home for his work, story, and performances.",
    features: [
      "Artist biography and music presentation",
      "Albums, videos, news, and photo galleries",
      "Macedonian and English content",
    ],
    tags: ["Artist website", "Responsive design", "Multilingual"],
  },
  kamin: {
    title: "Kamin Kama",
    category: "Website / Hospitality",
    description:
      "A welcoming online home for Kamin Kama, bringing the restaurant’s food, atmosphere, and practical information together in one accessible place.",
    features: [
      "Restaurant presentation and food photography",
      "Menu and hospitality information",
      "Contact and location details",
    ],
    tags: ["Restaurant website", "Responsive design"],
    url: "https://www.kaminkama.mk",
  },
  champions: {
    title: "Mladi Shampioni",
    category: "Website / Sport & Community",
    description:
      "A website for the Mladi Shampioni football school in Skopje, helping families discover the school and follow the development of its young players.",
    features: [
      "Football school and coaching team presentation",
      "Photo galleries organized by season",
      "Enrollment and contact information",
    ],
    tags: ["Community website", "Photo galleries", "Responsive design"],
  },
  milenium: {
    title: "Milenium Kom",
    category: "Web application / Real Estate",
    description:
      "A Ruby on Rails real estate web application for Milenium Kom. The company can present properties for sale and rent, while visitors can explore listings and find their next home or business space.",
    features: [
      "Property listings for sale and rent",
      "Search by property type and price",
      "Property details and agency contact information",
    ],
    tags: ["Ruby on Rails", "Real estate", "Property listings"],
    url: "https://mileniumkom.mk",
  },
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
}
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(expanded));
  menuButton.setAttribute(
    "aria-label",
    expanded ? "Close navigation" : "Open navigation",
  );
  navigation.classList.toggle("open", expanded);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 601px)").addEventListener("change", closeMenu);

const cards = [...document.querySelectorAll(".project-card")];
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      card.hidden =
        button.dataset.filter !== "all" &&
        card.dataset.category !== button.dataset.filter;
    });
    const count = cards.filter((card) => !card.hidden).length;
    document.querySelector(".work-count").textContent =
      `${count} projects / endless possibilities`;
  });
});

const dialog = document.querySelector("#project-dialog");
let projectTrigger;
document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    projectTrigger = button;
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-category").textContent = project.category;
    document.querySelector("#dialog-description").textContent =
      project.description;
    document.querySelector("#dialog-features").replaceChildren(
      ...project.features.map((feature) => {
        const item = document.createElement("li");
        item.textContent = feature;
        return item;
      }),
    );
    document.querySelector("#dialog-tags").replaceChildren(
      ...project.tags.map((tag) => {
        const item = document.createElement("span");
        item.textContent = tag;
        return item;
      }),
    );
    const link = document.querySelector("#dialog-link");
    link.hidden = !project.url;
    if (project.url) link.href = project.url;
    else link.removeAttribute("href");
    dialog.showModal();
    document.body.classList.add("dialog-open");
    dialog.scrollTop = 0;
    document.querySelector(".dialog-close").focus();
  });
});
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  projectTrigger?.focus({ preventScroll: true });
});
document.querySelector(".dialog-contact").addEventListener("click", () => {
  projectTrigger = null;
  dialog.close();
  document.querySelector("#contact-form input").focus({ preventScroll: true });
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name").trim();
  const message = data.get("message").trim();
  const status = document.querySelector("#form-status");
  if (!name || !message) {
    status.textContent =
      "Please add your name and a few details about your project.";
    return;
  }
  const subject = `Project enquiry: ${data.get("service")}`;
  const body = `Hello Kostov Software Labs,\n\n${message}\n\nInterested in: ${data.get("service")}\n\n${name}\n${data.get("email").trim()}`;
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  status.textContent = `Your email draft is ready to open. Send it from your email app, or email ${CONTACT_EMAIL} directly. Your message has not been sent by this website.`;
});
