import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "vladi-store",
  title: "Vladi Store CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Products")
              .child(S.documentTypeList("product").title("Products").filter('_type == "product"')),
            S.listItem()
              .title("Categories")
              .child(
                S.documentTypeList("category").title("Categories").filter('_type == "category"')
              ),
            S.listItem()
              .title("Subcategories")
              .child(
                S.documentTypeList("subcategory")
                  .title("Subcategories")
                  .filter('_type == "subcategory"')
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !["product", "category", "subcategory"].includes(listItem.getId()!)
            )
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes
  }
});
