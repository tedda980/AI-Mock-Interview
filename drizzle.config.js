/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://MockDb_owner:F7Gz2QgbKxPt@ep-delicate-cloud-a5jol0sh.us-east-2.aws.neon.tech/MockDb?sslmode=require",
  },
};
