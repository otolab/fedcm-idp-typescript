import { useHttpsLb } from "src/config";
import { Request } from 'express';

export function getBaseUrl(req: Request) {
  const host = req.get('host');
  return `${useHttpsLb ? 'https' : req.protocol}://${host}`;
}