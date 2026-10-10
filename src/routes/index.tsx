import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Asterisk, Menu, X, MapPin, Code2, PenTool, ShieldCheck, Check, MessageCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import hero from '@/assets/studio-hero.jpg';
import faso from '@/assets/faso-original.jpg.asset.json';
import royal from '@/assets/royal-shop.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Mind Graphix Solution — Design, web & identité de marque' },
    { name: 'description', content: 'Studio digital indépendant à Bobo-Dioulasso. Découvrez nos créations, nos services web, branding et motion design, et parlons de votre projet.' },
    { property: 'og:title', content: 'Mind Graphix Solution — Des idées qui prennent vie' },
    { property: 'og:description', content: 'Du design qui a du sens. Du digital qui fait la différence. Un studio indépendant au Burkina Faso.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const nav = [['realisations', 'Nos projets'], ['services', 'Expertises'], ['agence', 'Le studio'], ['tarifs', 'Nos formules']];
const projects = [
  { name: 'Faso Mode', image: faso.url, category: 'E-commerce', subtitle: 'Le textile burkinabè, à portée de clic.', url: 'https://fasomodeofficielle.vercel.app/', description: 'Une boutique dédiée aux textiles du Burkina Faso : Koko Dunda, Faso Danfani, bassin et pagnes industriels. Un catalogue pensé pour faciliter la découverte des tissus et le passage de commande.', features: ['Catalogue & fiches produits', 'Parcours de commande', 'Gestion de la boutique'], tech: 'Expo · React Native', status: 'Boutique en ligne' },
  { name: 'Royal Shop', image: royal.url, category: 'Boutique en ligne', subtitle: 'Une nouvelle façon de découvrir la mode.', url: 'https://friperie-app.vercel.app/', description: 'Une boutique de vêtements et accessoires à Bobo-Dioulasso, avec livraison dans tout le Burkina Faso. Le site est accessible ; sa prochaine collection est en préparation.', features: ['Catalogue & filtres', 'Interface adaptée au mobile', 'Livraison nationale'], tech: 'Next.js · E-commerce', status: 'Collection en préparation' },
];
const services = [
  { icon: Code2, name: <>Web & applications</>, text: 'Des sites rapides, des boutiques intuitives et des applications utiles. Pensés pour vos clients, jusque sur les réseaux mobiles.', tags: ['Sites vitrines', 'E-commerce', 'Applications', 'Maintenance'], price: '50 000', interest: 'Web & applications' },
  { icon: PenTool, name: <>Branding & identité</>, text: 'Une identité qui vous ressemble et qui se reconnaît. Du premier logo aux supports qui font vivre votre marque au quotidien.', tags: ['Logo', 'Identité visuelle', 'Charte graphique', 'Print'], price: '50 000', interest: 'Branding & identité' },
  { icon: ShieldCheck, name: <>Sécurité & motion</>, text: 'Protéger ce qui compte. Animer ce qui mérite d’être vu. Deux expertises pour un digital plus sûr et plus vivant.', tags: ['Audit sécurité', 'Motion design', 'Animation 2D', 'Vidéo'], price: '75 000', interest: 'Sécurité & motion' },
];
const plans = [
  { name: 'Vitrine Essentielle', type: 'vitrine', price: '50 000', monthly: '2 500', text: 'Une présence claire pour présenter votre activité.', features: ['Vitrine une page', 'Design adapté au mobile', 'Mise en ligne sécurisée'] },
  { name: 'Vitrine Professionnelle', type: 'vitrine', price: '100 000', monthly: '5 000', text: 'Un site plus complet, à l’image de votre entreprise.', features: ['Site vitrine multipage', 'Design personnalisé', 'Accompagnement et entretien'] },
  { name: 'Boutique Essentielle', type: 'boutique', price: '150 000', monthly: '5 000', text: 'L’essentiel pour lancer votre boutique en ligne.', features: ['Boutique adaptée au mobile', 'Catalogue et gestion des produits', 'Réception et suivi des commandes'] },
  { name: 'Boutique Croissance', type: 'boutique', price: '300 000', monthly: '15 000', text: 'Des outils pour structurer et développer vos ventes.', features: ['Tout le forfait Essentielle', 'Outils de suivi des ventes', 'Accompagnement renforcé'] },
  { name: 'Boutique Excellence', type: 'boutique', price: '600 000', monthly: '25 000', text: 'Une solution avancée pour une activité en croissance.', features: ['Tout le forfait Croissance', 'Personnalisation avancée', 'Priorité au support et évolutions'] },
];
const faqs = [
 ['Combien de temps prend un projet ?', 'Un site vitrine prend généralement 2 à 4 semaines. Une application ou une boutique e-commerce nécessite 4 à 12 semaines selon sa complexité. Nous définissons ensemble un planning dès le démarrage.'],
 ['Le premier échange est-il gratuit ?', 'Oui. L’appel de découverte de 30 minutes est gratuit et sans engagement. Nous parlons de vos objectifs, de votre budget et de la solution la plus adaptée.'],
 ['Et après la mise en ligne ?', 'Nous proposons un abonnement d’entretien distinct de la création : dès 2 500 FCFA par mois pour un site vitrine et 5 000 FCFA pour une boutique. Il commence à la mise en ligne.'],
 ['Travaillez-vous à distance ?', 'Oui, partout au Burkina Faso et à l’international. Les échanges se font par WhatsApp, Zoom ou Google Meet, selon votre préférence.'],
 ['Mon site sera-t-il rapide sur mobile ?', 'Nous optimisons les sites pour les connexions mobiles, y compris la 3G. La structure, la vitesse et les métadonnées sont aussi pensées pour le référencement naturel.'],
 ['Comment sont intégrés mes retours ?', 'Les étapes de validation sont fixées avant le lancement. Vos retours sont intégrés aux maquettes et aux livrables dans le périmètre convenu au devis.'],
];

function Brand() { return <a href="#" className="brand" aria-label="Mind Graphix Solution, accueil"><Asterisk className="brand-symbol" strokeWidth={1.8}/><span>mind graphix<small>solution · studio digital</small></span></a>; }
function SectionTag({ children }: { children: React.ReactNode }) { return <div className="section-tag">{children}</div>; }

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pricing, setPricing] = useState('vitrine');
  const [interest, setInterest] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const chooseInterest = (value: string) => { setInterest(value); setWhatsappUrl(''); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); };
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Bonjour Mind Graphix Solution !\n\nJe m’appelle ${String(data.get('name')).trim()}.\nE-mail : ${String(data.get('email')).trim()}\nTéléphone : ${String(data.get('phone') || 'Non renseigné').trim()}\nProjet : ${interest || 'À définir ensemble'}\n\n${String(data.get('message')).trim()}`;
    setWhatsappUrl(`https://wa.me/22601511146?text=${encodeURIComponent(message)}`);
  };
  const project = selectedProject === null ? null : projects[selectedProject];

  return <>
    <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4" href="#contenu">Aller au contenu</a>
    <header className="site-header"><div className="studio-container"><div className="nav-inner">
      <Brand/>
      <nav className="desktop-nav" aria-label="Navigation principale">{nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <Button asChild variant="studio" className="nav-cta"><a href="#contact">Parlons de votre projet <ArrowUpRight/></a></Button>
      <Button variant="studioGhost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
    </div></div>
    {menuOpen && <nav className="mobile-menu" aria-label="Navigation mobile">{nav.map(([id, label]) => <a key={id} onClick={() => setMenuOpen(false)} href={`#${id}`}>{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Parlons de votre projet ↗</a></nav>}
    </header>
    <main id="contenu">
      <section className="hero">
        <img className="hero-photo" src={hero} width={1920} height={1024} alt="Sculpture de papier vert citron dans un atelier de création" fetchPriority="high"/>
        <div className="hero-shade"/>
        <div className="studio-container hero-content reveal">
          <div className="eyebrow"><span className="status-dot"/> Studio indépendant · Burkina Faso</div>
          <h1>Mind Graphix<br/>Solution<span>.</span></h1>
          <p className="hero-copy">Le digital peut faire ressentir.<br/>Nous donnons du caractère à votre marque et du sens à votre présence en ligne.</p>
          <div className="hero-actions"><Button asChild variant="studio"><a href="#realisations">Découvrir nos projets <ArrowUpRight/></a></Button><Button asChild variant="studioGhost" className="text-cta"><a href="#contact">Une idée en tête ? <ArrowRight/></a></Button></div>
          <div className="hero-bottom"><span className="location"><MapPin size={12}/> Bobo-Dioulasso. Ouverts sur le monde.</span><a href="#realisations">Un peu plus bas <ArrowDown size={15}/></a></div>
        </div>
        <span className="hero-caption">Stratégie × Créativité × Technologie</span>
      </section>
      <div className="disciplines"><div className="studio-container"><div className="discipline-inner"><span>Design avec du sens</span><Asterisk/><span>Développement sur mesure</span><Asterisk/><span>Identités singulières</span><Asterisk/><span>Relations humaines</span><Asterisk/></div></div></div>

      <section id="realisations" className="section"><div className="studio-container">
        <SectionTag>01 / Projets choisis</SectionTag>
        <div className="section-header"><h2>Des idées.<br/>Et du concret.</h2><p>Des projets construits ici, pour des entreprises qui font bouger les choses. Découvrez ce que nous créons ensemble.</p></div>
        <div className="project-grid">{projects.map((p, index) => <article className="project-card" key={p.name}>
          <div className={`project-visual ${index === 1 ? 'royal-visual' : ''}`}><img src={p.image} width={index === 0 ? 768 : 1366} height={768} loading="lazy" alt={index === 0 ? 'Textiles colorés de la boutique Faso Mode' : 'Aperçu du site Royal Shop et de son catalogue en préparation'}/><span className="project-type">{p.category}</span><Button variant="studioGhost" size="icon" className="project-open" aria-label={`Découvrir le projet ${p.name}`} onClick={() => setSelectedProject(index)}><ArrowUpRight/></Button></div>
          <div className="project-info"><div><h3><Button variant="studioGhost" className="h-auto p-0 text-inherit font-inherit text-2xl" onClick={() => setSelectedProject(index)}>{p.name}</Button></h3><p>{p.subtitle}</p></div><span className="project-year">{String(index + 1).padStart(2, '0')} / MGS</span></div>
          {index === 1 && <div className="project-note">Site accessible · Prochaine collection en préparation</div>}
        </article>)}</div>
      </div></section>

      <section id="services" className="section services-section"><div className="studio-container">
        <SectionTag>02 / Nos expertises</SectionTag><div className="section-header"><h2>Du beau.<br/>Mais surtout, de l’utile.</h2><p>Nous réunissons design et technologie pour répondre à vos vrais besoins. Pas de solutions toutes faites. Du sur-mesure.</p></div>
        <div className="services-grid">{services.map((s, i) => <article className="service" key={s.interest}><div className="service-top"><s.icon size={30} strokeWidth={1.3}/><span>0{i + 1}</span></div><h3>{s.name}</h3><p>{s.text}</p><ul>{s.tags.map(t => <li key={t}>{t}</li>)}</ul><div className="service-footer"><span>À partir de {s.price} FCFA</span><Button size="icon" variant="studioGhost" aria-label={`Parler d’un projet ${s.interest}`} onClick={() => chooseInterest(s.interest)}><ArrowUpRight/></Button></div></article>)}</div>
      </div></section>

      <section id="methode" className="section method-section"><div className="studio-container"><div className="method-layout">
        <div className="method-intro"><SectionTag>03 / Notre méthode</SectionTag><h2 className="section-title">Avec vous.<br/>À chaque étape.</h2><p>Un bon projet ne se construit pas en silence. Nous écoutons, nous échangeons et nous avançons avec vous, du premier croquis à la mise en ligne.</p><a className="section-link" href="#contact">Faisons connaissance <ArrowUpRight size={16}/></a></div>
        <div>{[
          ['Écouter & comprendre', 'Vos ambitions, votre public, vos contraintes. Nous commençons par les bonnes questions pour définir une direction claire.'],
          ['Imaginer & concevoir', 'Une identité, une structure et des maquettes. Vous voyez le projet prendre forme et vos retours nourrissent chaque décision.'],
          ['Construire & accompagner', 'Nous développons, testons et mettons en ligne. Puis nous restons à vos côtés pour entretenir et faire évoluer votre solution.'],
        ].map(([title, text], i) => <div className="method-step" key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      </div></div></section>

      <section id="tarifs" className="section"><div className="studio-container"><SectionTag>04 / Nos formules</SectionTag><div className="section-header"><h2>Un point de départ.<br/>Pas une limite.</h2><p>Des formules lisibles, un périmètre défini ensemble. Le bon choix commence par une conversation.</p></div>
        <div className="pricing-tabs" role="tablist" aria-label="Type de site"><Button role="tab" id="tab-vitrine" aria-controls="pricing-panel" aria-selected={pricing === 'vitrine'} variant="studioGhost" onClick={() => setPricing('vitrine')}>Site vitrine</Button><Button role="tab" id="tab-boutique" aria-controls="pricing-panel" aria-selected={pricing === 'boutique'} variant="studioGhost" onClick={() => setPricing('boutique')}>Boutique e-commerce</Button></div>
        <div id="pricing-panel" role="tabpanel" aria-labelledby={`tab-${pricing}`} className={`pricing-grid ${pricing === 'vitrine' ? 'two' : ''}`}>{plans.filter(p => p.type === pricing).map(p => <article className="price-card" key={p.name}><h3>{p.name}</h3><p>{p.text}</p><div className="price-amount">{p.price} <small>FCFA</small></div><div className="price-once">Création · paiement unique</div><ul>{p.features.map(f => <li key={f}><Check/>{f}</li>)}</ul><div className="price-maintenance">Entretien distinct : <strong>{p.monthly} FCFA / mois</strong></div><Button variant="studioOutline" onClick={() => chooseInterest(p.name)}>Parlons de cette formule <ArrowUpRight/></Button></article>)}</div>
        <p className="pricing-disclaimer">Les frais de création sont ponctuels et confirmés au devis. L’abonnement mensuel d’entretien est distinct et commence à la mise en ligne. Le devis précise le périmètre ainsi que les éventuels frais de domaine et d’hébergement. Premier échange de 30 minutes gratuit et sans engagement.</p>
      </div></section>

      <section id="agence" className="section agency-section"><div className="studio-container"><SectionTag>05 / Le studio</SectionTag><div className="agency-heading"><h2 className="section-title">Une petite équipe.<br/>De grandes idées.</h2><p>Nous sommes Mind Graphix Solution, une équipe indépendante fondée en 2024 à Bobo-Dioulasso. Trois regards complémentaires, une même envie : créer des solutions digitales qui servent vraiment les personnes.<br/><br/>Ancrés au Burkina Faso, nous travaillons avec des clients d’ici et d’ailleurs.</p></div>
        <div className="team-grid">{[
          { initials: 'PF', name: 'Philippe Faïz Sanon', role: 'Développeur Web & App', skills: 'HTML / CSS · JavaScript · React', url: 'https://philiusdev.vercel.app/' },
          { initials: 'BO', name: 'Badior OUATTARA', role: 'Développeur Full-Stack & UI/UX', skills: 'React · Next.js · Design', url: '' },
          { initials: 'NS', name: 'Nikieme Steve', role: 'Analyste Cybersécurité & Motion', skills: 'Sécurité · After Effects', url: '' },
        ].map(person => <article className="team-member" key={person.name}><div className="team-initial">{person.initials}</div><h3>{person.name}</h3><p>{person.role}</p><div className="team-skills">{person.skills}</div>{person.url && <a href={person.url} target="_blank" rel="noopener noreferrer">Son portfolio <ArrowUpRight size={13}/></a>}</article>)}</div>
      </div></section>

      <section id="questions" className="section faq-section"><div className="studio-container"><div className="faq-layout"><div><SectionTag>06 / Questions fréquentes</SectionTag><h2 className="section-title">On en parle<br/>sans détour.</h2><a href="#contact" className="section-link mt-7">Une autre question ? <ArrowUpRight size={16}/></a></div><Accordion type="single" collapsible>{faqs.map(([q, a], i) => <AccordionItem key={q} value={`question-${i}`}><AccordionTrigger className="py-5 text-sm">{q}</AccordionTrigger><AccordionContent className="faq-answer">{a}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>

      <section id="contact" className="section contact-section"><div className="studio-container"><div className="contact-layout"><div><SectionTag>07 / À vous de jouer</SectionTag><h2 className="contact-title">Une idée ?<br/>Donnons-lui vie<span>.</span></h2><p className="contact-intro">Racontez-nous ce que vous avez en tête.<br/>Le premier échange est gratuit, sans engagement.</p><a className="contact-email" href="mailto:mindgraphixsolution@gmail.com">mindgraphixsolution@gmail.com</a><div className="contact-details"><p><a href="tel:+22601511146">+226 01 51 11 46</a><br/>Secteur 17, rue 14, Sarfalao<br/>Bobo-Dioulasso, Burkina Faso</p><p>Lun–Ven : 8h–18h · Sam : 9h–13h<br/>Réponse sous 2 heures en jours ouvrables.</p></div><div className="contact-socials"><a href="https://www.facebook.com/share/1YDa7UJMaB" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="https://instagram.com/mindgraphixsolution" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://wa.me/22601511146" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></div>
        <form className="contact-form" onSubmit={submitContact} onChange={() => setWhatsappUrl('')}><div className="form-row"><label>Votre nom *<input name="name" required autoComplete="name" placeholder="Comment vous appeler ?" maxLength={100}/></label><label>Votre e-mail *<input name="email" type="email" required autoComplete="email" placeholder="vous@entreprise.com" maxLength={254}/></label></div><div className="form-row"><label>Téléphone<input name="phone" type="tel" autoComplete="tel" placeholder="+226…" maxLength={40}/></label><label>Votre projet<select name="interest" value={interest} onChange={e => setInterest(e.target.value)}><option value="">À définir ensemble</option>{[...services.map(s => s.interest), ...plans.map(p => p.name)].map(t => <option key={t}>{t}</option>)}</select></label></div><label>Parlez-nous de votre idée *<textarea name="message" required minLength={10} maxLength={4000} placeholder="Votre activité, vos envies, ce que vous aimeriez changer…"/></label><Button type="submit" variant="studioOutline" className="contact-submit">Préparer ma demande <ArrowUpRight/></Button><small>Votre demande sera préparée pour WhatsApp. Vous pourrez la relire avant de l’envoyer. Aucun message n’est envoyé automatiquement. <a href="https://site-vitrine-mindgraphixsolution.vercel.app/confidentialite" target="_blank" rel="noopener noreferrer">Confidentialité</a></small>{whatsappUrl && <div className="contact-feedback" role="status">Votre demande est prête. Ouvrez WhatsApp pour la relire et confirmer l’envoi.<Button asChild variant="studioOutline" className="mt-3 w-full"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Continuer sur WhatsApp <MessageCircle/></a></Button></div>}</form>
      </div></div></section>
    </main>
    <footer className="site-footer"><div className="studio-container footer-inner"><Brand/><p>© 2026 Mind Graphix Solution.</p><div className="footer-links"><a href="https://site-vitrine-mindgraphixsolution.vercel.app/confidentialite" target="_blank" rel="noopener noreferrer">Confidentialité</a><a href="#">Retour en haut ↑</a></div></div></footer>
    <Dialog.Root open={project !== null} onOpenChange={open => { if (!open) setSelectedProject(null); }}><Dialog.Portal><Dialog.Overlay className="studio-dialog-overlay"/><Dialog.Content className="studio-dialog"><Dialog.Close asChild><Button variant="studioGhost" size="icon" className="studio-dialog-close" aria-label="Fermer le projet"><X/></Button></Dialog.Close>{project && <><img src={project.image} width={768} height={768} alt={`Aperçu du projet ${project.name}`} loading="lazy"/><div className="studio-dialog-body"><div className="eyebrow">{project.status}</div><Dialog.Title>{project.name}</Dialog.Title><Dialog.Description>{project.description}</Dialog.Description><ul>{project.features.map(f => <li key={f}><Check size={14}/>{f}</li>)}</ul><p className="text-xs text-muted-foreground">{project.tech}</p><Button asChild variant="studio"><a href={project.url} target="_blank" rel="noopener noreferrer">Visiter le site <ArrowUpRight/></a></Button></div></>}</Dialog.Content></Dialog.Portal></Dialog.Root>
  </>;
}
