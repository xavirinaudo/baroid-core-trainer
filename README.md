# Baroid Core Practice & Study Portal

An interactive web-based study application for preparing for the **Baroid Core Exam**. Practice theory quizzes, test business process knowledge, and run math simulators with randomized parameters and step-by-step guidance.

## Features

- **Theory Quizzes**:
  - **Homework 8**: Alkalinity, pH & Hardness (17 questions).
  - **Homework 9**: Chemistry & Clays (24 questions).
  - **Homework 11**: Fluid Contaminants & Calculations (30 questions).
- **Business Processes**:
  - Mainstays, Value Proposition, Technical Process, Black Book, Hard Stops, Problem Resolution, and People Process.
- **Dynamic Math Simulators**:
  - **Alkalinity API 13B-1**: Hydroxide, Carbonate, and Bicarbonate mg/L calculator.
  - **Barite Mass Balance**: Additions, Sack requirements, and Dump/Keep volumes.
  - **Solids Analysis**: Specific gravity (ASG), % LGS/HGS, and concentration in ppb.
  - **Hole Volume & Circulation**: Triplex pump output, annular capacities, drill string capacity, strokes, and circulation times.
- **Cheat Sheets**: Quick reference tables for Baroid products and exam equations.

## Project Structure

```text
├── index.html       # Application UI structure
├── index.css        # Visual styling and responsive design
├── app.js           # Core logic, simulators, and state management
├── quiz_data.js     # Shared database of theory questions
└── README.md        # This file
```

## Running Locally

Simply open `index.html` in any modern web browser. All data and progress are saved locally in the browser's storage.

## Hosting with GitHub Pages

To host this as a live website:
1. Push this repository to GitHub.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, set the Source to **Deploy from a branch** and select the `main` branch.
4. Click **Save**. Your website will be live in 1-2 minutes at `https://<your-username>.github.io/<repository-name>/`.
