import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI with the API key
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY || '';
console.log('API Key available:', apiKey ? 'Yes (length ' + apiKey.length + ')' : 'No');
const genAI = new GoogleGenerativeAI(apiKey);

// List of available models to try
const MODEL_NAMES = [
  'gemini-pro',          // Standard model
  'gemini-1.0-pro',      // Equivalent to gemini-pro
  'gemini-pro-latest'    // Latest version
];

// Get a specific model to use, with fallbacks
const modelName = MODEL_NAMES[0]; // Start with first option
console.log('Trying Gemini model:', modelName);
const model = genAI.getGenerativeModel({ model: modelName });

// Function to generate a response for symptom analysis
export async function analyzeSymptoms(
  bodyPart: string,
  symptoms: string,
  painLevel: number,
  duration: string
): Promise<string> {
  // Try each model in sequence if the primary one fails
  for (let i = 0; i < MODEL_NAMES.length; i++) {
    const currentModelName = MODEL_NAMES[i];
    console.log(`Attempt ${i+1}: Trying model '${currentModelName}' for symptom analysis`);
    
    try {
      // Create a model instance with the current model name
      const currentModel = genAI.getGenerativeModel({ model: currentModelName });
      
      // Construct a detailed prompt for the AI
      const prompt = `
        Act as a professional chiropractor and medical expert providing information about potential causes of symptoms. 
        
        Patient information:
        - Body part affected: ${bodyPart}
        - Symptoms described: ${symptoms}
        - Pain level (1-10): ${painLevel}
        - Duration of symptoms: ${duration}
        
        Please provide:
        1. A brief explanation of 2-3 possible conditions that could cause these symptoms (be specific to the body part)
        2. What a chiropractor might be able to do to help with these symptoms
        3. When the patient should consider seeing their primary care doctor instead of a chiropractor
        4. A brief self-care recommendation they could try at home
        
        Format your response in a conversational, helpful tone. Be informative but reassuring.
        Keep your response under 300 words total.
      `;

      console.log('Sending symptom analysis prompt to Gemini API...');
      // Generate content from the prompt
      const result = await currentModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log('Successfully generated symptom analysis with model:', currentModelName);
      return text;
    } catch (error) {
      console.error(`Error with model ${currentModelName}:`, error);
      const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      console.log('Detailed error:', errorMessage);
      
      // Only return error message if we've tried all models
      if (i === MODEL_NAMES.length - 1) {
        return `I apologize, but I had difficulty analyzing your symptoms. Please try again or consult with a healthcare professional directly. (Error: ${errorMessage})`;
      }
      // Otherwise continue to the next model
      console.log(`Trying next model for symptom analysis...`);
    }
  }
  
  // If all models fail (shouldn't reach here due to the return in the catch block)
  return "I'm sorry, all available AI models failed to analyze your symptoms. Please try again later.";
}

// Function to generate a response for general body part information with model fallback
export async function getBodyPartInformation(bodyPart: string): Promise<string> {
  // Try each model in sequence if the primary one fails
  for (let i = 0; i < MODEL_NAMES.length; i++) {
    const currentModelName = MODEL_NAMES[i];
    console.log(`Attempt ${i+1}: Trying model '${currentModelName}' for body part info`);
    
    try {
      // Create a model instance with the current model name
      const currentModel = genAI.getGenerativeModel({ model: currentModelName });
      
      // Construct a prompt for general information about a body part
      const prompt = `
        Act as a professional chiropractor providing educational information about the ${bodyPart}.
        
        Please provide:
        1. A brief anatomical description of the ${bodyPart} (muscles, joints, nerves involved)
        2. Common problems or conditions that chiropractors treat related to this body part
        3. How chiropractic care typically helps with ${bodyPart} issues
        4. One simple stretch or exercise that can help maintain this area's health
        
        Format your response in a conversational, educational tone. Be informative but easy to understand.
        Keep your response under 250 words total.
      `;

      console.log('Sending body part info prompt to Gemini API...');
      // Generate content from the prompt
      const result = await currentModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log('Successfully generated body part info with model:', currentModelName);
      return text;
    } catch (error) {
      console.error(`Error with model ${currentModelName}:`, error);
      const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      console.log('Detailed error:', errorMessage);
      
      // Only return error message if we've tried all models
      if (i === MODEL_NAMES.length - 1) {
        return `I apologize, but I had difficulty retrieving information about the ${bodyPart}. Please try again later. (Error: ${errorMessage})`;
      }
      // Otherwise continue to the next model
      console.log(`Trying next model for body part info...`);
    }
  }
  
  // If all models fail (shouldn't reach here due to the return in the catch block)
  return "I'm sorry, all available AI models failed to retrieve information. Please try again later.";
}