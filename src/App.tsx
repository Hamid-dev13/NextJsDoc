import React, { useState } from 'react';
import { ArrowRight, Server, Globe, Laptop, RefreshCw, Zap, AlertTriangle, CheckCircle2, Book } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('architecture');
  const [activeStep, setActiveStep] = useState(0);
  const [showGlossary, setShowGlossary] = useState(false);

  const glossary = {
    "SSR (Server-Side Rendering)": "Technique de rendu où le serveur génère le HTML complet d'une page web avant de l'envoyer au navigateur, améliorant les performances initiales et le SEO.",
    "Hydratation": "Processus par lequel React attache les gestionnaires d'événements et l'état aux éléments HTML générés côté serveur, rendant l'application interactive.",
    "Middleware": "Couche logicielle qui s'exécute entre la requête client et la réponse serveur, permettant d'effectuer des opérations comme l'authentification ou la redirection.",
    "API Routes": "Points d'entrée d'API créés directement dans Next.js, permettant de gérer les requêtes HTTP sans serveur externe.",
    "Tree Shaking": "Technique d'optimisation qui élimine le code mort (non utilisé) du bundle final pour réduire sa taille.",
    "Code Splitting": "Technique divisant le code en petits morceaux chargés à la demande, améliorant les performances initiales.",
    "First Contentful Paint (FCP)": "Métrique de performance mesurant le temps nécessaire pour afficher le premier contenu significatif d'une page.",
    "Core Web Vitals": "Ensemble de métriques de Google mesurant la qualité de l'expérience utilisateur sur le web.",
    "getServerSideProps": "Fonction Next.js exécutée à chaque requête pour récupérer des données côté serveur avant le rendu.",
    "getStaticProps": "Fonction Next.js pour générer des pages statiques avec des données au moment de la construction."
  };

  const sections = {
    architecture: {
      title: "Architecture de Next.js",
      steps: [
        "Pages et Routing",
        "API Routes",
        "Middleware",
        "Compilation"
      ],
      details: {
        "Pages et Routing": "Le système de routing de Next.js est basé sur le système de fichiers. Chaque fichier dans le dossier 'pages' devient automatiquement une route. Par exemple, 'pages/about.js' devient '/about'. Les routes dynamiques utilisent des crochets : '[id].js' permet de créer des URLs comme '/posts/1'. Ce système simplifie considérablement la gestion des routes par rapport à React Router.",
        "API Routes": "Les API Routes permettent de créer des endpoints API directement dans Next.js. Placées dans 'pages/api', elles sont isolées du code client et peuvent interagir de manière sécurisée avec des bases de données ou des services externes. Chaque fichier devient un endpoint API avec accès complet aux fonctionnalités Node.js.",
        "Middleware": "Le middleware Next.js permet d'exécuter du code avant que les requêtes n'atteignent les pages. Idéal pour l'authentification, la redirection, ou la modification des headers. Il s'exécute sur le serveur Edge, au plus près des utilisateurs. Vous pouvez l'utiliser pour gérer des redirections conditionnelles, modifier des headers, ou implémenter des règles de sécurité.",
        "Compilation": "Next.js utilise un système de compilation sophistiqué qui inclut : le tree shaking pour éliminer le code inutilisé, l'optimisation automatique des images, et la minification du code pour des performances optimales. Le compilateur SWC, écrit en Rust, offre des performances de compilation jusqu'à 17 fois plus rapides que Babel."
      }
    },
    ssr: {
      title: "Server-Side Rendering",
      steps: [
        "Requête initiale",
        "Génération HTML",
        "Envoi au client",
        "Interactivité"
      ],
      details: {
        "Requête initiale": "Quand un utilisateur accède à une page, le serveur Next.js reçoit la requête. Il identifie la page demandée et commence à préparer les données nécessaires via getServerSideProps() ou getStaticProps(). Cette étape permet de récupérer les données depuis des APIs ou des bases de données de manière sécurisée.",
        "Génération HTML": "Le serveur exécute tous les composants React et leurs data fetching. Il transforme les composants React en HTML pur, incluant toutes les données dans le markup initial. Cette étape garantit que le contenu est immédiatement visible dès que le navigateur reçoit la réponse.",
        "Envoi au client": "Le serveur envoie le HTML complet avec un payload JavaScript minimal. Cela permet un First Contentful Paint (FCP) très rapide, crucial pour le SEO et l'expérience utilisateur. Le HTML inclut également un petit script de chargement qui orchestre le processus d'hydratation.",
        "Interactivité": "Une fois le HTML reçu, Next.js charge en arrière-plan le JavaScript nécessaire pour rendre la page interactive. Cette approche progressive assure un excellent équilibre entre performance initiale et interactivité."
      }
    },
    hydration: {
      title: "Processus d'Hydratation",
      steps: [
        "Chargement HTML statique",
        "Chargement JavaScript",
        "Attachement événements",
        "Application interactive"
      ],
      details: {
        "Chargement HTML statique": "Le navigateur affiche d'abord le HTML pur envoyé par le serveur. À ce stade, la page est visible mais non interactive. Les utilisateurs voient le contenu instantanément, améliorant le Core Web Vital LCP. Cette approche évite l'écran blanc typique des applications React classiques.",
        "Chargement JavaScript": "Next.js charge progressivement le JavaScript nécessaire. Il utilise le code splitting automatique pour ne charger que le code requis par la page actuelle, optimisant les performances. Les modules sont chargés de manière asynchrone pour ne pas bloquer le thread principal.",
        "Attachement événements": "React 'hydrate' la page en attachant les event listeners et en initialisant les hooks. Les gestionnaires d'événements sont connectés aux éléments DOM existants sans recréer la structure HTML. Cette étape est critique car elle doit maintenir la cohérence entre le HTML du serveur et le virtual DOM.",
        "Application interactive": "Une fois l'hydratation terminée, l'application devient pleinement interactive. Les états React sont initialisés, les effets sont exécutés, et les composants peuvent réagir aux interactions utilisateur. useEffect et autres hooks de cycle de vie commencent leur exécution à ce moment."
      }
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'architecture':
        return (
          <div className="flex items-center justify-center space-x-4 animate-fade-in">
            <Server className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            <Globe className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            <Laptop className="w-12 h-12 md:w-16 md:h-16 text-purple-500" />
          </div>
        );
      case 'ssr':
        return (
          <div className="relative h-48 md:h-64 w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <Server className={`w-12 h-12 md:w-16 md:h-16 ${activeStep >= 1 ? 'text-blue-500' : 'text-gray-300'} transition-colors duration-500`} />
                <ArrowRight className={`w-6 h-6 md:w-8 md:h-8 ${activeStep >= 2 ? 'text-blue-500' : 'text-gray-300'} transition-colors duration-500`} />
                <Globe className={`w-12 h-12 md:w-16 md:h-16 ${activeStep >= 3 ? 'text-green-500' : 'text-gray-300'} transition-colors duration-500`} />
              </div>
            </div>
          </div>
        );
      case 'hydration':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-6 h-6 text-blue-500" />
                <span className="text-sm md:text-base">Processus d'hydratation</span>
              </div>
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">Problèmes courants: Désynchronisation client/serveur, état initial incorrect, événements non attachés, erreurs de rendu conditionnel</span>
              </div>
              <div className="p-4 bg-green-50 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">Solutions: useEffect pour la logique client, suppressHydrationWarning pour les différences intentionnelles, gestion appropriée des états initiaux</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Architecture et Fonctionnement de Next.js
          </h1>
          <button
            onClick={() => setShowGlossary(!showGlossary)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <Book className="w-5 h-5" />
            <span className="hidden md:inline">Glossaire</span>
          </button>
        </div>

        {showGlossary && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Glossaire Technique</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(glossary).map(([term, definition]) => (
                <div key={term} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg text-gray-900">{term}</h3>
                  <p className="text-gray-600 text-sm mt-1">{definition}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSection(key);
                  setActiveStep(0);
                }}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="mb-8">
            {renderContent()}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {sections[activeSection].steps.map((step, index) => (
              <div
                key={index}
                className={`p-3 md:p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeStep === index
                    ? 'bg-blue-100 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{step}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-4">
              {sections[activeSection].steps[activeStep]}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {sections[activeSection].details[sections[activeSection].steps[activeStep]]}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Concepts clés à retenir</h2>
          <div className="prose max-w-none">
            <div className="space-y-4">
              {activeSection === 'architecture' && (
                <>
                  <p className="text-gray-600 text-sm md:text-base">
                    Next.js simplifie le développement React avec son architecture basée sur les conventions. Le routing basé sur les fichiers, les API routes, et le middleware forment un écosystème complet pour construire des applications web modernes.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    La compilation optimisée assure des performances exceptionnelles en production, avec un code minimal et des optimisations automatiques. Le compilateur SWC natif offre des performances de compilation nettement supérieures à Babel.
                  </p>
                </>
              )}
              {activeSection === 'ssr' && (
                <>
                  <p className="text-gray-600 text-sm md:text-base">
                    Le SSR de Next.js offre un équilibre parfait entre performances et SEO. Le HTML est généré côté serveur pour un affichage rapide, puis enrichi côté client pour l'interactivité. Cette approche hybride combine les avantages des applications statiques et dynamiques.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Les fonctions getServerSideProps et getStaticProps permettent de choisir la stratégie de rendu la plus adaptée à chaque page, offrant une flexibilité maximale pour optimiser les performances selon les besoins.
                  </p>
                </>
              )}
              {activeSection === 'hydration' && (
                <>
                  <p className="text-gray-600 text-sm md:text-base">
                    L'hydratation est cruciale pour la performance perçue. Elle permet d'afficher rapidement du contenu statique tout en préparant l'interactivité en arrière-plan, créant une expérience utilisateur fluide et réactive.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    La gestion correcte de l'hydratation est essentielle pour éviter les problèmes de désynchronisation entre le serveur et le client. L'utilisation appropriée des hooks React et la compréhension du cycle de vie de l'application sont clés pour une hydratation réussie.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;