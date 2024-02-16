import { createRouter, createWebHashHistory } from 'vue-router'

// Importo las páginas que voy a trabajar como rutas:
import EstudianteActualizar from '../pages/EstudianteActualizar.vue'
import EstudianteConsultar from '../pages/EstudianteConsultar.vue'
import EstudianteEliminar from '../pages/EstudianteEliminar.vue'
import EstudianteGuardar from '../pages/EstudianteGuardar.vue'

// A cada página le asigno una ruta:
const routes = [
    {
        path: '/actualizar',
        component: EstudianteActualizar
    },
    {
        path: '/consultar',
        component: EstudianteConsultar
    },
    {
        path: '/eliminar',
        component: EstudianteEliminar
    },
    {
        path: '/grabar',
        component: EstudianteGuardar
    }
]

// Configuro el router[c]:
const router = createRouter({history: createWebHashHistory(), routes})

// Exporto la configuración:
export default router