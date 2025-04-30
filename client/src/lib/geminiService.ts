import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI with the API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// Get a specific model to use
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

// Function to generate a response for symptom analysis
export async function analyzeSymptoms(
  bodyPart: string,
  symptoms: string,
  painLevel: number,
  duration: string
): Promise<string> {
  try {
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

    // Generate content from the prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('Error generating content with Gemini:', error);
    return 'I apologize, but I had difficulty analyzing your symptoms. Please try again or consult with a healthcare professional directly.';
  }
}

// Function to generate a response for general body part information
export async function getBodyPartInformation(bodyPart: string): Promise<string> {
  try {
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

    // Generate content from the prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('Error generating body part information with Gemini:', error);
    return `I apologize, but I had difficulty retrieving information about the ${bodyPart}. Please try again later.`;
  }
}