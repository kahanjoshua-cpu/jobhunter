import { z } from "zod";

export const ResumeBulletSchema = z.object({
  bullet: z.string(),
});