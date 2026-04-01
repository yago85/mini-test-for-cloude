# Claude Code Usage Benchmark

This repository is designed to test and compare token/limit consumption in **Claude Code**. If you've noticed an unusual spike in usage, please follow these steps to help us collect data for a comparison.

### Preparation

1. Ensure you are using **default settings** (no custom instructions in system configs or project-level configs).

2. All files in the project must be closed after running the command, including this README.md.

---

### Step 1: Baseline (Before Start)

Before running any commands, please capture:

1. **Version & Model Header:** A screenshot of the Claude Code header showing your version, model, and plan.

```text
 ▐▛███▜▌   Claude Code v2.1.89
▝▜█████▛▘  Opus 4.6 · Claude Pro
  ▘▘ ▝▝    ~/path/to/test-repo
```

2. **Internal Usage & Context:** Open `claude`, run commands `/usage` and `/context`, then take screenshots of the output.

### Step 2: Execution

In the root directory, start Claude Code and enter the following prompt:

```text
Follow instructions in claude.md. No yapping, just get it done.
```

### Step 3: Verification (After Task)

Once the task is complete (the program prints "SUCCESS"), please capture:

1. **Internal Usage & Context:** Run `/usage` and `/context` again and take screenshots of the updated output.

---

### Why these metrics?

- **Version Header:** Confirms whether the issue is tied to a **specific build** (e.g., v2.1.89) or a **specific model** (e.g., Sonnet 4.6 vs Opus).
- **Context Output:** Helps identify **how much context** was actually sent and stored. It reveals if Claude Code is bloating the session with redundant data.

---
