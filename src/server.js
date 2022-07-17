import { createServer } from "miragejs";
import data from "./data.json";

export default function () {
  createServer({
    routes() {
      this.get("/api/projects", () => ({
        projects: data.projects,
      }));

      this.get("/api/contacts", () => ({
        contacts: data.contacts,
      }));

      this.get("/api/skills", () => ({
        skills: data.skills,
      }));

      this.get("/api/employment", () => ({
        employment: data.employment,
      }));

      this.get("/api/education", () => ({
        education: data.education,
      }));

      this.passthrough("https://formspree.io/**");
    },
  });
}
