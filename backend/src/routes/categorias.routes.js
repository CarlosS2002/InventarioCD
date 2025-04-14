import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"; 

const  router = Router();

/*get */
router.get("/",categoriaController.getCategorias)

/*hacemos disponible el router en otda la app */
export default router;