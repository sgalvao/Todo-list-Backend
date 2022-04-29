import { TaskRepository } from "@/infra/repositories";
import { Task } from "../entities";

export class UpdateTaskStatusService {
  constructor(private readonly taskRepository: TaskRepository) {}
  async update(id: string): Promise<UpdateTaskStatusService.Result> {
    const task = await this.taskRepository.update(id);
    return task;
  }
}

export namespace UpdateTaskStatusService {
  export type Result = Task;
}
