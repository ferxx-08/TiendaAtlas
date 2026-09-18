import { Router } from "express";
import { createCliente, deleteCliente, renderCliente, renderEditCliente, statusCliente, updateCliente } from "../controllers/ClienteController";

const router = Router();

router.get("/clientes", renderCliente);

router.post("/clientes/agregar", createCliente);

router.get("/clientes/:id/update", renderEditCliente);

router.post("/clientes/:id/update", updateCliente);

router.get("/clientes/:id/delete", deleteCliente);

router.get("/clientes/:id/status", statusCliente);

export default router;