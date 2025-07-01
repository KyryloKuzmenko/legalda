document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-list-item');

  faqItems.forEach(item => {
    const wrap = item.querySelector('.faq-wrap');
    const button = item.querySelector('.faq-open-acc');
    const hidden = item.querySelector('.faq-hidden');
    const content = item.querySelector('.faq-hidden-text');
    const arrow = item.querySelector('.arrow-down');
    const arrowDesktop = item.querySelector('.arrow-down-desktop');

    hidden.style.maxHeight = '0';
    hidden.style.overflow = 'hidden';
    // hidden.style.transition = 'max-height 0.4s ease';

    const toggleAccordion = () => {
      const isActive = item.classList.contains('active');

      if (isActive) {
        item.classList.remove('active');
        hidden.style.maxHeight = '0';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
        if (arrowDesktop) arrowDesktop.style.transform = 'rotate(0deg)';
      } else {
        item.classList.add('active');
        hidden.style.maxHeight = content.scrollHeight + 'px';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        if (arrowDesktop) arrowDesktop.style.transform = 'rotate(180deg)';
      }
    };

    wrap.addEventListener('click', toggleAccordion);
    button.addEventListener('click', e => {
      e.stopPropagation();
      toggleAccordion();
    });
  });
});
