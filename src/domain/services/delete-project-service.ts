import { ProjectRepository, TaskRepository } from "@/infra/repositories";
import { Project } from "../entities";

export class DeleteProjectService {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly taskRepository: TaskRepository
  ) {}

  async delete(id: string): Promise<DeleteProjectService.Result> {
    const isValidId = await this.projectRepository.findById(id);

    if (!isValidId) {
      throw new Error("Project not found");
    }

    const hasTasks = await this.taskRepository.findByProjectId(id);

    if (hasTasks) {
      await this.taskRepository.deleteAllByProjectId(id);
    }

    const project = await this.projectRepository.delete(id);
    return project;
  }
}

export namespace DeleteProjectService {
  export type Result = Project;
}
