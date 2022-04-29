import { prisma } from "@/config/prisma";
import { Task } from "@/domain/entities";
import { CreateTaskService } from "@/domain/services";

export class TaskRepository {
  async create(
    params: CreateTaskService.Params
  ): Promise<CreateTaskService.Result> {
    const task = await prisma.task.create({
      data: {
        ...params,
      },
    });

    return task;
  }

  async delete(param: string): Promise<Task> {
    const task = await prisma.task.delete({
      where: {
        id: param,
      },
    });

    return task;
  }

  async update(id: string) {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        status: "DONE",
      },
    });

    return task;
  }

  async deleteAllByProjectId(projectId: string) {
    const tasks = await prisma.task.deleteMany({
      where: {
        projectId,
      },
    });

    return tasks;
  }

  async findByProjectId(projectId: string): Promise<Task> {
    const tasks = await prisma.task.findFirst({
      where: {
        id: projectId,
      },
    });
    return tasks;
  }
}
