import gsap from "gsap";
import { useEffect } from "react";

 function useMicroInteractions() {
  useEffect(() => {
    // Animate buttons
    gsap.utils.toArray('button, a.button-like, .btn').forEach((btn) => {
      gsap.set(btn, { transformOrigin: 'center center' });
      
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, boxShadow: '0 8px 15px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power1.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, boxShadow: 'none', duration: 0.3, ease: 'power1.out' });
      });
      btn.addEventListener('mousedown', () => {
        gsap.to(btn, { scale: 0.95, duration: 0.15, ease: 'power1.out' });
      });
      btn.addEventListener('mouseup', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.15, ease: 'power1.out' });
      });
    });

    // Animate links: color and scale on hover
    gsap.utils.toArray('a').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.03, color: '#4F46E5', duration: 0.3, ease: 'power1.out' });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, color: '', duration: 0.3, ease: 'power1.out' });
      });
    });

    // Animate cards: lift and shadow on hover
    gsap.utils.toArray('.card, .industry-card, .service-card, .process-step, .work-step, .service-detail-card').forEach((card) => {
      card.style.transformOrigin = 'center center';
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, boxShadow: '0 15px 25px rgba(0,0,0,0.15)', duration: 0.4, ease: 'power1.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: 'none', duration: 0.4, ease: 'power1.out' });
      });
    });

    // Animate inputs
    gsap.utils.toArray('input, textarea, select').forEach((input) => {
      input.addEventListener('focus', () => {
        gsap.to(input, { boxShadow: '0 0 10px 2px rgba(79, 70, 229, 0.6)', duration: 0.3, ease: 'power1.out' });
      });
      input.addEventListener('blur', () => {
        gsap.to(input, { boxShadow: 'none', duration: 0.3, ease: 'power1.out' });
      });
    });

   
    const navIcons = gsap.utils.toArray('.nav-icon, .hamburger-btn');
    navIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { rotation: 15, scale: 1.2, duration: 0.25, ease: 'power1.out' });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { rotation: 0, scale: 1, duration: 0.25, ease: 'power1.out' });
      });
    });
  }, []);
}

export default useMicroInteractions;