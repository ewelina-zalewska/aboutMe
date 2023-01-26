import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ContactMeView from "@/views/ContactMeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMeView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/projects/:name",
    name: "Project",
    component: ProjectView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactMeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
