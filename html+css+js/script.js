document.querySelectorAll(".carrossel").forEach((carousel) => {
  const track = carousel.querySelector(".cards-track");
  const btnLeft = carousel.querySelector(".left-arrow");
  const btnRight = carousel.querySelector(".right-arrow");
  const dots = carousel.querySelectorAll(".dot");

  let currentSlide = 0;

  function getSlideWidth() {
    return track.clientWidth;
  }

  function getTotalSlides() {
    return Math.ceil(track.scrollWidth / track.clientWidth);
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  btnRight.addEventListener("click", () => {
    const totalSlides = getTotalSlides();
    if (currentSlide < totalSlides - 1) currentSlide++;
    track.scrollTo({
      left: currentSlide * getSlideWidth(),
      behavior: "smooth",
    });
    updateDots();
  });

  btnLeft.addEventListener("click", () => {
    if (currentSlide > 0) currentSlide--;
    track.scrollTo({
      left: currentSlide * getSlideWidth(),
      behavior: "smooth",
    });
    updateDots();
  });
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((acc) => {
  const header = acc.querySelector(".accordion-header");
  const content = acc.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    const isOpen = acc.classList.toggle("open");

    if (isOpen) {
      content.hidden = false;
    } else {
      content.hidden = true;
    }
  });
});

const btnOpen = document.getElementById("botao-abrir-menu");
const btnClose = document.getElementById("botao-fechar-menu");
const menu = document.getElementById("menu-mobile");
const overlay = document.getElementById("overlay");

btnOpen.addEventListener("click", () => {
  menu.classList.add("ativo");
  overlay.classList.add("ativo");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("ativo");
  overlay.classList.remove("ativo");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("ativo");
  overlay.classList.remove("ativo");
});

const data = {
  moda: [
    "Camisetas",
    "Jaquetas",
    "Calças",
    "Acessórios",
    "Sapatos",
    "Saias",
    "Vestidos",
    "Meias",
  ],
  casa: [
    "Decoração",
    "Cozinha",
    "Iluminação",
    "Cama e Banho",
    "Móveis",
    "Organização",
    "Jardinagem",
  ],
  esporte: [
    "Fitness",
    "Bolas",
    "Academia",
    "Bicicletas",
    "Roupas esportivas",
    "Acessórios",
  ],
  informatica: [
    "Teclados",
    "Monitores",
    "Mouses",
    "Notebooks",
    "Acessórios",
    "Placas",
  ],
  beleza: ["Maquiagem", "Cuidados com a pele", "Perfumes", "Cabelos"],
  infantil: ["Roupas Infantís", "Brinquedos", "Fraldas", "Móveis Infantis"],
  outros: ["Outlet", "Novidades", "Presentes"],
};

const menuCategorias = document.getElementById("menuCategorias");
const tops = menuCategorias.querySelectorAll(".dep-top");
const dropdown = document.getElementById("megaDropdown");
const listaDepartamentos = document.getElementById("listaDepartamentos");
const catCol1 = document.getElementById("catCol1");
const catCol2 = document.getElementById("catCol2");
const catCol3 = document.getElementById("catCol3");

function populateLeft(activeKey = null) {
  const keys = Object.keys(data);
  listaDepartamentos.innerHTML = keys
    .map((k) => {
      const label = capitalize(k);
      return `<a href="#" data-dep="${k}" class="${
        k === activeKey ? "active" : ""
      }">${label} <span class="chev">›</span></a>`;
    })
    .join("");

  listaDepartamentos.querySelectorAll("a").forEach((a) => {
    a.addEventListener("mouseenter", () => {
      const key = a.dataset.dep;
      listaDepartamentos
        .querySelectorAll("a")
        .forEach((x) => x.classList.remove("active"));
      a.classList.add("active");
      populateCenter(key);
    });
  });
}

function populateCenter(key) {
  const cats = data[key] || [];
  const perCol = Math.ceil(cats.length / 3) || 1;
  const col1 = cats.slice(0, perCol);
  const col2 = cats.slice(perCol, perCol * 2);
  const col3 = cats.slice(perCol * 2);

  function htmlCol(array) {
    if (!array.length) return "";
    return (
      `<div class="cat-title">Categoria</div>` +
      array.map((c) => `<a href="#">${c}</a>`).join("")
    );
  }

  catCol1.innerHTML = htmlCol(col1);
  catCol2.innerHTML = htmlCol(col2);
  catCol3.innerHTML = htmlCol(col3);
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

tops.forEach((t) => {
  t.addEventListener("mouseenter", () => {
    const dep = t.dataset.dep || "todas";

    tops.forEach((x) => x.classList.remove("active"));
    t.classList.add("active");

    dropdown.classList.add("show");

    if (dep === "todas") {
      document.querySelector(".col-esquerda").style.display = "block";
      populateLeft();
      const firstKey = Object.keys(data)[0];
      populateCenter(firstKey);
    } else {
      document.querySelector(".col-esquerda").style.display = "none";
      populateCenter(dep);
    }
  });
});

menuCategorias.addEventListener("mouseleave", () => {
  dropdown.classList.remove("show");
  tops.forEach((x) => x.classList.remove("active"));
});

populateLeft();
populateCenter(Object.keys(data)[0]);

const cardsData = [
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
  {
    imagem: "./public/modelo-camiseta.svg",
    titulo: "Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit",
    original: "R$ 100,00",
    atual: "R$79,90",
    desconto: "10% OFF",
    parcelas: "10x de R$ 7,90",
  },
];

document.querySelectorAll(".cards-track").forEach((track) => {
  track.innerHTML = cardsData
    .map(
      (c) => `
      <div class="card">
        <div class="badge">NOVO</div>
        <img src="${c.imagem}" alt="">
        <div class="card-body">
          <h3 class="card-title">${c.titulo}</h3>
          <div class="prices-card">
            <div>
              <p class="price-original">${c.original}</p>
              <p class="price-current">${c.atual}</p>
            </div>
            <span class="discount-tag">${c.desconto}</span>
          </div>
          <p class="installments">Ou em até <span class="parcelamento">${c.parcelas}</span></p>
          <button class="btn-comprar">Comprar</button>
        </div>
      </div>
    `
    )
    .join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input-pesquisa");
  const inputMobile = document.getElementById("busca-mobile");
  const icone = document.querySelector(".icone");
  const iconeMobile = document.getElementById("teste");
  const resultado = document.getElementById("resultado-busca-desktop");
  const resultadoMobile = document.getElementById("resultado-busca-mobile");

  function mostrarBusca() {
    const texto = input.value.trim() || inputMobile.value.trim();
    resultado.innerHTML = texto
      ? `<p id="resultado">Você buscou por: <span class="destaque">${texto}</span></p>`
      : "Digite algo para buscar.";
    resultadoMobile.innerHTML = texto
      ? `<p id="resultadoMobile">Você buscou por: <span class="destaque">${texto}</span></p>`
      : "Digite algo para buscar.";
  }

  icone.addEventListener("click", mostrarBusca);
  iconeMobile.addEventListener("click", mostrarBusca);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      mostrarBusca();
    }
  });
  inputMobile.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      mostrarBusca();
    }
  });
});
