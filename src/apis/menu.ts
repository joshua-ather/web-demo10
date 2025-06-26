import api from "./api";

export interface MenuItem {
  key: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
}

export async function getMenu(): Promise<MenuItem[]> {
  const res = await api.post("/graphql", {
    query: `
        query {
            menus {
                title
                path
                icon
                roles
            }
        }
    `,
  });

  return res.data.data.menus;
}
