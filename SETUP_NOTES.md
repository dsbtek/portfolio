# Setup Notes

## ⚠️ Node.js Version Requirement

This project requires **Node.js 18.17 or higher** (Next.js 14 requirement).

Current version detected: **v14.21.3**

### How to Upgrade Node.js

If you're using **nvm** (Node Version Manager):

```bash
# Install latest LTS version
nvm install --lts

# Use the new version
nvm use --lts

# Set as default
nvm alias default node
```

Or install a specific version:

```bash
# Install Node.js 20 (recommended)
nvm install 20

# Use it
nvm use 20

# Set as default
nvm alias default 20
```

### Verify Installation

```bash
node --version  # Should show v18.17+ or higher
npm --version   # Should be compatible
```

### After Upgrading

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Remove node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🎯 Quick Start (After Node.js Upgrade)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📝 All Features Implemented

✅ Animated terminal-style hero section with typing effect
✅ Enhanced project cards with images and status badges
✅ Full modal previews for projects
✅ Individual project detail pages
✅ Responsive dark-themed UI
✅ Custom scrollbar and selection styling

See FEATURES.md for detailed documentation.
