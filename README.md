# Portfolio Website

This is a code bundle for Portfolio Website. The original project is available at https://www.figma.com/design/gpcWLnwWhvzdd6yKrdlcg6/Portfolio-Website.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment to GitHub Pages

This site is deployed at **https://khizar-aqil.github.io/** using the repository `khizar-aqil/khizar-aqil.github.io`.

### Deploy commands

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

   This runs `predeploy` (which builds the project) and then publishes the `build/` folder to the `gh-pages` branch.

### GitHub Pages settings

After pushing and running `npm run deploy`, configure GitHub Pages:

1. Go to your repository: **https://github.com/khizar-aqil/khizar-aqil.github.io**
2. Open **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` (select from dropdown)
   - **Folder**: `/ (root)`
4. Click **Save**

The site will be live at **https://khizar-aqil.github.io/** within a few minutes.
