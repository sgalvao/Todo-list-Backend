import { TaskRepository } from "@/infra/repositories";
import { Task } from "../entities";

export class CreateTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(
    params: CreateTaskService.Params
  ): Promise<CreateTaskService.Result> {
    const task = await this.taskRepository.create(params);
    return task;
  }
}

export namespace CreateTaskService {
  export type Params = {
    name: string;
    description: string;
    projectId: string;
  };
  export type Result = Task;
}
