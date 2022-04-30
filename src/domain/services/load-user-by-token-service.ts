import { UserRepository } from "@/infra/repositories";
import { JwtProvider } from "@/infra/providers";
import env from "@/config/env";

export class LoadUserByTokenService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtProvider: JwtProvider
  ) {}

  async load(token: string) {
    let tokenDecrypted = null;
    try {
      tokenDecrypted = await this.jwtProvider.decryptToken(
        token,
        env.jwtSecret
      );
    } catch (error) {
      throw new Error("Token inválido");
    }

    if (tokenDecrypted) {
      const userEmail = tokenDecrypted["id"];
      const user = await this.userRepository.findByEmail(userEmail);
      if (user) {
        return user;
      }
    }

    return null;
  }
}
