import { prisma } from "@/config/prisma";
import { User } from "@/domain/entities";
import { CreateUserService } from "@/domain/services";

export class UserRepository {
  async create(
    params: CreateUserService.Params
  ): Promise<CreateUserService.Result> {
    const user = await prisma.user.create({
      data: {
        ...params,
      },
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}
