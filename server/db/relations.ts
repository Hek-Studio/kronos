import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  users: {
    workspaces: r.many.workspaces(),
    workspaceMembers: r.many.workspaceMembers(),
  },

  workspaces: {
    owner: r.one.users({
      from: r.workspaces.ownerId,
      to: r.users.id,
    }),
    members: r.many.workspaceMembers(),
  },

  workspaceMembers: {
    user: r.one.users({
      from: r.workspaceMembers.userId,
      to: r.users.id,
    }),
    workspace: r.one.workspaces({
      from: r.workspaceMembers.workspaceId,
      to: r.workspaces.id,
    }),
  },
}));
