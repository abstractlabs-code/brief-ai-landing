import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="text-[#7A5AF8] font-medium hover:text-[#6B4CE6] transition-colors mb-8 inline-block"
          >
            ← Back to Blog
          </Link>
          
          <article>
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How This Site is Deployed</h1>
              <div className="text-gray-500">
                January 15, 2024 • By Engineering Team
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-medium">
                Building a modern, scalable, and secure web application requires careful consideration of the deployment architecture. 
                Here's how we've designed our infrastructure to be robust, scalable, and maintainable.
              </p>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Infrastructure as Code with Terraform</h2>
                <p className="text-gray-700 mb-4">
                  We use <strong>HashiCorp Terraform</strong> to define our entire infrastructure as code. This approach provides several key benefits:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Reproducibility</strong>: Our infrastructure can be recreated identically across environments</li>
                  <li><strong>Version Control</strong>: All infrastructure changes are tracked and reviewable</li>
                  <li><strong>Collaboration</strong>: Team members can safely make infrastructure changes through pull requests</li>
                  <li><strong>Disaster Recovery</strong>: We can quickly rebuild our entire stack if needed</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Our Terraform modules define everything from VPC networking to ECS services, ensuring consistency and reducing human error.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cloud Foundation with AWS</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Amazon Web Services (AWS)</strong> serves as our cloud platform, providing the reliable and scalable foundation we need:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Global Infrastructure</strong>: Multiple availability zones ensure high availability</li>
                  <li><strong>Managed Services</strong>: We leverage AWS managed services to reduce operational overhead</li>
                  <li><strong>Security</strong>: Built-in security features and compliance certifications</li>
                  <li><strong>Scalability</strong>: Auto-scaling capabilities handle traffic spikes automatically</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Containerization with Docker</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Docker</strong> containers package our application with all its dependencies, ensuring consistent behavior across environments:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Consistency</strong>: "It works on my machine" becomes "it works everywhere"</li>
                  <li><strong>Isolation</strong>: Applications run in isolated environments</li>
                  <li><strong>Efficiency</strong>: Lightweight containers start quickly and use resources efficiently</li>
                  <li><strong>Portability</strong>: Containers can run on any Docker-compatible platform</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Web Server with Nginx</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Nginx</strong> serves as our high-performance web server and reverse proxy:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>High Performance</strong>: Efficiently handles thousands of concurrent connections</li>
                  <li><strong>Static Asset Serving</strong>: Optimized delivery of CSS, JavaScript, and images</li>
                  <li><strong>Gzip Compression</strong>: Reduces bandwidth usage and improves load times</li>
                  <li><strong>Security Headers</strong>: Implements security best practices out of the box</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Container Orchestration with ECS</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Amazon Elastic Container Service (ECS)</strong> manages our Docker containers in production:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Service Discovery</strong>: Automatic discovery and load balancing of services</li>
                  <li><strong>Health Monitoring</strong>: Automatically replaces unhealthy containers</li>
                  <li><strong>Rolling Deployments</strong>: Zero-downtime deployments with automatic rollback</li>
                  <li><strong>Auto Scaling</strong>: Scales containers based on CPU, memory, or custom metrics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Load Balancing with ALB</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Application Load Balancer (ALB)</strong> distributes incoming traffic across our container instances:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>High Availability</strong>: Traffic is distributed across multiple availability zones</li>
                  <li><strong>Health Checks</strong>: Only healthy instances receive traffic</li>
                  <li><strong>SSL Termination</strong>: Handles SSL/TLS encryption and decryption</li>
                  <li><strong>Path-based Routing</strong>: Routes requests based on URL patterns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">DNS Management with Route 53</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Amazon Route 53</strong> provides reliable DNS services for our domain:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Global DNS Network</strong>: Low-latency DNS responses worldwide</li>
                  <li><strong>Health Checks</strong>: Automatic failover to healthy endpoints</li>
                  <li><strong>Traffic Management</strong>: Geolocation and weighted routing policies</li>
                  <li><strong>Domain Registration</strong>: Centralized domain management</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">SSL/TLS with Certificate Manager</h2>
                <p className="text-gray-700 mb-4">
                  <strong>AWS Certificate Manager</strong> provides and manages our SSL certificates:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Free SSL Certificates</strong>: No cost for certificates used with AWS services</li>
                  <li><strong>Automatic Renewal</strong>: Certificates renew automatically before expiration</li>
                  <li><strong>Easy Integration</strong>: Seamless integration with ALB and CloudFront</li>
                  <li><strong>Strong Encryption</strong>: Modern TLS protocols and cipher suites</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Security with AWS WAF</h2>
                <p className="text-gray-700 mb-4">
                  <strong>AWS Web Application Firewall (WAF)</strong> protects our application from common web threats:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>SQL Injection Protection</strong>: Filters malicious SQL queries before they reach our application</li>
                  <li><strong>Cross-Site Scripting (XSS) Prevention</strong>: Blocks script injection attempts</li>
                  <li><strong>IP Filtering</strong>: Allows or blocks traffic from specific IP addresses or ranges</li>
                  <li><strong>Rate Limiting</strong>: Prevents abuse by limiting requests per IP address</li>
                  <li><strong>Geographic Blocking</strong>: Blocks traffic from specific countries if needed</li>
                  <li><strong>Custom Rules</strong>: Flexible rule engine for specific security requirements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  WAF acts as our first line of defense, filtering malicious traffic before it reaches our application servers. 
                  This significantly reduces the attack surface and protects against the OWASP Top 10 vulnerabilities.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Deployment Pipeline</h2>
                <p className="text-gray-700 mb-4">
                  Our deployment process follows these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                  <li>Code is pushed to our Git repository</li>
                  <li>CI/CD pipeline builds and tests the Docker image</li>
                  <li>Terraform applies any infrastructure changes</li>
                  <li>New container image is deployed to ECS</li>
                  <li>ALB performs health checks on new instances</li>
                  <li>Traffic is gradually shifted to new deployment</li>
                  <li>Old instances are terminated after successful deployment</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Monitoring and Observability</h2>
                <p className="text-gray-700 mb-4">
                  We maintain visibility into our system through:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>CloudWatch Metrics</strong>: Application and infrastructure metrics</li>
                  <li><strong>CloudWatch Logs</strong>: Centralized log aggregation and analysis</li>
                  <li><strong>ALB Access Logs</strong>: Detailed request logging for troubleshooting</li>
                  <li><strong>WAF Logs</strong>: Security event monitoring and alerting</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Benefits of This Architecture</h2>
                <p className="text-gray-700 mb-4">
                  This comprehensive deployment strategy provides:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Scalability</strong>: Automatic scaling based on demand</li>
                  <li><strong>Reliability</strong>: High availability across multiple zones</li>
                  <li><strong>Security</strong>: Multiple layers of protection</li>
                  <li><strong>Maintainability</strong>: Infrastructure as code and automated deployments</li>
                  <li><strong>Performance</strong>: Optimized for speed and efficiency</li>
                  <li><strong>Cost Efficiency</strong>: Pay only for resources used</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Conclusion</h2>
                <p className="text-gray-700 mb-4">
                  Modern web applications require sophisticated deployment architectures to meet user expectations for performance, 
                  security, and reliability. By leveraging these AWS services and best practices, we've built a robust platform 
                  that can scale with our needs while maintaining security and operational excellence.
                </p>
                <p className="text-gray-700">
                  This infrastructure foundation allows our team to focus on building great features rather than worrying about 
                  deployment complexity, server management, or security vulnerabilities.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;