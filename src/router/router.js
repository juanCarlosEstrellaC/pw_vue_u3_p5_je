import { createRouter, createWebHashHistory } from 'vue-router'

// A cada página le asigno una ruta:
// Importo las páginas que voy a trabajar como rutas en cada ruta para tener 
// lazyload. De otra manera, como lo hacía antes, importaba toodas las páginas de forma
// global, y siempre se cargaban a pesar que vaya usar una sola, como consultar, por ejemplo.

const routes = [
    {
        path: '/actualizar',
        component: () => import('../pages/EstudianteActualizar.vue')
    },  
    {
        path: '/consultar/:id',
        component: () => import('../pages/EstudianteConsultar.vue')
    },
    {
        path: '/eliminar',
        component: () => import('../pages/EstudianteEliminar.vue')
    },
    {
        path: '/grabar',
        component: () => import('../pages/EstudianteGuardar.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NoFoundPage.vue')
    }
]

// Configuro el router[c]:
const router = createRouter({history: createWebHashHistory(), routes})

// Exporto la configuración:
export default router