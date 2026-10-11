import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter page: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  const blackColor = rgb(20 / 255, 20 / 255, 20 / 255);
  const textDark = rgb(40 / 255, 40 / 255, 40 / 255);
  const textMuted = rgb(100 / 255, 100 / 255, 100 / 255);
  const lineGray = rgb(210 / 255, 215 / 255, 220 / 255);
  
  let y = height - 42;
  const margin = 44;
  const contentWidth = width - margin * 2;
  
  // Header: ARUN SHARMA
  page.drawText('ARUN SHARMA', {
    x: margin,
    y: y,
    size: 20,
    font: fontBold,
    color: blackColor,
  });
  
  y -= 15;
  page.drawText('BE (CSE)(AI) Student | Chandigarh University | Chandigarh, India', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: textDark,
  });
  
  y -= 13;
  page.drawText('sharmaarunsharma206@gmail.com | +91 7696339179 | LinkedIn: linkedin.com/in/arun-sharma-47b2743b2', {
    x: margin,
    y: y,
    size: 9,
    font: fontRegular,
    color: textDark,
  });
  
  y -= 10;
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: width - margin, y: y },
    thickness: 1.2,
    color: blackColor,
  });
  
  y -= 16;
  
  function drawSectionHeading(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 10,
      font: fontBold,
      color: blackColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 0.6,
      color: lineGray,
    });
    y -= 11;
  }
  
  // 1. PROFESSIONAL SUMMARY
  drawSectionHeading('Professional Summary');
  const summaryLines = [
    'Second-year BE (CSE)(AI) student at Chandigarh University with a CGPA of 8.2/10 and a strong foundation in Python, C, C++,',
    'and Data Structures & Algorithms. Earned two Microsoft certifications—Azure AI Fundamentals (AI-900) and Azure',
    'Fundamentals (AZ-900). Interested in Artificial Intelligence, Machine Learning, Data Science, and Cloud Computing, with a',
    'focus on practical problem-solving and continuous technical development.',
  ];
  for (const line of summaryLines) {
    page.drawText(line, {
      x: margin,
      y: y,
      size: 9,
      font: fontRegular,
      color: textDark,
    });
    y -= 12;
  }
  y -= 5;
  
  // 2. EDUCATION
  drawSectionHeading('Education');
  
  // Chandigarh University
  page.drawText('Chandigarh University', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontBold,
    color: blackColor,
  });
  const uniDates = '2025 – Present';
  const uniDatesWidth = fontRegular.widthOfTextAtSize(uniDates, 9);
  page.drawText(uniDates, {
    x: width - margin - uniDatesWidth,
    y: y,
    size: 9,
    font: fontRegular,
    color: textDark,
  });
  y -= 12;
  
  const expGrad = 'Expected Graduation: 2029';
  const expGradWidth = fontRegular.widthOfTextAtSize(expGrad, 8.5);
  page.drawText(expGrad, {
    x: width - margin - expGradWidth,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  
  page.drawText('CGPA: 8.2/10', {
    x: width - margin - fontBold.widthOfTextAtSize('CGPA: 8.2/10', 8.5),
    y: y - 11,
    size: 8.5,
    font: fontBold,
    color: textDark,
  });
  y -= 16;
  
  // Army Public School - Class 12
  page.drawText('Army Public School, Unchi Bassi, Punjab', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontBold,
    color: blackColor,
  });
  const hsText = 'Higher Secondary Education';
  const hsTextWidth = fontRegular.widthOfTextAtSize(hsText, 8.5);
  page.drawText(hsText, {
    x: width - margin - hsTextWidth,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Class 12th', {
    x: margin,
    y: y,
    size: 9,
    font: fontRegular,
    color: textDark,
  });
  y -= 14;
  
  // Army Public School - Class 10
  page.drawText('Army Public School, Unchi Bassi, Punjab', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontBold,
    color: blackColor,
  });
  const secText = 'Secondary Education';
  const secTextWidth = fontRegular.widthOfTextAtSize(secText, 8.5);
  page.drawText(secText, {
    x: width - margin - secTextWidth,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Class 10th', {
    x: margin,
    y: y,
    size: 9,
    font: fontRegular,
    color: textDark,
  });
  y -= 16;
  
  // 3. TECHNICAL SKILLS
  drawSectionHeading('Technical Skills');
  const skills = [
    { label: 'Programming Languages', val: 'Python, C, C++' },
    { label: 'Data Structures & Algorithms', val: 'Arrays, Searching, Sorting, Recursion, Linked Lists, Stack, Queue' },
    { label: 'AI & Data', val: 'Artificial Intelligence Fundamentals, Machine Learning Fundamentals' },
    { label: 'Cloud', val: 'Microsoft Azure Fundamentals' },
    { label: 'Other', val: 'Problem Solving, Object-Oriented Programming, Algorithm Analysis' },
  ];
  const colX = margin + 140;
  for (const s of skills) {
    page.drawText(s.label, {
      x: margin,
      y: y,
      size: 8.5,
      font: fontBold,
      color: textDark,
    });
    page.drawText(s.val, {
      x: colX,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });
    y -= 12.5;
  }
  y -= 5;
  
  // 4. CERTIFICATIONS
  drawSectionHeading('Certifications');
  page.drawText('• Microsoft Certified: Azure AI Fundamentals (AI-900)', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });
  y -= 12;
  page.drawText('• Microsoft Certified: Azure Fundamentals (AZ-900)', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });
  y -= 16;
  
  // 5. PROJECTS
  drawSectionHeading('Projects');
  page.drawText('Project Portfolio — Currently developing academic and personal projects in programming, AI, and cloud computing. This', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });
  y -= 11;
  page.drawText('section will be updated as projects are completed.', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });
  y -= 16;
  
  // 6. RELEVANT COURSEWORK
  drawSectionHeading('Relevant Coursework');
  page.drawText('• Data Structures & Algorithms', { x: margin, y: y, size: 8.5, font: fontRegular, color: textDark });
  y -= 11;
  page.drawText('• Programming in Python', { x: margin, y: y, size: 8.5, font: fontRegular, color: textDark });
  y -= 11;
  page.drawText('• C / C++ Programming', { x: margin, y: y, size: 8.5, font: fontRegular, color: textDark });
  y -= 11;
  page.drawText('• Database Fundamentals', { x: margin, y: y, size: 8.5, font: fontRegular, color: textDark });
  y -= 16;
  
  // 7. SOFT SKILLS
  drawSectionHeading('Soft Skills');
  page.drawText('Problem Solving  •  Analytical Thinking  •  Teamwork  •  Communication  •  Quick Learning  •  Time Management', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });
  y -= 16;
  
  // 8. CAREER OBJECTIVE
  drawSectionHeading('Career Objective');
  const careerLines = [
    'To obtain an internship opportunity in Data & Artificial Intelligence, Software Development, AI/ML, or related technology fields',
    'where I can apply my programming and problem-solving skills, gain practical industry experience, and contribute to real-world',
    'projects.',
  ];
  for (const line of careerLines) {
    page.drawText(line, {
      x: margin,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });
    y -= 11.5;
  }
  
  // Page footer
  const footerText = 'Arun Sharma  |  Resume  |  Page 1';
  const footerWidth = fontRegular.widthOfTextAtSize(footerText, 8);
  page.drawText(footerText, {
    x: width - margin - footerWidth,
    y: 28,
    size: 8,
    font: fontRegular,
    color: textMuted,
  });
  
  // Write to public/assets
  const publicAssetsDir = path.resolve(process.cwd(), 'public/assets');
  if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
  }
  
  const pdfBytes = await pdfDoc.save();
  
  // Save as Arun_Sharma_Professional_Resume.pdf
  const primaryPath = path.join(publicAssetsDir, 'Arun_Sharma_Professional_Resume.pdf');
  fs.writeFileSync(primaryPath, pdfBytes);
  console.log(`Saved primary resume to ${primaryPath}`);
  
  // Also keep Arun_Sharma_Resume.pdf for backward compatibility
  const secondaryPath = path.join(publicAssetsDir, 'Arun_Sharma_Resume.pdf');
  fs.writeFileSync(secondaryPath, pdfBytes);
  console.log(`Saved compatibility resume to ${secondaryPath}`);
}

generateResume().catch(console.error);
