import { HashProvider } from "@/infra/providers";
import { UserRepository } from "@/infra/repositories";
import { User } from "../entities";

export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider
  ) {}

  async create(
    params: CreateUserService.Params
  ): Promise<CreateUserService.Result> {
    const checkEmail = await this.userRepository.findByEmail(params.email);
    if (checkEmail) {
      throw new Error("Email already exists");
    }
    const passwordEncrypted = await this.hashProvider.createHash(
      params.password,
      10
    );

    const userCreated = await this.userRepository.create({
      ...params,
      password: passwordEncrypted,
    });
    return userCreated;
  }
}

export namespace CreateUserService {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };
  export type Result = User;
}
