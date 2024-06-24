import { sha256 } from "hono/utils/crypto";

export const timingSafeEqual2 = async (
  a: string | object | boolean,
  b: string | object | boolean,
  hashFunction?: Function,
): Promise<boolean> => {
  if (!hashFunction) {
    hashFunction = sha256;
  }

  const [sa, sb] = await Promise.all([hashFunction(a), hashFunction(b)]);

  if (!sa || !sb) {
    return false;
  }

  return sa === sb && a === b;
};
