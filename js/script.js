// ================== Articles Database ==================
const articles = {
  1: {
    title: "RUMI",
    text: "Rumi was a 13th-century Persian poet, Islamic scholar, and Sufi mystic.",
    videos: ["3Jzie9vtIIrVLzGf", "NPvysl7mZXFS2jxs", "7xcBDg2JYkg"],
  },
  2: {
    title: "ASTA VAKRA",
    text: "Asta Vakra was an Indian sage known for the Ashtavakra Gita.",
    videos: ["juVv49kn1f4", "Qy7Kda7q_1E", "wGKARmBIPJg"],
  },
  3: {
    title: "DOGEN",
    text: "Dogen was a Japanese Buddhist priest, writer, poet, philosopher, and founder of the Soto school of Zen.",
    videos: ["du9r5U3TR0", "DW_LYyJZApo", "yZ4iBpA3uM0"],
  },
  4: {
    title: "BODHI DHARMA",
    text: "Bodhidharma was a Buddhist monk traditionally credited as the transmitter of Chan Buddhism to China.",
    videos: ["DD6YqFxC77o", "-tAEzEtE5K8", "8D5d0wqTjAg"],
  },
  5: {
    title: "KRISHNA",
    text: "Krishna is a major deity in Hinduism, worshipped across traditions as the supreme god.",
    videos: ["zbIBg3To8ps", "Jdi4CIZE7hY", "Jew_wQISDjc"],
  },
  6: {
    title: "GURDJEFF",
    text: "George Gurdjieff was a mystic and spiritual teacher of Armenian and Greek descent.",
    videos: ["tjyCtwc_vgo", "Hb2u60AXvs0", "aWT5nw9PBbo"],
  },
  7: {
    title: "MILAREPA",
    text: "Milarepa was a Tibetan siddha, poet, and yogi, one of Tibet's most famous saints.",
    videos: ["bqyMgnV7O1U", "OnTmNmWMFHg", "TAoCeZrskYg"],
  },
  8: {
    title: "MAHA AVTAR BABAJI",
    text: "Mahavatar Babaji is a Himalayan yogi who is said to be immortal and a teacher of Kriya Yoga.",
    videos: ["QzMqL33bl68", "YUJ7YsjxKBk", "mx4j5shQkL4"],
  },
  9: {
    title: "J. KRISHNAMURTI",
    text: "Jiddu Krishnamurti was an Indian philosopher, speaker, and writer.",
    videos: ["FWuD1Sh1GYY", "NMg2XhhUMeo", "WsGlIi0TmjQ"],
  },
  10: {
    title: "GAUTAMA BUDDHA",
    text: "Siddhartha Gautama, known as the Buddha, was a spiritual teacher who founded Buddhism.",
    videos: ["i97SqibCJTg", "xaBO6wS4dks", "OohkUWyKjP0"],
  },
  11: {
    title: "ALAN WATTS",
    text: "Alan Watts was a British writer and speaker known for interpreting Eastern philosophy for Western audiences.",
    videos: ["RoCxybz9GAs", "3YddysvFr1s", "TyVX01ZFTp0"],
  },
  12: {
    title: "OSHO",
    text: "Certainly, You are bound to come in conflict with the Old , because your whole Past has been Present Poverty.",
    videos: ["6BQSRx4f67I", "VsXVBAXkXTAI", "OPpdRt7OoX4"],
  },
  13: {
    title: "TRAILINGA SWAMI",
    text: "A great sage from Bengal.",
    videos: ["i-hb965ZU7U", "sxMqqaUbrhQ", "pL8KN5h6GQU"],
  },
  14: {
    title: "THE UPANISHADS",
    text: "There are various types of Upanishads: Katha, Maha, Mandukya, Isha, Mundaka, etc.",
    videos: ["-X6l_UWJ6Kk", "JYvgIo1Gw6w", "DtX6nacxyXc"],
  },
  15: {
    title: "LAO TZU",
    text: "A great Taoist master from the East.",
    videos: ["-lsYJrLrEAM", "mP-fTSn9AKc", "Ldz3n1fPiqs"],
  },
  16: {
    title: "SADGURU J. VASUDEV",
    text: "Indian yogi and mystic, founder of Isha Foundation.",
    videos: ["Yiaatr-Noh0", "_ZOAQuA4tgk", "-d8vWV5HbPk"],
  },
  17: {
    title: "RAMA KRISHNA PARMAHANSA",
    text: "A great Bengali saint - Guru of Swami Vivekananda.",
    videos: ["KBJYKf-4JTE", "CVb3svWzoM0", "WzbXO8wvks0"],
  },
  18: {
    title: "SWAMI YUKTESWAR GIRI",
    text: "Guru of Paramahansa Yogananda, teacher of Kriya Yoga.",
    videos: ["LIzyDlE69K8", "Ot5R54_FA8g", "3Tz-9DYEawU"],
  },
  19: {
    title: "LAHIRI MAHASAYA",
    text: "Associate of Mahavatar Babaji and teacher of Kriya Yoga.",
    videos: ["Rj2D8lbgz8Y", "K2gtgIAK4vU", "847aWi3ASQc"],
  },
  20: {
    title: "SHRI M",
    text: "A spiritual teacher from South India.",
    videos: ["m2aQbL6D2bQ", "qgNr0cQWCcQ", "6-5tthgiz7s"],
  },
};

// ================== Page Elements ==================
const homepage = document.getElementById("homepage");
const detailPage = document.getElementById("detail-page");
const detailTitle = document.getElementById("detail-title");
const detailText = document.getElementById("detail-text");
const videoList = document.getElementById("video-list");

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");

let lastFocusedElement = null;

// ================== Detail Page Logic ==================
function openDetail(id) {
  const article = articles[id];
  if (!article) return;

  lastFocusedElement = document.activeElement;

  homepage.classList.add("hidden");
  detailPage.classList.remove("hidden");

  detailTitle.textContent = article.title;
  detailText.textContent = article.text;

  // Clear and rebuild video list
  videoList.innerHTML = "";
  article.videos.forEach((videoId) => {
    const container = document.createElement("div");

    const wrap = document.createElement("div");
    wrap.className = "video-wrapper";

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = `${article.title} video`;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    wrap.appendChild(iframe);

    const meta = document.createElement("div");
    meta.className = "video-meta";

    const link = document.createElement("a");
    link.href = `https://www.youtube.com/watch?v=${videoId}`;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Open on YouTube";

    meta.appendChild(link);
    container.appendChild(wrap);
    container.appendChild(meta);

    videoList.appendChild(container);
  });

  detailTitle.setAttribute("tabindex", "-1");
  detailTitle.focus();
}

function goBack() {
  detailPage.classList.add("hidden");
  homepage.classList.remove("hidden");
  videoList.innerHTML = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

// ================== Menu Logic ==================
function toggleMenu(forceOpen) {
  const isOpen = sideMenu.classList.contains("open");
  const willOpen = forceOpen !== undefined ? forceOpen : !isOpen;

  sideMenu.classList.toggle("open", willOpen);
  sideMenu.setAttribute("aria-hidden", String(!willOpen));
  menuBtn.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) {
    closeBtn.focus();
  } else {
    menuBtn.focus();
  }
}

function maybeCloseOnEsc(e) {
  if (e.key === "Escape" && sideMenu.classList.contains("open")) {
    toggleMenu(false);
  }
}

// ================== Event Listeners ==================
document.addEventListener("DOMContentLoaded", () => {
  // Cards
  document.querySelectorAll(".card").forEach((card) => {
    const id = card.dataset.id;
    card.addEventListener("click", () => openDetail(id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(id);
      }
    });
  });

  // Back button
  backBtn.addEventListener("click", goBack);

  // Menu buttons
  menuBtn.addEventListener("click", () => toggleMenu());
  closeBtn.addEventListener("click", () => toggleMenu(false));

  // ESC to close menu
  document.addEventListener("keydown", maybeCloseOnEsc);
});
