import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"; 
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Trail Blog",
  basePath: "/cms",
  projectId: "6j5zhc3g",
  dataset: "production",
  apiVersion: "2024-11-01",
  plugins: [deskTool(), visionTool()], 

  schema: {
    types: schemaTypes,
  },
});
