import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCOADocs() {
  const publicAssetsDir = path.resolve(process.cwd(), 'public/assets');
  if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
  }

  // --- 1. GENERATE ASSIGNMENT (2 Pages) ---
  const assignDoc = await PDFDocument.create();
  const fontBold = await assignDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await assignDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await assignDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontMono = await assignDoc.embedFont(StandardFonts.Courier);

  const black = rgb(15/255, 23/255, 42/255);
  const navy = rgb(15/255, 30/255, 66/255);
  const grayDark = rgb(51/255, 65/255, 85/255);
  const grayMuted = rgb(100/255, 116/255, 139/255);
  const borderGray = rgb(203/255, 213/255, 225/255);
  const tableHeaderBg = rgb(241/255, 245/255, 249/255);

  // --- Page 1 of Assignment ---
  let p1 = assignDoc.addPage([595.28, 841.89]); // A4
  let y = 800;
  const margin = 50;
  const contentWidth = 595.28 - margin * 2;

  // Title
  p1.drawText('Assignment: RISC vs. CISC — Choosing a Processor', {
    x: margin,
    y: y,
    size: 15,
    font: fontBold,
    color: navy,
  });
  y -= 22;

  // Metadata
  p1.drawText('Student Name: Arun Sharma', { x: margin, y: y, size: 9.5, font: fontBold, color: black });
  y -= 14;
  p1.drawText('UID: 25BAI10030', { x: margin, y: y, size: 9.5, font: fontBold, color: black });
  y -= 14;
  p1.drawText('Class: 25BAI601', { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
  y -= 14;
  p1.drawText('Subject: Computer Organisation and Architecture', { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
  y -= 10;

  // Divider
  p1.drawLine({ start: { x: margin, y: y }, end: { x: margin + contentWidth, y: y }, thickness: 1, color: borderGray });
  y -= 18;

  // Introduction
  p1.drawText('Introduction', { x: margin, y: y, size: 11, font: fontBold, color: navy });
  y -= 14;

  const introP = [
    'A technology company is building two systems, one on RISC and one on CISC, and has to decide',
    'which instruction-set design suits a low-power embedded device. In this report I compare the two',
    'architectures in a table, work through two small instruction examples, and then give my',
    'recommendation for a battery-powered device.'
  ];
  for (const line of introP) {
    p1.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }
  y -= 8;

  // (a) Comparison Table
  p1.drawText('(a) Comparison Table', { x: margin, y: y, size: 11, font: fontBold, color: navy });
  y -= 14;

  // Draw Table
  const tableTop = y;
  const rowHeight = 18;
  const col1W = 140;
  const col2W = 175;
  const col3W = 180;
  const tableData = [
    ['Parameter', 'RISC', 'CISC'],
    ['Instruction set size', 'Small, simple instructions', 'Large, powerful instructions'],
    ['Instruction length', 'Fixed, usually 32 bits', 'Variable, 1 to 15 bytes in x86'],
    ['Decoding / control unit', 'Simple, mostly hardwired', 'Complex, often uses microcode'],
    ['Addressing modes', 'Few; only LOAD/STORE use memory', 'Many; most instructions can use memory'],
    ['Registers', 'Large number of registers', 'Comparatively fewer registers'],
    ['Cycles per instruction', 'About 1, good for pipelining', 'Varies, some need many cycles'],
    ['Code size', 'Bigger, more instructions', 'Smaller, fewer instructions'],
    ['Power and chip area', 'Low, fewer transistors', 'Higher, more complex hardware']
  ];

  let currentY = tableTop;
  for (let r = 0; r < tableData.length; r++) {
    const row = tableData[r];
    const isHeader = r === 0;

    // Draw background for header
    if (isHeader) {
      p1.drawRectangle({
        x: margin,
        y: currentY - rowHeight + 4,
        width: contentWidth,
        height: rowHeight,
        color: tableHeaderBg,
      });
    }

    // Horizontal top border
    p1.drawLine({
      start: { x: margin, y: currentY + 4 },
      end: { x: margin + contentWidth, y: currentY + 4 },
      thickness: isHeader ? 1.2 : 0.6,
      color: borderGray,
    });

    // Row text
    const textFont = isHeader ? fontBold : fontRegular;
    const textColor = isHeader ? navy : grayDark;
    const textSize = isHeader ? 9 : 8.5;

    p1.drawText(row[0], { x: margin + 6, y: currentY - 8, size: textSize, font: textFont, color: textColor });
    p1.drawText(row[1], { x: margin + col1W + 6, y: currentY - 8, size: textSize, font: textFont, color: textColor });
    p1.drawText(row[2], { x: margin + col1W + col2W + 6, y: currentY - 8, size: textSize, font: textFont, color: textColor });

    currentY -= rowHeight;
  }
  // Bottom border of table
  p1.drawLine({
    start: { x: margin, y: currentY + 4 },
    end: { x: margin + contentWidth, y: currentY + 4 },
    thickness: 1,
    color: borderGray,
  });

  // Vertical lines
  const vLineYStart = tableTop + 4;
  const vLineYEnd = currentY + 4;
  p1.drawLine({ start: { x: margin, y: vLineYStart }, end: { x: margin, y: vLineYEnd }, thickness: 0.8, color: borderGray });
  p1.drawLine({ start: { x: margin + col1W, y: vLineYStart }, end: { x: margin + col1W, y: vLineYEnd }, thickness: 0.6, color: borderGray });
  p1.drawLine({ start: { x: margin + col1W + col2W, y: vLineYStart }, end: { x: margin + col1W + col2W, y: vLineYEnd }, thickness: 0.6, color: borderGray });
  p1.drawLine({ start: { x: margin + contentWidth, y: vLineYStart }, end: { x: margin + contentWidth, y: vLineYEnd }, thickness: 0.8, color: borderGray });

  y = currentY - 12;

  // Analysis paragraph
  const analysisP = [
    'Looking at the table, it is clear that the two designs go in opposite directions. RISC keeps the hardware',
    'simple and depends on the compiler to build bigger operations out of small instructions. CISC does',
    'the opposite and puts the effort into the hardware so that programs come out shorter. When the device',
    'runs on a battery, the simpler hardware matters more than the shorter code.'
  ];
  for (const line of analysisP) {
    p1.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }
  y -= 8;

  // (b) Example Instruction Sequences
  p1.drawText('(b) Example Instruction Sequences', { x: margin, y: y, size: 11, font: fontBold, color: navy });
  y -= 14;

  p1.drawText('Example 1: A = B + C, with A, B and C stored in memory', { x: margin, y: y, size: 9.5, font: fontBold, color: black });
  y -= 13;

  const ex1Desc = [
    'A CISC machine like the VAX can do this with a single instruction that reads both values from',
    'memory and writes the answer back. A RISC machine can only do arithmetic on registers, so the',
    'values have to be loaded first and the result stored afterwards. That takes four instructions.'
  ];
  for (const line of ex1Desc) {
    p1.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }
  y -= 6;

  // Code block 1
  p1.drawText('CISC:   ADDL3  B, C, A           ; one instruction, memory to memory', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 12;
  p1.drawText('RISC:   LW     t0, B             ; load B into a register', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p1.drawText('        LW     t1, C             ; load C into a register', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p1.drawText('        ADD    t2, t0, t1        ; add the two registers', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p1.drawText('        SW     t2, A             ; store the result in A', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 14;

  const ex1Concl = [
    'So the CISC code is shorter, 1 instruction against 4. But the RISC instructions are all simple and take',
    'about one cycle each, so they flow through the pipeline nicely. The single CISC instruction hides',
    'several memory accesses inside it and can take much longer to finish.'
  ];
  for (const line of ex1Concl) {
    p1.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }

  // Footer for page 1
  p1.drawText('Arun Sharma (UID: 25BAI10030) | Computer Organisation and Architecture', { x: margin, y: 30, size: 8, font: fontRegular, color: grayMuted });
  p1.drawText('Page 1 of 2', { x: 595.28 - margin - 45, y: 30, size: 8, font: fontRegular, color: grayMuted });

  // --- Page 2 of Assignment ---
  let p2 = assignDoc.addPage([595.28, 841.89]);
  y = 800;

  p2.drawText('Example 2: Copying a block of bytes', { x: margin, y: y, size: 9.5, font: fontBold, color: black });
  y -= 13;
  p2.drawText('Here the difference is even easier to see. On x86 one instruction with a repeat prefix copies the whole', { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
  y -= 13;
  p2.drawText('block, but on RISC we have to write the loop ourselves.', { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
  y -= 16;

  // Code block 2
  p2.drawText('CISC (x86):   REP MOVSB                 ; copy CX bytes from [SI] to [DI]', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 14;
  p2.drawText('RISC:  loop:  LB    t0, 0(a1)           ; load one byte from source', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p2.drawText('              SB    t0, 0(a0)           ; store it at destination', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p2.drawText('              ADDI  a0, a0, 1           ; move destination pointer', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p2.drawText('              ADDI  a1, a1, 1           ; move source pointer', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p2.drawText('              ADDI  a2, a2, -1          ; reduce the count', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 11;
  p2.drawText('              BNE   a2, zero, loop      ; repeat until count is zero', { x: margin + 10, y: y, size: 8.5, font: fontMono, color: black });
  y -= 18;

  const ex2Analysis = [
    'The x86 version is much easier to write and read. The RISC loop is longer, but every step in it is basic,',
    'so the processor can run it fast and without spending much power.'
  ];
  for (const line of ex2Analysis) {
    p2.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }
  y -= 16;

  // (c) Processor Recommendation for a Battery-Powered Embedded Device
  p2.drawText('(c) Processor Recommendation for a Battery-Powered Embedded Device', { x: margin, y: y, size: 11, font: fontBold, color: navy });
  y -= 15;

  const recP1 = [
    'For this device I would choose a RISC processor, something like an ARM Cortex-M or a RISC-V',
    'core. The biggest reason is power. A RISC core has simple decoding and fewer transistors, so there is',
    'less switching activity and the battery lasts longer, and battery life is the main requirement here. A',
    'simple core also takes less chip area, costs less to make and gives off less heat, which is useful in a',
    'small embedded product.'
  ];
  for (const line of recP1) {
    p2.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }
  y -= 10;

  const recP2 = [
    'Timing is another point in its favour. Because the instructions are fixed in length and take roughly one',
    'cycle each, it is easy to predict how long a piece of code will run. This is important for jobs like reading',
    'sensors or controlling a motor, where the response has to arrive on time. The regular format also keeps',
    'the pipeline full, so the chip can give decent performance even at a low clock speed, which saves more',
    'power. On top of that, most embedded and mobile chips already use RISC cores, so compilers, tools',
    'and ready-made chips are easy to get.'
  ];
  for (const line of recP2) {
    p2.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }
  y -= 10;

  const recP3 = [
    'CISC would only make sense if code size were the biggest problem, or if the device had to run existing',
    'x86 software. Neither applies here, so in my view RISC is the better balance of low power, low cost',
    'and enough performance for a battery-powered embedded device.'
  ];
  for (const line of recP3) {
    p2.drawText(line, { x: margin, y: y, size: 9.5, font: fontRegular, color: grayDark });
    y -= 13;
  }

  // Footer for page 2
  p2.drawText('Arun Sharma (UID: 25BAI10030) | Computer Organisation and Architecture', { x: margin, y: 30, size: 8, font: fontRegular, color: grayMuted });
  p2.drawText('Page 2 of 2', { x: 595.28 - margin - 45, y: 30, size: 8, font: fontRegular, color: grayMuted });

  // Save Assignment PDF
  const assignBytes = await assignDoc.save();
  const assignPath = path.join(publicAssetsDir, 'Arun_Sharma_RISC_vs_CISC_Assignment.pdf');
  fs.writeFileSync(assignPath, assignBytes);
  console.log(`Saved Assignment PDF to ${assignPath} (pages: ${assignDoc.getPageCount()})`);

  // --- 2. GENERATE CASE STUDY (Exact 3 Pages) ---
  const caseDoc = await PDFDocument.create();
  const cFontBold = await caseDoc.embedFont(StandardFonts.HelveticaBold);
  const cFontRegular = await caseDoc.embedFont(StandardFonts.Helvetica);
  const cFontOblique = await caseDoc.embedFont(StandardFonts.HelveticaOblique);

  // === Case Study Page 1 ===
  let cp1 = caseDoc.addPage([595.28, 841.89]);
  y = 800;

  // Title & Header
  cp1.drawText('Case Study 1: RISC vs. CISC — Choosing a Processor', {
    x: margin,
    y: y,
    size: 15,
    font: cFontBold,
    color: navy,
  });
  y -= 22;

  cp1.drawText('Student Name: Arun Sharma', { x: margin, y: y, size: 9.5, font: cFontBold, color: black });
  y -= 14;
  cp1.drawText('UID: 25BAI10030', { x: margin, y: y, size: 9.5, font: cFontBold, color: black });
  y -= 14;
  cp1.drawText('Class: 25BAI601', { x: margin, y: y, size: 9.5, font: cFontRegular, color: grayDark });
  y -= 14;
  cp1.drawText('Subject: Computer Organisation and Architecture', { x: margin, y: y, size: 9.5, font: cFontRegular, color: grayDark });
  y -= 10;

  cp1.drawLine({ start: { x: margin, y: y }, end: { x: margin + contentWidth, y: y }, thickness: 1, color: borderGray });
  y -= 16;

  // Scenario and Problem
  cp1.drawText('Scenario and Problem', { x: margin, y: y, size: 11, font: cFontBold, color: navy });
  y -= 13;
  const scenLines = [
    'A technology company is working on two computing systems, one based on a RISC architecture and the',
    'other on a CISC architecture. The team has to pick the instruction-set design that fits a low-power',
    'embedded device better. So the task is to compare both architectures and explain which one should be',
    'preferred for this use case.'
  ];
  for (const line of scenLines) {
    cp1.drawText(line, { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
    y -= 12;
  }
  y -= 6;

  // Case Study Questions Answers
  cp1.drawText('Case Study Questions Answers', { x: margin, y: y, size: 11, font: cFontBold, color: navy });
  y -= 14;

  // Question 1
  cp1.drawText('1. What is RISC? What is CISC?', { x: margin, y: y, size: 10, font: cFontBold, color: black });
  y -= 13;

  const q1Intro = [
    'RISC stands for Reduced Instruction Set Computer. The idea behind it is to give the processor only a',
    'small number of simple instructions, and to make each of them quick, ideally one clock cycle. If a',
    'bigger job has to be done, it is just broken into several of these simple instructions. Some points that',
    'usually go with RISC:'
  ];
  for (const line of q1Intro) {
    cp1.drawText(line, { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
    y -= 12;
  }
  y -= 3;

  const riscBullets = [
    '• Only LOAD and STORE instructions are allowed to access memory. Everything else works on registers.',
    '• Instructions have the same length, normally 32 bits.',
    '• There are plenty of general-purpose registers, so the processor does not have to go to memory again and again.',
    '• The control unit is usually hardwired instead of microprogrammed.'
  ];
  for (const line of riscBullets) {
    cp1.drawText(line, { x: margin + 8, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }
  y -= 2;

  cp1.drawText('ARM, RISC-V and MIPS are common examples.', { x: margin, y: y, size: 8.5, font: cFontOblique, color: grayDark });
  y -= 13;

  const ciscIntro = [
    'CISC stands for Complex Instruction Set Computer, and it takes the opposite route. The processor has a',
    'big set of instructions, and one instruction can carry out a whole multi-step operation, for example',
    'fetching a value from memory, adding to it and writing it back. This was originally done to keep programs',
    'short, because memory was costly and small in the early days. Typical features of CISC are:'
  ];
  for (const line of ciscIntro) {
    cp1.drawText(line, { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
    y -= 12;
  }
  y -= 3;

  const ciscBullets = [
    '• A large number of instructions, including special ones for strings and blocks of data.',
    '• Instructions of different lengths, from one byte to several bytes.',
    '• Arithmetic can be done directly on data sitting in memory.',
    '• Complex instructions are handled with microcode inside the control unit.'
  ];
  for (const line of ciscBullets) {
    cp1.drawText(line, { x: margin + 8, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }
  y -= 2;

  cp1.drawText('The Intel x86 family and the old VAX and IBM System/360 machines fall in this category.', { x: margin, y: y, size: 8.5, font: cFontOblique, color: grayDark });
  y -= 12;

  const q1Concl = [
    'To put it simply, RISC keeps the hardware simple and leaves more work to the compiler, while CISC',
    'makes the hardware do more so that programs become shorter.'
  ];
  for (const line of q1Concl) {
    cp1.drawText(line, { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
    y -= 12;
  }

  // Footer page 1
  cp1.drawText('Arun Sharma (UID: 25BAI10030) | COA Case Study: RISC vs. CISC', { x: margin, y: 30, size: 8, font: cFontRegular, color: grayMuted });
  cp1.drawText('Page 1 of 3', { x: 595.28 - margin - 45, y: 30, size: 8, font: cFontRegular, color: grayMuted });

  // === Case Study Page 2 ===
  let cp2 = caseDoc.addPage([595.28, 841.89]);
  y = 800;

  // Question 2
  cp2.drawText('2. Why do many RISC instruction sets use fixed-length instructions?', { x: margin, y: y, size: 10, font: cFontBold, color: black });
  y -= 13;
  cp2.drawText('When all instructions have the same size, say 32 bits, a lot of things in the processor become easier. The main', { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
  y -= 12;
  cp2.drawText('reasons are given below.', { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
  y -= 12;

  const q2Points = [
    ['Fetching is easy', 'The processor already knows that the next instruction starts 4 bytes after the current one, so the program counter only has to add a constant. It does not need to look at the instruction first to find out where it ends.'],
    ['Decoding is fast', 'The opcode and the register fields stay at the same bit positions in every instruction. Because of this the decoder can start reading the registers while it is still figuring out the opcode, and it needs less hardware.'],
    ['Pipelining works better', 'In a pipeline, the fetch stage should keep bringing in a new instruction every cycle. With variable lengths it may have to wait to know how long the current instruction is, which causes gaps. Fixed length avoids that, and it also makes it easier for superscalar processors to look at several instructions together.'],
    ['Memory alignment', 'Aligned 32-bit instructions fit neatly in cache lines, so an instruction never gets split across two blocks.'],
    ['Drawback', 'The downside is that code gets a bit bigger, since even a simple instruction takes the full 32 bits. To reduce this, some designs such as ARM Thumb and the compressed extension of RISC-V also provide a 16-bit format for common instructions.']
  ];

  for (const [title, desc] of q2Points) {
    cp2.drawText(title, { x: margin, y: y, size: 9, font: cFontBold, color: navy });
    y -= 11.5;
    // Word wrap desc
    const words = desc.split(' ');
    let currentLine = '';
    for (const w of words) {
      const testLine = currentLine ? currentLine + ' ' + w : w;
      if (cFontRegular.widthOfTextAtSize(testLine, 8.5) > contentWidth) {
        cp2.drawText(currentLine, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
        y -= 11;
        currentLine = w;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      cp2.drawText(currentLine, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
      y -= 11;
    }
    y -= 3;
  }
  y -= 6;

  // Question 3
  cp2.drawText('3. How does instruction complexity influence instruction decoding?', { x: margin, y: y, size: 10, font: cFontBold, color: black });
  y -= 13;

  const q3P1 = [
    'Decoding is the stage where the control unit reads the instruction and finds out what operation is needed, which',
    'registers are involved and where the operands are. If the instructions are complicated, this stage naturally gets',
    'harder and slower.'
  ];
  for (const line of q3P1) {
    cp2.drawText(line, { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
    y -= 12;
  }
  y -= 4;

  const q3P2 = [
    'With simple instructions there are only a few formats, so the decoder just has to look at a few fixed fields. Such',
    'a decoder can be made using plain hardwired logic, which is quick. With complex instructions the decoder has',
    'to deal with many formats, different lengths and various addressing modes. It must first work out the length of',
    'the instruction and then decode the remaining part. A complex instruction may also need several internal steps,',
    'so the control unit has to generate a whole sequence of signals, and this is normally done with microcode stored',
    'in a control store. Reading from the control store takes extra time, and the bigger decoder also uses more chip',
    'area and more power.'
  ];
  for (const line of q3P2) {
    cp2.drawText(line, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }
  y -= 4;

  const q3P3 = [
    'In RISC, decoding usually fits in a single pipeline stage. In CISC it may need more than one stage. Modern x86',
    'processors actually first convert each complex instruction into smaller micro-operations and then execute those,',
    'which adds one more step. So higher complexity means a slower, larger and more power-consuming decoder, and',
    'this is a big reason why RISC is preferred where energy is limited.'
  ];
  for (const line of q3P3) {
    cp2.drawText(line, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }

  // Footer page 2
  cp2.drawText('Arun Sharma (UID: 25BAI10030) | COA Case Study: RISC vs. CISC', { x: margin, y: 30, size: 8, font: cFontRegular, color: grayMuted });
  cp2.drawText('Page 2 of 3', { x: 595.28 - margin - 45, y: 30, size: 8, font: cFontRegular, color: grayMuted });

  // === Case Study Page 3 ===
  let cp3 = caseDoc.addPage([595.28, 841.89]);
  y = 800;

  // Question 4
  cp3.drawText('4. Compare the typical addressing-mode approaches in RISC and CISC.', { x: margin, y: y, size: 10, font: cFontBold, color: black });
  y -= 13;

  cp3.drawText('An addressing mode is simply the way an instruction specifies where its operand is, whether in a register,', { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
  y -= 12;
  cp3.drawText('inside the instruction itself or at some place in memory.', { x: margin, y: y, size: 9, font: cFontRegular, color: grayDark });
  y -= 12;

  cp3.drawText('In RISC', { x: margin, y: y, size: 9, font: cFontBold, color: navy });
  y -= 11.5;
  const inRiscText = [
    'RISC processors keep the modes to a minimum, mostly register, immediate and base plus offset. Since only',
    'LOAD and STORE use memory, the memory addressing is limited to those two instructions, and all arithmetic is',
    'done between registers. The address calculation is easy and fits in one pipeline stage.'
  ];
  for (const line of inRiscText) {
    cp3.drawText(line, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }
  y -= 4;

  cp3.drawText('In CISC', { x: margin, y: y, size: 9, font: cFontBold, color: navy });
  y -= 11.5;
  const inCiscText = [
    'CISC processors offer many more modes, such as direct, register indirect, indexed, based-indexed and auto-',
    'increment or decrement, and some even allow memory-indirect addressing. As most instructions can read',
    'operands from memory directly, the programs need fewer instructions. However, a few of these modes need',
    'more than one memory access just to get one operand, so execution time is harder to predict and hardware is',
    'more complicated.'
  ];
  for (const line of inCiscText) {
    cp3.drawText(line, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }
  y -= 8;

  // Table Comparison
  cp3.drawText('Comparison Table', { x: margin, y: y, size: 9.5, font: cFontBold, color: navy });
  y -= 12;

  const cTableData = [
    ['Parameter', 'RISC', 'CISC'],
    ['No. of modes', 'Very few, around 3 or 4', 'A lot, often more than 10'],
    ['Typical modes', 'Register, immediate, base + offset', 'Direct, indirect, indexed, auto-increment'],
    ['Memory access', 'Only LOAD and STORE can touch memory', 'Most instructions can use memory operands'],
    ['Address calculation', 'Quick, one simple step', 'Can take several steps and extra memory reads'],
    ['Hardware', 'Simple and easy to pipeline', 'Complicated control logic'],
    ['Code length', 'More instructions needed', 'Fewer instructions needed']
  ];

  let cCurrentY = y;
  const cRowH = 16;
  const cCol1W = 120;
  const cCol2W = 180;
  const cCol3W = 195;

  for (let r = 0; r < cTableData.length; r++) {
    const row = cTableData[r];
    const isHeader = r === 0;

    if (isHeader) {
      cp3.drawRectangle({
        x: margin,
        y: cCurrentY - cRowH + 3,
        width: contentWidth,
        height: cRowH,
        color: tableHeaderBg,
      });
    }

    cp3.drawLine({
      start: { x: margin, y: cCurrentY + 3 },
      end: { x: margin + contentWidth, y: cCurrentY + 3 },
      thickness: isHeader ? 1.2 : 0.6,
      color: borderGray,
    });

    const textFont = isHeader ? cFontBold : cFontRegular;
    const textColor = isHeader ? navy : grayDark;
    const textSize = isHeader ? 8.5 : 8;

    cp3.drawText(row[0], { x: margin + 5, y: cCurrentY - 8, size: textSize, font: textFont, color: textColor });
    cp3.drawText(row[1], { x: margin + cCol1W + 5, y: cCurrentY - 8, size: textSize, font: textFont, color: textColor });
    cp3.drawText(row[2], { x: margin + cCol1W + cCol2W + 5, y: cCurrentY - 8, size: textSize, font: textFont, color: textColor });

    cCurrentY -= cRowH;
  }

  cp3.drawLine({
    start: { x: margin, y: cCurrentY + 3 },
    end: { x: margin + contentWidth, y: cCurrentY + 3 },
    thickness: 1,
    color: borderGray,
  });

  const cVLineStart = y + 3;
  const cVLineEnd = cCurrentY + 3;
  cp3.drawLine({ start: { x: margin, y: cVLineStart }, end: { x: margin, y: cVLineEnd }, thickness: 0.8, color: borderGray });
  cp3.drawLine({ start: { x: margin + cCol1W, y: cVLineStart }, end: { x: margin + cCol1W, y: cVLineEnd }, thickness: 0.6, color: borderGray });
  cp3.drawLine({ start: { x: margin + cCol1W + cCol2W, y: cVLineStart }, end: { x: margin + cCol1W + cCol2W, y: cVLineEnd }, thickness: 0.6, color: borderGray });
  cp3.drawLine({ start: { x: margin + contentWidth, y: cVLineStart }, end: { x: margin + contentWidth, y: cVLineEnd }, thickness: 0.8, color: borderGray });

  y = cCurrentY - 10;

  const addrSummary = [
    'So CISC addressing is more flexible and gives shorter code, whereas RISC addressing is simple, predictable and',
    'easier to make fast. For a low-power device, the simple approach of RISC is better because it needs less hardware.'
  ];
  for (const line of addrSummary) {
    cp3.drawText(line, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }
  y -= 8;

  // Question 5
  cp3.drawText('5. Can a CISC processor outperform a RISC processor? Explain with one reason.', { x: margin, y: y, size: 10, font: cFontBold, color: black });
  y -= 13;

  const q5Lines = [
    'Yes, it can. How fast a processor is depends on many things like the type of program, the compiler, the',
    'fabrication technology and how well the chip is designed, so the instruction set alone does not decide it.',
    'One reason is that a single CISC instruction can replace a long sequence of RISC instructions. For instance,',
    'copying a block of memory on x86 can be done with one instruction, REP MOVSB, but a RISC processor needs',
    'a loop that loads a byte, stores it, updates two pointers, decrements a counter and branches back. In such a',
    'case the CISC processor fetches fewer instructions, uses less instruction-memory bandwidth, and its smaller',
    'code fits better in the instruction cache. The loop overhead is also handled inside the hardware.',
    'It is also worth knowing that modern x86 chips break complex instructions into RISC-like micro-operations',
    'and use deep pipelines, large caches and out-of-order execution. That is one of the reasons they are still very',
    'strong in desktops and servers. For a low-power embedded device, though, the simpler RISC design usually',
    'remains the more sensible choice.'
  ];
  for (const line of q5Lines) {
    cp3.drawText(line, { x: margin, y: y, size: 8.5, font: cFontRegular, color: grayDark });
    y -= 11.5;
  }

  // Footer page 3
  cp3.drawText('Arun Sharma (UID: 25BAI10030) | COA Case Study: RISC vs. CISC', { x: margin, y: 30, size: 8, font: cFontRegular, color: grayMuted });
  cp3.drawText('Page 3 of 3', { x: 595.28 - margin - 45, y: 30, size: 8, font: cFontRegular, color: grayMuted });

  // Save Case Study PDF
  const caseBytes = await caseDoc.save();
  const casePath = path.join(publicAssetsDir, 'Arun_Sharma_RISC_vs_CISC_Case_Study.pdf');
  fs.writeFileSync(casePath, caseBytes);
  console.log(`Saved Case Study PDF to ${casePath} (pages: ${caseDoc.getPageCount()})`);
}

generateCOADocs().catch(console.error);
