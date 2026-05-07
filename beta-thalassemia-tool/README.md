# Virtual Genetic Testing Tool for Beta Thalassemia

## Overview
This is an educational web-based tool designed to simulate genetic testing for Beta Thalassemia, focusing on mutations in the HBB (Hemoglobin Subunit Beta) gene located on chromosome 11p15.4.

## Features
- **Disease Information**: Comprehensive information about Beta Thalassemia, gene location, and clinical classifications
- **Patient Samples**: Four different patient samples representing various mutation types and severities
- **In-Silico PCR Diagnostic**: Simulated PCR-based diagnostic process including:
  - DNA Extraction
  - PCR Amplification
  - Gel Electrophoresis
  - DNA Sequencing
- **Results Visualization**: 
  - Gel electrophoresis simulation
  - DNA sequence comparison
  - Mutation analysis
  - Clinical interpretation
- **PDF Report Generation**: Automated generation of comprehensive genetic testing reports

## Technologies Used
- HTML5
- CSS3 (with responsive design)
- JavaScript (ES6+)
- jsPDF library for PDF generation

## Installation & Usage

### Option 1: Direct Use
1. Download all files to a single directory
2. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, or Edge)

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server