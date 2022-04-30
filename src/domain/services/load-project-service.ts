import { ProjectRepository } from "@/infra/repositories";
import { Project } from "../entities";

export class LoadProjectsService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async load(userId: string): Promise<LoadProjectsService.Result> {
    const project = await this.projectRepository.load(userId);
    return project;
  }
}

export namespace LoadProjectsService {
  export type Result = Project[];
}
