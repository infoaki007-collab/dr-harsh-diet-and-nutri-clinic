/* css/style.css - Premium Medical Luxury Styles for Dr. Harsh Diet & Nutri Clinic */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
    --emerald-primary: #0A5C36;
    --emerald-dark: #063A22;
    --emerald-light: #168851;
    --mint-bg: #EAF5F0;
    --mint-glow: rgba(10, 92, 54, 0.08);
    --gold-accent: #C5A059;
    --gold-light: #F9F5EC;
    --gold-dark: #A3813E;
    --text-main: #1E293B;
    --text-muted: #64748B;
    --bg-pure: #FFFFFF;
    --bg-offwhite: #F8FAFC;
    --shadow-sm: 0 2px 4px rgba(10, 92, 54, 0.04);
    --shadow-md: 0 10px 25px -5px rgba(10, 92, 54, 0.08);
    --shadow-lg: 0 20px 30px -10px rgba(10, 92, 54, 0.12);
    --glass-bg: rgba(255, 255, 255, 0.85);
    --glass-border: rgba(200, 225, 212, 0.4);
}

html {
    scroll-behavior: smooth;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--text-main);
}

body {
    overflow-x: hidden;
    background-color: var(--bg-pure);
}

/* Custom Luxury Typography */
.font-heading {
    font-family: 'Playfair Display', serif;
}

.font-subheading {
    font-family: 'Outfit', sans-serif;
}

/* Luxury Glassmorphism */
.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
}

.glass-emerald {
    background: rgba(10, 92, 54, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
}

.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: var(--shadow-md);
}

/* Custom Gradients */
.bg-gradient-emerald {
    background: linear-gradient(135deg, var(--emerald-primary) 0%, var(--emerald-dark) 100%);
}

.bg-gradient-radial-mint {
    background: radial-gradient(circle at 50% 0%, var(--mint-bg) 0%, var(--bg-pure) 70%);
}

.text-gradient-gold {
    background: linear-gradient(135deg, #D97706 0%, var(--gold-accent) 50%, #926F34 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-gradient-emerald {
    background: linear-gradient(135deg, var(--emerald-primary) 0%, var(--emerald-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Premium Animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 15px rgba(197, 160, 89, 0.4); }
    50% { box-shadow: 0 0 25px rgba(197, 160, 89, 0.8); }
}

@keyframes pulse-whatsapp {
    0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(37, 211, 102, 0.4); }
    50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(37, 211, 102, 0.8); }
}

.animate-float-slow {
    animation: float 6s ease-in-out infinite;
}

.animate-float-fast {
    animation: float 4s ease-in-out infinite;
}

.animate-glow {
    animation: pulse-glow 3s infinite;
}

.animate-whatsapp {
    animation: pulse-whatsapp 2.5s infinite;
}

/* Custom Hover & Transitions */
.transition-all-custom {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.hover-grow:hover {
    transform: scale(1.02);
}

/* Service Card Premium Styling */
.service-card {
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    border: 1px solid var(--glass-border);
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0%;
    background-color: var(--gold-accent);
    transition: height 0.4s ease;
}

.service-card:hover::before {
    height: 100%;
}

.service-card:hover {
    border-color: var(--gold-accent);
    box-shadow: 0 15px 30px -10px rgba(10, 92, 54, 0.15);
    background-color: #FFFFFF;
}

/* Transformation Before/After Card */
.transformation-card {
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-md);
}

/* Timeline & Process Lines */
.process-step {
    position: relative;
}

@media (min-width: 1024px) {
    .process-line::after {
        content: '';
        position: absolute;
        top: 25px;
        left: 50%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, var(--gold-accent), transparent);
        z-index: 1;
    }
    .process-step:last-child .process-line::after {
        display: none;
    }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #F1F5F9;
}

::-webkit-scrollbar-thumb {
    background: var(--emerald-primary);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--emerald-dark);
}

/* Testimonial slider pills */
.testimonial-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #CBD5E1;
    transition: all 0.3s ease;
}

.testimonial-dot.active {
    width: 32px;
    border-radius: 9999px;
    background-color: var(--emerald-primary);
}

/* Mobile responsive optimization adjustments */
@media (max-width: 768px) {
    .hero-bg-mobile {
        background-position: center top;
    }
}
