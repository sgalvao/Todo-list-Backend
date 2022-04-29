import { ProjectRepository } from "@/infra/repositories";
import { Project } from "../entities";

export class CreateProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async create(
    params: CreateProjectService.Params
  ): Promise<CreateProjectService.Result> {
    const project = await this.projectRepository.create(params);
    return project;
  }
}

export namespace CreateProjectService {
  export type Params = {
    name: string;
    userId: string;
  };
  export type Result = Project;
}
