import { ProjectRepository, TaskRepository } from "@/infra/repositories";
import { Project } from "../entities";

export class DeleteProjectService {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly taskRepository: TaskRepository
  ) {}

  async delete(
    params: DeleteProjectService.Params
  ): Promise<DeleteProjectService.Result> {
    const hasTasks = await this.taskRepository.findByProjectId(params.id);

    if (hasTasks) {
      await this.taskRepository.deleteAllByProjectId(params.id);
    }

    const project = await this.projectRepository.delete(params.id);
    return project;
  }
}

export namespace DeleteProjectService {
  export type Params = {
    id: string;
  };
  export type Result = Project;
}
