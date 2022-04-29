import bcrypt from "bcrypt";

export class HashProvider {
  async createHash(plaintext: string, salt: number): Promise<string> {
    return bcrypt.hash(plaintext, salt);
  }

  async compareHash(plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest);
  }
}
