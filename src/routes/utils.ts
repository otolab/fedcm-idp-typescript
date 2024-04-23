import { useHttpsLb } from "../config/index";
import { Request } from 'express';

export function getBaseUrl(req: Request) {
  const host = req.get('host');
  return `${useHttpsLb ? 'https' : req.protocol}://${host}`;
}