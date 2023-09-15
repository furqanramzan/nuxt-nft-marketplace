import { SignJWT, jwtVerify } from 'jose';

export interface JwtData {
  id: number;
  address: string;
}

class Jwt {
  private secret: string;

  constructor() {
    this.secret = useRuntimeConfig().jwtSecret;
  }

  encode(data: JwtData) {
    return new SignJWT({ user: data })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(new TextEncoder().encode(this.secret));
  }

  async verify(token: string) {
    const verifyPromise = await promise(() =>
      jwtVerify(token, new TextEncoder().encode(this.secret)),
    );

    if (verifyPromise.success) {
      return verifyPromise.data.payload.user as JwtData;
    }
  }
}

export const jwt = new Jwt();
