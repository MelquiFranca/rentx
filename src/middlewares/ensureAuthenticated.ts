import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(token, "561875773336b0c55c507d3bd564d342");
        console.log(decoded);
    } catch {
        throw new Error("Invalid token!");
    }
}
