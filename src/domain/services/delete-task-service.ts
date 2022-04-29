import { TaskRepository } from "@/infra/repositories";
import { Task } from "../entities";

export class DeleteTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async delete(id: string): Promise<DeleteTaskService.Result> {
    const task = await this.taskRepository.delete(id);
    return task;
  }
}

export namespace DeleteTaskService {
  export type Result = Task;
}
