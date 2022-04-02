interface Controller {
  async(req: Request, res: Response): Promise<Response>;
}
