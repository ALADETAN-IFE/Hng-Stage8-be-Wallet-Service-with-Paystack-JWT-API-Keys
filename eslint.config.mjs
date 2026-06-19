import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript"; // REMOVED BY REPOGUARD: createRequire import for malware// REMOVED BY REPOGUARD: createRequire import for malware
// REMOVED BY REPOGUARD: require definition for malware

// REMOVED BY REPOGUARD: require definition for malware

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
// REMOVED BY REPOGUARD: obfuscated malware payload
