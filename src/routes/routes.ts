import { Router } from "express";
import * as PlayerController from "../controllers/players-controllers";
import * as ClubController from "../controllers/clubs-controllers"

const router = Router()

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById)
router.post("/players", PlayerController.postPlayer)
router.delete("/players/:id", PlayerController.deletePlayer)
router.patch("/players/:id", PlayerController.patchPlayer)

router.get("/clubs", ClubController.getClub)


export default router