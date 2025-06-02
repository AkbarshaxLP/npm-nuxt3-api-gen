## 🚀 API Client Generator

This tool generates TypeScript types and API methods based on a Swagger/OpenAPI schema.

### 📋 Steps to Generate

1. **download necessary files**
   In the root folder of your frontend application, run the command to download the `composable` and `api-gen` folders.

   ⚠️ **Warning:**  
   Make sure you do **not** have composable files named `useApi.ts` or `useApiService.ts`. The script will **overwrite** them if they exist.

   If you already have files with these names, it's recommended to run the script in a different directory to safely download the `composable` and `api-gen` folders.
   
   ```bash
   npx nuxt3-api-gen

2. **Configure `swaggerUrl`**  
   - Open your Swagger UI in a browser.  
   - Press `F12` to open Developer Tools, go to the **Network** tab, and refresh the page.  
   - Look for a `.json` request (usually the Swagger schema), right-click it, and copy its URL.  
   - Paste the URL into the `swaggerUrl` field inside `config.json`.

3. **Run the generator**  
   In your terminal, run one of the following commands:

   ```bash
   npm run api-gen
   # or
   node generate.cjs


## 📦 Output

After running the command, a directory named `api` will be created in the same location as the script (if it doesn't already exist).

Inside the `api` folder, two files will be generated:

- `apiScheme.types.ts` — TypeScript types generated from the Swagger schema.
- `apiScheme.ts` — Grouped API methods based on tags defined in the Swagger spec.

These files are ready to use with the `useApiService` composable in your project.


## 🔧 Usage Example

```vue
<script lang="ts" setup>
const { data, error, status } = useApiService().users.getUserList();
// ...
</script>