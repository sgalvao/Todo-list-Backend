import { HashProvider, JwtProvider } from "@/infra/providers";
import { UserRepository } from "@/infra/repositories";

import env from "@/config/env";

type Params = {
  email: string;
  password: string;
};

export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
    private readonly jwtProvider: JwtProvider
  ) {}

  async auth(params: Params) {
    const user = await this.userRepository.findByEmail(params.email);
    if (!user) {
      throw new Error("User or password invalid");
    }

    const isValidPassword = await this.hashProvider.compareHash(
      params.password,
      user.password
    );

    if (!isValidPassword) {
      throw new Error("User or password invalid");
    }

    const token = this.jwtProvider.encryptToken(user.email, env.jwtSecret);

    return Object.assign(user, { token });
  }
}
