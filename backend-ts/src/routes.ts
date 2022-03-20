import { Request, Response, Router } from "express";

class Routes {
  public router: Router;

  public constructor() {
    this.router = Router();
    this.getRoutes();
  }

  public getRoutes(): void {
    this.router.get("/", (_: Request, res: Response) => {
      res.json({ ola: "Mundo!" });
    });
  }

  public postRoutes(): void {
  }
}

export default new Routes().router;
