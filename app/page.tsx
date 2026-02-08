'use client';

import { useEffect, useState } from 'react';

export default function PaaSExplainer() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Syne', sans-serif;
          overflow-x: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; filter: blur(40px); }
          50% { opacity: 0.7; filter: blur(60px); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
        .delay-700 { animation-delay: 0.7s; opacity: 0; }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glow {
          box-shadow: 0 0 60px rgba(59, 130, 246, 0.4);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
             style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"
             style={{ animation: 'pulse-glow 6s ease-in-out infinite', animationDelay: '2s' }}></div>
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 animate-slide-up">
            <span className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium tracking-wider">
              PLATFORM AS A SERVICE
            </span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-none animate-slide-up delay-100"
              style={{ 
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            PaaS
          </h1>
          
          <p className="text-2xl md:text-3xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            Déployez vos applications sans gérer l'infrastructure
          </p>

          <div className="flex gap-4 justify-center animate-slide-up delay-300">
            <a href="#concept" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow">
              Explorer le concept
            </a>
            <a href="#avantages" className="px-8 py-4 glass hover:bg-white/10 rounded-lg font-semibold transition-all duration-300">
              Voir les avantages
            </a>
          </div>
        </div>

        {/* Floating code blocks decoration */}
        <div className="absolute bottom-20 left-10 glass rounded-lg p-4 font-mono text-sm text-blue-300 animate-slide-up delay-400"
             style={{ animation: 'float 6s ease-in-out infinite' }}>
          <code>git push</code>
        </div>
        <div className="absolute top-40 right-10 glass rounded-lg p-4 font-mono text-sm text-purple-300 animate-slide-up delay-500"
             style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}>
          <code>vercel deploy</code>
        </div>
      </header>

      {/* Concept Section */}
      <section id="concept" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={mounted ? 'animate-slide-up delay-100' : 'opacity-0'}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Qu'est-ce que le{' '}
                <span className="text-blue-400">PaaS</span> ?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Le <strong>Platform as a Service</strong> est un modèle de cloud computing qui fournit une plateforme complète permettant aux développeurs de créer, déployer et gérer des applications sans se soucier de l'infrastructure sous-jacente.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Concentrez-vous sur votre code, laissez la plateforme gérer les serveurs, le scaling, les bases de données et les déploiements.
              </p>
            </div>

            <div className={`glass rounded-2xl p-8 ${mounted ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Développement rapide</h3>
                    <p className="text-gray-400">Outils et frameworks prêts à l'emploi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Auto-scaling</h3>
                    <p className="text-gray-400">Adaptation automatique à la charge</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sécurité intégrée</h3>
                    <p className="text-gray-400">Mises à jour et patches automatiques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Architecture <span className="text-blue-400">simplifiée</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'IaaS', desc: 'Infrastructure', color: 'red', items: ['Serveurs', 'Stockage', 'Réseau', 'Virtualisation'] },
              { title: 'PaaS', desc: 'Plateforme', color: 'blue', items: ['IaaS +', 'Runtime', 'Frameworks', 'Databases'] },
              { title: 'SaaS', desc: 'Application', color: 'green', items: ['PaaS +', 'Application', 'Interface', 'Données'] }
            ].map((layer, idx) => (
              <div key={layer.title} 
                   className={`glass rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
                   style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className={`w-16 h-16 rounded-xl bg-${layer.color}-500/20 flex items-center justify-center mb-6 mx-auto`}>
                  <div className={`w-8 h-8 rounded-lg bg-${layer.color}-500`}></div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{layer.title}</h3>
                <p className="text-gray-400 text-center mb-6">{layer.desc}</p>
                <ul className="space-y-2">
                  {layer.items.map(item => (
                    <li key={item} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full bg-${layer.color}-400`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="avantages" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            Pourquoi choisir <span className="text-blue-400">PaaS</span> ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Déploiement instantané',
                desc: 'Passez du code à la production en quelques secondes avec git push'
              },
              {
                icon: '💰',
                title: 'Coût optimisé',
                desc: 'Payez uniquement pour ce que vous utilisez, pas d\'infrastructure inutilisée'
              },
              {
                icon: '🔄',
                title: 'CI/CD intégré',
                desc: 'Pipeline de déploiement automatique à chaque commit'
              },
              {
                icon: '🌍',
                title: 'Distribution globale',
                desc: 'CDN mondial pour des performances optimales partout'
              },
              {
                icon: '📊',
                title: 'Monitoring inclus',
                desc: 'Métriques, logs et analytics en temps réel'
              },
              {
                icon: '🔐',
                title: 'HTTPS automatique',
                desc: 'Certificats SSL gratuits et renouvellement automatique'
              }
            ].map((advantage, idx) => (
              <div key={advantage.title}
                   className={`glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
                   style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case - Vercel Example */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Exemple concret : <span className="text-blue-400">Vercel</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cette page elle-même est hébergée sur Vercel, une plateforme PaaS parfaite pour Next.js. 
              Déployée en un instant, scalable automatiquement, et disponible mondialement.
            </p>
            
            <div className="glass rounded-xl p-6 font-mono text-left text-sm mb-8 bg-slate-900/50">
              <div className="text-gray-500 mb-2"># Déployer sur Vercel</div>
              <div className="text-blue-400">$ git push origin main</div>
              <div className="text-gray-400 mt-4">✓ Building...</div>
              <div className="text-gray-400">✓ Deploying...</div>
              <div className="text-green-400">✓ Ready! https://paas-demo.vercel.app</div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm">Vercel</span>
              <span className="px-4 py-2 bg-green-500/20 rounded-full text-sm">Auto-scaling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Démo créée avec Next.js et déployée sur Vercel
          </p>
          <p className="text-sm text-gray-500">
            Un exemple parfait de Platform as a Service en action
          </p>
        </div>
      </footer>
    </div>
  );
}