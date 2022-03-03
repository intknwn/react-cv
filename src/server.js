import { createServer } from "miragejs";
import data from "./data.json";

export default function () {
  createServer({
    routes() {
      this.get("/api/projects", () => ({
        projects: data.projects,
      }));

      this.get("/api/skills", () => ({
        skills: data.skills,
      }));
    },
  });
}
