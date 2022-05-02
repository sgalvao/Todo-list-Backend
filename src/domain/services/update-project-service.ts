import { ProjectRepository } from "@/infra/repositories";
import { Project } from "../entities";

export class UpdateProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async update(id: string, name: string): Promise<Project> {
    const isValid = await this.projectRepository.findById(id);
    if (!isValid) {
      throw new Error("Project not found");
    }
    const project = await this.projectRepository.update(id, name);
    return project;
  }
}
