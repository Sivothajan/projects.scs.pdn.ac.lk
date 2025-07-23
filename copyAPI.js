import fs from "fs";
import path from "path";

const srcDir = path.resolve("api");
const destDir = path.resolve("dist/api");

async function copyRecursive(src, dest) {
  try {
    const entries = await fs.promises.readdir(src, { withFileTypes: true });
    await fs.promises.mkdir(dest, { recursive: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyRecursive(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
        console.log(`Copied: ${srcPath} → ${destPath}`);
      }
    }
  } catch (err) {
    console.error("❌ Error copying:", err);
    process.exit(1);
  }
}

copyRecursive(srcDir, destDir).then(() => {
  console.log("✅ Done copying api → dist/api");
});
