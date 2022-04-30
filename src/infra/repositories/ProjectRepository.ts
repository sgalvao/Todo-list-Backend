import { prisma } from "@/config/prisma";
import { Project } from "@/domain/entities";
import { CreateProjectService } from "@/domain/services";

export class ProjectRepository {
  async create(
    params: CreateProjectService.Params
  ): Promise<CreateProjectService.Result> {
    const project = await prisma.project.create({
      data: {
        name: params.name,
        userId: params.userId,
      },
    });
    return project;
  }

  async load(userId: string): Promise<Project[]> {
    const project = await prisma.project.findMany({
      where: {
        userId,
      },
      include: {
        tasks: true,
      },
    });

    return project;
  }

  async delete(id: string): Promise<Project> {
    const project = await prisma.project.delete({
      where: {
        id,
      },
    });

    return project;
  }

  async findById(id: string): Promise<Project> {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    return project;
  }
}
