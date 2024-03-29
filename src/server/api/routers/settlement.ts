import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const settlementRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.settlement.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.settlement.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
