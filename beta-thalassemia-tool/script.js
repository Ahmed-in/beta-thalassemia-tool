// Global variables
let currentSample = null;
let analysisRunning = false;

// Patient data
const patientData = {
    1: {
        id: "BT-2024-001",
        age: "8 years",
        gender: "Male",
        mutation: "IVS-1-110 (G>A) Homozygous",
        mutationType: "beta-zero/beta-zero",
        mutationTypeSymbol: "β⁰/β⁰",
        classification: "Beta-Thalassemia Major",
        classificationSymbol: "β-Thalassemia Major",
        severity: "Severe",
        sequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAG<span class='mutation-highlight'>A</span>AGGTATCCTCTCTCCCTCACCTTTCCTGATCTCCGACAACTTCATCCACGTTCACC",
        normalSequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGAGGTATCCTCTCTCCCTCACCTTTCCTGATCTCCGACAACTTCATCCACGTTCACC",
        hemoglobin: "5.2 g/dL",
        mcv: "58 fL",
        mch: "18 pg",
        hbA: "0%",
        hbA2: "4.5%",
        hbF: "95.5%",
        clinicalFindings: [
            "Severe microcytic hypochromic anemia",
            "Complete absence of HbA production",
            "Significantly elevated HbF levels",
            "Requires regular blood transfusions every 2-3 weeks"
        ],
        recommendations: [
            "Initiate regular blood transfusion program (every 2-3 weeks)",
            "Start iron chelation therapy to prevent iron overload",
            "Monitor cardiac and hepatic function regularly",
            "Consider bone marrow transplantation evaluation",
            "Genetic counseling for family members",
            "Regular endocrine evaluations",
            "Dental and skeletal monitoring"
        ]
    },
    2: {
        id: "BT-2024-002",
        age: "25 years",
        gender: "Female",
        mutation: "IVS-1-5 (G>C) Compound Heterozygous",
        mutationType: "beta-plus/beta-plus",
        mutationTypeSymbol: "β⁺/β⁺",
        classification: "Beta-Thalassemia Intermedia",
        classificationSymbol: "β-Thalassemia Intermedia",
        severity: "Moderate",
        sequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGGTAACGGCAG<span class='mutation-highlight'>C</span>ACTTCTCCTCAGGAGTCAGATGCACCATGGTCTGTTTGAGGTTGCTAGTGAACACAGTTGTGTAACTTCATCCACGTTCACC",
        normalSequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGGTAACGGCAGGACTTCTCCTCAGGAGTCAGATGCACCATGGTCTGTTTGAGGTTGCTAGTGAACACAGTTGTGTAACTTCATCCACGTTCACC",
        hemoglobin: "8.5 g/dL",
        mcv: "65 fL",
        mch: "21 pg",
        hbA: "20%",
        hbA2: "5.2%",
        hbF: "74.8%",
        clinicalFindings: [
            "Moderate microcytic anemia",
            "Reduced but detectable HbA production",
            "Elevated HbF levels compensating for HbA deficiency",
            "Occasional transfusion dependency during stress or infection"
        ],
        recommendations: [
            "Monitor hemoglobin levels every 3 months",
            "Folic acid supplementation (1-5 mg daily)",
            "Transfusion support during pregnancy or severe infections",
            "Annual cardiac and liver function tests",
            "Avoid iron supplementation unless proven deficiency",
            "Genetic counseling before family planning",
            "Monitor for splenomegaly",
            "Maintain adequate hydration"
        ]
    },
    3: {
        id: "BT-2024-003",
        age: "35 years",
        gender: "Female",
        mutation: "Codon 39 (C>T) Heterozygous",
        mutationType: "beta-normal/beta-plus",
        mutationTypeSymbol: "β/β⁺",
        classification: "Beta-Thalassemia Minor",
        classificationSymbol: "β-Thalassemia Minor",
        severity: "Mild/Asymptomatic",
        sequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGTTGGTATCAAGGTTACAAGACAGGTTTA<span class='mutation-highlight'>T</span>GGAGATAATGCTGAATGTGACCATGTTCATCCACGTTCACC",
        normalSequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGTTGGTATCAAGGTTACAAGACAGGTTTACGGAGATAATGCTGAATGTGACCATGTTCATCCACGTTCACC",
        hemoglobin: "11.2 g/dL",
        mcv: "68 fL",
        mch: "23 pg",
        hbA: "92%",
        hbA2: "5.5%",
        hbF: "2.5%",
        clinicalFindings: [
            "Mild microcytic anemia",
            "Normal or near-normal hemoglobin levels",
            "Elevated HbA2 (diagnostic marker)",
            "Usually asymptomatic, discovered incidentally"
        ],
        recommendations: [
            "No specific treatment required",
            "Genetic counseling before family planning",
            "Partner screening recommended before conception",
            "Avoid unnecessary iron supplementation",
            "Annual complete blood count monitoring",
            "Inform healthcare providers about carrier status",
            "May require folic acid during pregnancy",
            "Regular follow-up during pregnancy"
        ]
    },
    4: {
        id: "BT-2024-004",
        age: "6 years",
        gender: "Male",
        mutation: "Codon 8/9 (+G) Homozygous",
        mutationType: "beta-zero/beta-zero",
        mutationTypeSymbol: "β⁰/β⁰",
        classification: "Beta-Thalassemia Major",
        classificationSymbol: "β-Thalassemia Major",
        severity: "Severe",
        sequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGT<span class='mutation-highlight'>G</span>CTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGAGGTATCCTCTCTCCCTCACCTTTCCTGATCTCCGACAACTTCATCCACGTTCACC",
        normalSequence: "ACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGAGGTATCCTCTCTCCCTCACCTTTCCTGATCTCCGACAACTTCATCCACGTTCACC",
        hemoglobin: "6.0 g/dL",
        mcv: "60 fL",
        mch: "19 pg",
        hbA: "0%",
        hbA2: "3.8%",
        hbF: "96.2%",
        clinicalFindings: [
            "Severe microcytic hypochromic anemia",
            "Frameshift mutation causing premature stop codon",
            "No functional beta-globin production",
            "Requires lifelong transfusion support"
        ],
        recommendations: [
            "Immediate initiation of regular transfusion program",
            "Iron chelation therapy (start when ferritin >1000 ng/mL)",
            "Monthly monitoring of hemoglobin and ferritin levels",
            "Cardiac MRI for iron deposition assessment",
            "Hepatic function monitoring",
            "Consider HLA typing for potential bone marrow transplant",
            "Immunization updates (especially against encapsulated bacteria)",
            "Psychosocial support and educational planning"
        ]
    }
};

// Select sample function
function selectSample(sampleNum) {
    currentSample = sampleNum;
    
    // Update UI to show selected sample
    document.querySelectorAll('.sample-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-sample="${sampleNum}"]`).classList.add('selected');
    
    // Update selected sample info
    const patient = patientData[sampleNum];
    document.getElementById('current-sample').textContent = patient.id;
    document.getElementById('sample-details').textContent = 
        `${patient.age}, ${patient.gender} - ${patient.mutation}`;
    
    // Enable run button
    document.getElementById('run-btn').disabled = false;
    
    // Hide previous results
    document.getElementById('results').style.display = 'none';
    
    // Reset steps
    resetSteps();
}

// Reset analysis steps
function resetSteps() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`step${i}`).classList.remove('active', 'complete');
        document.getElementById(`progress${i}`).style.width = '0%';
        document.getElementById(`status${i}`).textContent = i === 1 ? 'Ready' : 'Waiting';
    }
}

// Run analysis function
async function runAnalysis() {
    if (!currentSample || analysisRunning) return;
    
    analysisRunning = true;
    document.getElementById('run-btn').disabled = true;
    document.getElementById('results').style.display = 'none';
    
    // Step 1: DNA Extraction
    await runStep(1, "DNA Extraction", "Extracting genomic DNA from blood sample...", "DNA extracted successfully");
    
    // Step 2: PCR Amplification
    await runStep(2, "PCR Amplification", "Amplifying HBB gene region...", "Amplification complete - 35 cycles");
    
    // Step 3: Gel Electrophoresis
    await runStep(3, "Gel Electrophoresis", "Running gel electrophoresis...", "Band visualization complete");
    
    // Step 4: DNA Sequencing
    await runStep(4, "DNA Sequencing", "Sequencing amplified DNA...", "Sequencing complete");
    
    // Show results
    displayResults();
    
    analysisRunning = false;
}

// Run individual step
async function runStep(stepNum, stepName, runningMessage, completeMessage) {
    const step = document.getElementById(`step${stepNum}`);
    const progress = document.getElementById(`progress${stepNum}`);
    const status = document.getElementById(`status${stepNum}`);
    
    step.classList.add('active');
    status.textContent = runningMessage;
    
    // Simulate progress
    for (let i = 0; i <= 100; i += 5) {
        progress.style.width = i + '%';
        await sleep(50);
    }
    
    step.classList.remove('active');
    step.classList.add('complete');
    status.textContent = completeMessage;
    
    await sleep(300);
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Display results
function displayResults() {
    const patient = patientData[currentSample];
    
    // Show results section
    document.getElementById('results').style.display = 'block';
    
    // Draw gel electrophoresis
    drawGelElectrophoresis();
    
    // Display sequence
    document.getElementById('sequence-display').innerHTML = `
        <div style="margin-bottom: 15px;">
            <strong>Reference Sequence (Normal):</strong><br>
            ${patient.normalSequence}
        </div>
        <div>
            <strong>Patient Sequence (${patient.id}):</strong><br>
            ${patient.sequence}
        </div>
        <div style="margin-top: 15px; color: #e74c3c;">
            <strong>Note:</strong> Mutation highlighted in red
        </div>
    `;
    
    // Display mutation analysis
    document.getElementById('mutation-info').innerHTML = `
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #ecf0f1;">
                <th style="padding: 12px; text-align: left; border: 1px solid #bdc3c7;">Parameter</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #bdc3c7;">Result</th>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>Mutation Detected</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.mutation}</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>Genotype</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.mutationTypeSymbol}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>Hemoglobin</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.hemoglobin} (Normal: 12-16 g/dL)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>MCV</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.mcv} (Normal: 80-100 fL)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>MCH</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.mch} (Normal: 27-31 pg)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>HbA</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.hbA} (Normal: >95%)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>HbA2</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.hbA2} (Normal: 2-3%)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #bdc3c7;"><strong>HbF</strong></td>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">${patient.hbF} (Normal: <1%)</td>
            </tr>
        </table>
    `;
    
    // Display clinical interpretation
    const severityColor = patient.severity === 'Severe' ? '#e74c3c' : 
                         patient.severity === 'Moderate' ? '#f39c12' : '#27ae60';
    
    document.getElementById('interpretation').innerHTML = `
        <div style="background: ${severityColor}22; padding: 20px; border-radius: 8px; border-left: 5px solid ${severityColor};">
            <h4 style="color: ${severityColor}; margin-bottom: 15px;">
                Diagnosis: ${patient.classificationSymbol}
            </h4>
            <p style="margin-bottom: 10px;"><strong>Severity:</strong> ${patient.severity}</p>
            <p style="margin-bottom: 15px;"><strong>Clinical Findings:</strong></p>
            <ul style="margin-left: 20px;">
                ${patient.clinicalFindings.map(finding => `<li style="margin: 8px 0;">${finding}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Draw gel electrophoresis
function drawGelElectrophoresis() {
    const canvas = document.getElementById('gelCanvas');
    const ctx = canvas.getContext('2d');
    const patient = patientData[currentSample];
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw gel background
    ctx.fillStyle = '#34495e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw wells
    ctx.fillStyle = '#2c3e50';
    for (let i = 0; i < 5; i++) {
        ctx.fillRect(50 + i * 110, 20, 80, 30);
    }
    
    // Draw labels
    ctx.fillStyle = '#ecf0f1';
    ctx.font = '12px Arial';
    ctx.fillText('Ladder', 65, 15);
    ctx.fillText('Sample', 170, 15);
    ctx.fillText('Control+', 275, 15);
    ctx.fillText('Control-', 385, 15);
    ctx.fillText('Blank', 500, 15);
    
    // Draw DNA ladder
    const ladderSizes = [100, 200, 300, 400, 500, 650, 850, 1000];
    ladderSizes.forEach((size, index) => {
        const y = 70 + index * 25;
        ctx.fillStyle = '#3498db';
        ctx.fillRect(55, y, 70, 8);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = '10px Arial';
        ctx.fillText(size + 'bp', 10, y + 6);
    });
    
    // Draw sample band (at expected size ~450bp)
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(165, 170, 70, 12);
    
    // Draw positive control
    ctx.fillStyle = '#27ae60';
    ctx.fillRect(275, 170, 70, 12);
    
    // Draw negative control (no band)
    // No band for negative control
    
    // Add mutation-specific bands if applicable
    if (patient.classification.includes('Major')) {
        // Stronger band for homozygous mutations
        ctx.fillStyle = '#e74c3c';
        ctx.fillRect(165, 170, 70, 15);
    } else if (patient.classification.includes('Minor')) {
        // Two bands for heterozygous
        ctx.fillStyle = '#f39c12';
        ctx.fillRect(165, 165, 70, 8);
        ctx.fillRect(165, 177, 70, 8);
    }
}

// Generate PDF Report
function generateReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const patient = patientData[currentSample];
    
    // Title
    doc.setFontSize(20);
    doc.setTextColor(102, 126, 234);
    doc.text('GENETIC TESTING REPORT', 105, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(118, 75, 162);
    doc.text('Beta Thalassemia - HBB Gene Analysis', 105, 30, { align: 'center' });
    
    // Line
    doc.setDrawColor(102, 126, 234);
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    // Patient Information
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('PATIENT INFORMATION', 20, 45);
    
    doc.setFontSize(11);
    doc.text('Patient ID: ' + patient.id, 20, 55);
    doc.text('Age: ' + patient.age, 20, 62);
    doc.text('Gender: ' + patient.gender, 20, 69);
    doc.text('Test Date: ' + new Date().toLocaleDateString(), 20, 76);
    
    // Test Results
    doc.setFontSize(14);
    doc.text('TEST RESULTS', 20, 90);
    
    doc.setFontSize(11);
    doc.text('Mutation Detected: ' + patient.mutation, 20, 100);
    doc.text('Genotype: ' + patient.mutationType, 20, 107);
    doc.text('Classification: ' + patient.classification, 20, 114);
    doc.text('Severity: ' + patient.severity, 20, 121);
    
    // Laboratory Values
    doc.setFontSize(14);
    doc.text('LABORATORY VALUES', 20, 135);
    
    doc.setFontSize(11);
    doc.text('Hemoglobin: ' + patient.hemoglobin + ' (Normal: 12-16 g/dL)', 20, 145);
    doc.text('MCV: ' + patient.mcv + ' (Normal: 80-100 fL)', 20, 152);
    doc.text('MCH: ' + patient.mch + ' (Normal: 27-31 pg)', 20, 159);
    doc.text('HbA: ' + patient.hbA + ' (Normal: >95%)', 20, 166);
    doc.text('HbA2: ' + patient.hbA2 + ' (Normal: 2-3%)', 20, 173);
    doc.text('HbF: ' + patient.hbF + ' (Normal: <1%)', 20, 180);
    
    // Clinical Findings
    doc.setFontSize(14);
    doc.text('CLINICAL FINDINGS', 20, 194);
    
    doc.setFontSize(10);
    let yPos = 204;
    patient.clinicalFindings.forEach((finding, index) => {
        const lines = doc.splitTextToSize((index + 1) + '. ' + finding, 170);
        doc.text(lines, 25, yPos);
        yPos += lines.length * 7;
    });
    
    // New Page for Recommendations
    doc.addPage();
    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('RECOMMENDATIONS', 20, 20);
    
    doc.setFontSize(10);
    yPos = 30;
    patient.recommendations.forEach((rec, index) => {
        const lines = doc.splitTextToSize((index + 1) + '. ' + rec, 170);
        doc.text(lines, 25, yPos);
        yPos += lines.length * 7;
    });
    
    // Interpretation
    yPos += 10;
    doc.setFontSize(14);
    doc.text('INTERPRETATION', 20, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    const interpretation = 'The patient carries ' + patient.mutation + ' mutation in the HBB gene, ' +
        'resulting in ' + patient.classification + '. This finding is consistent with the clinical ' +
        'presentation and laboratory values. The mutation affects beta-globin chain production, ' +
        'leading to ' + patient.severity.toLowerCase() + ' phenotype.';
    
    const interpretLines = doc.splitTextToSize(interpretation, 170);
    doc.text(interpretLines, 20, yPos);
    
    // Genotype notation explanation
    yPos += interpretLines.length * 7 + 10;
    doc.setFontSize(12);
    doc.text('GENOTYPE NOTATION:', 20, yPos);
    
    yPos += 8;
    doc.setFontSize(10);
    const notationText = patient.mutationType + ' indicates ' + getGenotypeExplanation(patient.mutationType);
    const notationLines = doc.splitTextToSize(notationText, 170);
    doc.text(notationLines, 20, yPos);
    
    // Footer
    yPos = 270;
    doc.setFontSize(9);
    doc.setTextColor(127, 140, 141);
    doc.text('This report is generated by Virtual Genetic Testing Tool', 105, yPos, { align: 'center' });
    doc.text('For educational purposes only', 105, yPos + 5, { align: 'center' });
    doc.text('Report Generated: ' + new Date().toLocaleString(), 105, yPos + 10, { align: 'center' });
    
    // Save PDF
    doc.save('Beta_Thalassemia_Report_' + patient.id + '.pdf');
}

// Helper function to explain genotype
function getGenotypeExplanation(genotype) {
    const explanations = {
        'beta-zero/beta-zero': 'two copies of beta-zero alleles (no beta-globin production)',
        'beta-plus/beta-plus': 'two copies of beta-plus alleles (reduced beta-globin production)',
        'beta-normal/beta-plus': 'one normal and one beta-plus allele (carrier status)',
        'beta-zero/beta-plus': 'one beta-zero and one beta-plus allele (compound heterozygous)'
    };
    return explanations[genotype] || genotype;
}