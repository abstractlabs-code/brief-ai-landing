import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Brain, FileText, Shield, MessageSquare, Users, Zap } from 'lucide-react';
import aiProcessingEngine from '@/assets/ai-processing-engine.png';
import meetingProcessFlow from '@/assets/meeting-process-flow.png';
import securityPrivacy from '@/assets/security-privacy.png';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              🚀 How It Works
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground font-medium">
              AI-Powered Meeting Transcription & Summarisation — Built for Modern Teams
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether your team meets on Microsoft Teams, Zoom, Google Meet, or Slack, our tool fits effortlessly into your workflow. Powered by advanced AI and secure AWS cloud services, we help you turn conversations into clear, actionable insights — automatically.
            </p>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                🧠 Step-by-Step: From Recording to Insight
              </h2>
              <img 
                src={meetingProcessFlow} 
                alt="Meeting Process Flow" 
                className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Step 1: Capture */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  1. Capture Your Meeting
                </h3>
                <p className="text-lg mb-4 text-muted-foreground">
                  We make it easy to record and upload your meeting, your way:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Live integration with Zoom, Google Meet, and Microsoft Teams</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Slack bot that joins and records conversations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">File upload (MP3, MP4, WAV, etc.) directly via the web app</span>
                  </li>
                </ul>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-sm text-muted-foreground">
                    🎙️ All audio is securely stored in Amazon S3, with enterprise-grade encryption, versioning, and access controls to keep your data safe.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <MessageSquare className="w-48 h-48 text-primary/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Transcribe */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  2. Transcribe with AI Accuracy
                </h3>
                <p className="text-lg mb-4 text-muted-foreground">
                  We use Amazon Transcribe, AWS's real-time speech recognition engine, to convert your meeting audio into highly accurate text.
                </p>
                <p className="text-lg mb-4 text-muted-foreground font-medium">Key benefits:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Up to 99% accuracy on clear audio</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Supports multiple languages and accents</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Automatically distinguishes between speakers</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  The raw transcription is processed in real time via AWS Lambda and Amazon ECS, and securely stored in S3.
                </p>
              </div>
              <div className="md:order-1 flex justify-center">
                <img 
                  src={aiProcessingEngine} 
                  alt="AI Processing Engine" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Steps 3-6 */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 3 */}
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-primary" />
                  3. Extract Key Moments
                </h3>
                <p className="text-muted-foreground mb-4">
                  Using Amazon SageMaker, our AI models identify the most important points in the conversation:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Key decisions made</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Insights and takeaways</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Agenda shifts and key discussion moments</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  We fine-tune transformer models (e.g., BERT, Claude via Bedrock) to understand real business context — not just generic summaries.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-primary" />
                  4. Detect Action Items Automatically
                </h3>
                <p className="text-muted-foreground mb-4">
                  No more scribbling notes. We automatically highlight:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Tasks and assignments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Who's responsible</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Due dates and deadlines</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  This is powered by a Python pipeline using Amazon Comprehend and Amazon Bedrock, with structured outputs stored in Amazon DynamoDB for easy filtering and export.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary" />
                  5. Smart AI Summaries
                </h3>
                <p className="text-muted-foreground mb-4">
                  Need a quick overview or a detailed breakdown? Choose your summary style:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Executive overview</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Bullet-point recap</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Team-specific highlights</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  We generate summaries using Amazon Bedrock's generative AI, delivering results tailored to your preferences.
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-3 rounded-r-lg mt-4">
                  <p className="text-xs text-muted-foreground">
                    📄 Summaries can be exported as a PDF, shared via Slack or email, or viewed directly in your dashboard — hosted securely on Amazon ECS behind an SSL-secured ALB.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                  <Users className="w-6 h-6 mr-2 text-primary" />
                  6. Instant Delivery & Notifications
                </h3>
                <p className="text-muted-foreground mb-4">
                  Once your meeting is processed:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">📩 Summaries and transcripts are delivered to Slack, email, or as calendar attachments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">📁 Files are archived in S3 with automated lifecycle management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">📊 All results are accessible via your personalized, secure dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                ⚙️ Behind the Scenes: The AWS Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We use the best of AWS to deliver reliable, scalable, and secure performance:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Amazon S3', desc: 'Secure storage for all audio and transcripts' },
                { name: 'Amazon Transcribe', desc: 'High-accuracy speech-to-text engine' },
                { name: 'Amazon Bedrock', desc: 'Generative AI for summaries and insights' },
                { name: 'Amazon Comprehend', desc: 'Natural language understanding' },
                { name: 'Amazon SageMaker', desc: 'Custom model tuning and inference' },
                { name: 'Amazon ECS / Lambda', desc: 'Scalable, serverless backend' },
                { name: 'Amazon DynamoDB', desc: 'Action item storage and retrieval' },
                { name: 'AWS Step Functions & EventBridge', desc: 'Workflow automation' },
                { name: 'ACM + ALB + Route 53', desc: 'Secure HTTPS traffic management and DNS' },
                { name: 'AWS WAF', desc: 'Enterprise-grade security from common web threats' }
              ].map((tech, index) => (
                <div key={index} className="bg-background border border-border p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  🔐 Your Privacy, Guaranteed
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your meeting content stays private — always. We don't train third-party models with your data. Everything is processed in your AWS region using IAM role restrictions, KMS encryption, and VPC private networking to ensure airtight security.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src={securityPrivacy} 
                  alt="Enterprise Security & Privacy" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Platform Integrations */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                🔄 Seamless Integrations
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We work where your team works — with no complicated setup.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Microsoft Teams', desc: 'via Graph API + Bot Framework', emoji: '💼' },
                { name: 'Zoom', desc: 'via Cloud Recordings & Webhooks', emoji: '📹' },
                { name: 'Google Meet', desc: 'via calendar sync or upload', emoji: '🎥' },
                { name: 'Slack', desc: 'via bot SDK + slash commands', emoji: '💬' }
              ].map((platform, index) => (
                <div key={index} className="bg-background border border-border p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{platform.emoji}</div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">✅ {platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;