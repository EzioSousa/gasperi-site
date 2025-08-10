// 1. Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 2. Validação simples de formulário
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const msg = form.mensagem.value.trim();

    if (!nome || !email || !msg) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos.");
    }
  });
}

// 3. Animação nos cards ao passar o mouse
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

// 4. Botão WhatsApp flutuante com efeito de clique
const whatsappBtn = document.querySelector('.whatsapp-button');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    whatsappBtn.classList.add('clicked');
    setTimeout(() => {
      whatsappBtn.classList.remove('clicked');
    }, 200);
  });
}



// 6. Simulação de carregamento de conteúdo (como projetos)
window.addEventListener('load', () => {
  const digitalCard = document.querySelector('.card-container .card');
  if (digitalCard) {
    setTimeout(() => {
      digitalCard.insertAdjacentHTML('beforeend', `<div class="badge">🔥 Atualizado</div>`);
    }, 2000); // Simula carregamento
  }
});
