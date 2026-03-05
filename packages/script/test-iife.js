// Simple test to verify IIFE functionality
console.log('Testing IIFE build...');

// Mock browser environment
global.window = {
  simpleNpsConfig: {
    i18n: {
      en: {
        intro: "Test question?"
      }
    }
  }
};

global.document = {
  getElementById: () => null,
  createElement: (tag) => ({ 
    id: '',
    appendChild: () => {}
  }),
  body: {
    appendChild: () => {}
  }
};

// Load the IIFE file
const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'dist', 'simple-nps.iife.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

try {
  // Execute the IIFE
  eval(scriptContent);
  
  console.log('✓ IIFE executed successfully');
  console.log('✓ window.initSimpleNps available:', typeof global.window.initSimpleNps);
  
  if (typeof global.window.initSimpleNps === 'function') {
    console.log('✅ IIFE build is working correctly!');
    console.log('The initSimpleNps function is available globally.');
  } else {
    console.log('❌ initSimpleNps function is not available on window object');
  }
} catch (error) {
  console.error('❌ Error executing IIFE:', error.message);
}