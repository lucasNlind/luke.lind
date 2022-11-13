import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

// Project Pages
import CaseStudyProject from '../views/projects/CaseStudyProject';
import HealthCheckProject from '../views/projects/HealthCheckProject';
import SCSProject from '../views/projects/SCSProject';
import SpotifyProject from '../views/projects/SpotifyProject';
import StretchedProject from '../views/projects/StretchedProject';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/project/summer-case-study',
    name: 'summer-case-study',
    component: CaseStudyProject
  },
  {
    path: '/project/health-check',
    name: 'health-check',
    component: HealthCheckProject
  },
  {
    path: '/project/uga-scs',
    name: 'uga-scs',
    component: SCSProject
  },
  {
    path: '/project/stretched',
    name: 'stretched',
    component: StretchedProject
  },
  {
    path: '/project/spotify',
    name: 'spotify',
    component: SpotifyProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
