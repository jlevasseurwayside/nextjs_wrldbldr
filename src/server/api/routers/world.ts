import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const worldRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ seed: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      //more stuff
      return ctx.db.world.create({
        data: {
          name: "test world",
          seed: input.seed,
        },
      });
    }),
  getById: publicProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ ctx, input }) => {
      const world = await ctx.db.world.findUnique({
        where: { id: input.id },
      });

      if (!world) throw new TRPCError({ code: "NOT_FOUND" });

      return world;
    }),
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.world.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
