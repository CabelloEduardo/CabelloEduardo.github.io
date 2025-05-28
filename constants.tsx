
import { NavLink, Project, SocialLink, UserProfile } from './types';
import { GitHubIcon } from './components/icons/GitHubIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
// EmailIcon is imported in ContactSection directly, so not needed here for SOCIAL_LINKS
// import { EmailIcon } from './components/icons/EmailIcon'; 

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const USER_PROFILE: UserProfile = {
  name: 'Hector Cabello',
  title: 'Mobile Software Engineer',
  shortBio: 'Ingeniero de Software apasionado por crear aplicaciones móviles de alto rendimiento y centradas en el usuario. Especializado en Kotlin y Python, con un fuerte enfoque en las prácticas modernas de desarrollo móvil.',
  longBio: [
    "¡Hola! Soy Hector, un Ingeniero de Software especializado en el desarrollo de aplicaciones móviles. Mi trayectoria en el desarrollo de software comenzó con la curiosidad por construir soluciones tecnológicas impactantes, y desde entonces se ha convertido en una carrera gratificante.",
    "Me especializo en el desarrollo para Android utilizando Kotlin, aprovechando al máximo el ecosistema de Jetpack para crear interfaces de usuario modernas y reactivas con Jetpack Compose, y gestionando la asincronía eficientemente con Coroutines. También tengo experiencia con Python, que utilizo para scripting, herramientas de desarrollo o desarrollo backend complementario a las aplicaciones móviles.",
    "Estoy comprometido con la escritura de código limpio, mantenible y bien documentado. Me mantengo al día con las últimas tendencias en el desarrollo móvil y disfruto aprendiendo nuevas tecnologías para mejorar continuamente la calidad y el rendimiento de las aplicaciones que construyo.",
  ],
  profileImageUrl: 'https://picsum.photos/seed/hector_cabello_dev/400/400',
  email: 'hector.cabello.dev@example.com',
  cvUrl: 'hector-cabello-cv.pdf', 
  skills: [
    {
      category: "Languages",
      items: ["Kotlin", "Python", "Java", "SQL"]
    },
    {
      category: "Frameworks/Libraries",
      items: [
        "Android SDK", 
        "Jetpack (Compose, ViewModel, LiveData, Room, Navigation)", 
        "Coroutines", 
        "Dagger/Hilt", 
        "Retrofit2/OkHttp3",
        "Ktor",
        "SQLAlchemy (Python)",
        "Flask/Django (Python)",
        "Pandas/NumPy (Python for data handling)"
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        "Android Studio", 
        "Git & GitHub", 
        "Firebase", 
        "Gradle", 
        "Fastlane", 
        "Docker", 
        "Postman",
        "Jira",
        "CI/CD (GitHub Actions, Jenkins, GitLab CI)"
      ]
    },
     {
      category: "Design & UX",
      items: ["Material Design", "Responsive Design", "UI/UX Principles", "Accessibility (WCAG)"]
    }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mobileProj1',
    title: 'FoodieApp - Recetas y Planificador (Android)',
    description: 'App Android nativa para descubrir recetas, planificar comidas y crear listas de compras. UI con Jetpack Compose.',
    longDescription: 'FoodieApp es una aplicación Android completa diseñada para entusiastas de la cocina. Permite a los usuarios explorar una vasta base de datos de recetas, filtrarlas por ingredientes o tipo de cocina, guardar sus favoritas, planificar comidas semanales y generar listas de la compra automáticamente. La interfaz de usuario está construida enteramente con Jetpack Compose para una experiencia moderna y reactiva. El almacenamiento local de datos se gestiona con Room y las llamadas a APIs externas (para recetas, información nutricional) se realizan con Retrofit y Coroutines para un rendimiento óptimo.',
    imageUrl: 'https://picsum.photos/seed/foodieAppAndroid/600/400',
    tags: ['Kotlin', 'Jetpack Compose', 'ViewModel', 'Room', 'Retrofit', 'Coroutines', 'Android SDK', 'Material Design'],
    githubUrl: 'https://github.com/hectorcabello/foodie-app-android',
    liveUrl: '#', 
    year: 2023,
  },
  {
    id: 'mobileProj2',
    title: 'FitTrack - Rastreador de Actividad (Android)',
    description: 'App móvil para Android que permite registrar entrenamientos, establecer metas y visualizar progreso. Sincronización opcional con Firebase.',
    longDescription: 'FitTrack ayuda a los usuarios a mantenerse activos y alcanzar sus objetivos de fitness. La aplicación permite registrar diversas actividades físicas, desde correr hasta levantamiento de pesas, monitorear la duración, distancia, calorías quemadas y otros parámetros relevantes. Los usuarios pueden establecer metas personalizadas y visualizar su progreso a través de gráficos intuitivos. Se implementó con Kotlin y Jetpack (ViewModel, LiveData/Flow). Opcionalmente, puede incluir integración con Firebase (Authentication y Firestore) para la sincronización de datos entre dispositivos y backup en la nube.',
    imageUrl: 'https://picsum.photos/seed/fitTrackAndroid/600/400',
    tags: ['Kotlin', 'Android SDK', 'Jetpack (ViewModel, LiveData)', 'Material Design', 'Firebase', 'SQLite'],
    githubUrl: 'https://github.com/hectorcabello/fittrack-android',
    year: 2024,
  },
  {
    id: 'mobileProj3',
    title: 'HomeControl - Interfaz Hogar Inteligente (Android)',
    description: 'App Android para controlar dispositivos IoT. Utiliza Ktor Client para comunicación y Jetpack Compose para la UI.',
    longDescription: 'HomeControl ofrece una interfaz de usuario elegante y sencilla para gestionar dispositivos de un hogar inteligente. La aplicación se comunica con una API local o en la nube (que podría estar construida con Python/Flask, por ejemplo) mediante Ktor Client. Permite a los usuarios encender/apagar luces, ajustar termostatos, ver cámaras de seguridad, etc. La UI, desarrollada con Jetpack Compose, es personalizable y muestra el estado de los dispositivos en tiempo real. Se priorizó la baja latencia y la fiabilidad en la comunicación.',
    imageUrl: 'https://picsum.photos/seed/homeControlAndroid/600/400',
    tags: ['Kotlin', 'Jetpack Compose', 'Ktor Client', 'Coroutines', 'IoT', 'Android SDK', 'REST API'],
    githubUrl: 'https://github.com/hectorcabello/homecontrol-android',
    liveUrl: '#', 
    year: 2023,
  },
  {
    id: 'mobileProj4',
    title: 'PyTask-Mobile - Cliente Gestor de Tareas (Android)',
    description: 'Cliente Android para un gestor de tareas con backend en Python. Consume API REST para CRUD de tareas.',
    longDescription: 'Esta aplicación Android sirve como cliente móvil para un sistema de gestión de tareas cuyo backend está desarrollado en Python (utilizando Flask o Django). PyTask-Mobile permite a los usuarios crear, ver, editar y eliminar tareas, asignar prioridades y fechas de vencimiento, y recibir notificaciones. La comunicación con el backend se realiza a través de una API RESTful, utilizando Retrofit en el lado de Android para gestionar las solicitudes HTTP. Se enfoca en una experiencia de usuario fluida y sincronización de datos eficiente.',
    imageUrl: 'https://picsum.photos/seed/pyTaskMobileClient/600/400',
    tags: ['Kotlin', 'Android SDK', 'Retrofit', 'Jetpack (ViewModel, Navigation)', 'Python (Backend)', 'REST API', 'MVVM'],
    githubUrl: 'https://github.com/hectorcabello/pytask-mobile-android',
    year: 2022,
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/hectorcabello', 
    icon: GitHubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hectorcabello', 
    icon: LinkedInIcon,
  },
  // Example:
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/yourusername',
  //   icon: TwitterIcon, // You would need to create TwitterIcon.tsx
  // },
];