# Contributing Guide

Thank you for considering contributing!
This document outlines how to work with this project and how to submit changes.

---

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/zenvi-studio/video-player.git
   cd <your-repo>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project (if applicable):
   ```bash
   npm run dev
   ```

---

## Branching Strategy

- `main` → stable production-ready code
- `develop` → active development branch
- Feature branches:
  ```
  feature/<short-description>
  ```
- Bugfix branches:
  ```
  fix/<short-description>
  ```

---

## Coding Guidelines

Please follow these principles:

- **SOLID**
- **KISS** (Keep It Simple, Stupid)
- **DRY** (Don’t Repeat Yourself)
- **YAGNI** (You Aren’t Gonna Need It)
- **Composition over Inheritance**

### General Rules

- Use TypeScript strictly (`strict: true`)
- Prefer small, reusable modules
- Write meaningful variable and function names
- Avoid unnecessary complexity

---

## Testing

If tests are present:

```bash
npm run test
```

- Write tests for new features when possible
- Ensure existing tests pass before submitting a PR

---

## Commit Messages

Follow this format:

```
+ - <added or updated>
- - <removed>
```

### Example
```
+ - Implement seek method in VideoPlayer class
+ - Add UI button for ±10s skip
- - Remove unused helper function
```

---

## Pull Requests

Before submitting a PR:

- Make sure your code builds successfully
- Run tests (if available)
- Ensure your branch is up to date with `develop`

### PR Checklist

- [ ] Code follows project guidelines
- [ ] No unnecessary files or console logs
- [ ] Clear and descriptive PR title
- [ ] Linked issue (if applicable)

---

## Reporting Issues

When creating an issue, include:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if relevant)

---

## Suggestions

Feel free to open an issue for:

- Feature requests
- Improvements
- Refactoring ideas

---

## Final Notes

Keep contributions focused and minimal.  
Small, well-explained PRs are preferred over large ones.

Thanks for contributing! 🎉
