import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowDown, Database, Server, Cloud, Code2, GitBranch, Shield, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { SiGooglecloud, SiDatabricks, SiPython, SiApachespark, SiApachekafka, SiDocker, SiKubernetes, SiTerraform } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
      <div className="fixed inset-0 bg-noise z-50" />
      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-20">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center py-20" id="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="font-mono text-primary text-sm tracking-wider uppercase">System Status: Online</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow">
              Rajat Gupta
            </h1>
            <h2 className="text-2xl md:text-3xl font-mono text-muted-foreground mb-8">
              &gt; Lead Data Engineer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Architecting cloud data platforms, designing scalable ETL pipelines, and migrating enterprise analytics infrastructure. 9 years of precision engineering in high-stakes environments.
            </p>

            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-sm hover:bg-primary/20 transition-colors flex items-center gap-2 terminal-glow"
              >
                Initialize Contact <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 border-t border-border/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">01. Summary</h3>
              <h2 className="text-3xl font-bold mb-6">System Architect</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Expert in designing cloud-based ETL pipelines, scalable architecture, serverless systems, and migrating analytics from on-premises to cloud. 
                </p>
                <p>
                  With 12 total years of experience, including 9 years specializing in data engineering, I build systems that process massive datasets with reliability and speed. Proficient in CI/CD, SDLC, mentoring, and bridging the gap between complex technical requirements and stakeholder objectives.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border p-6 rounded-sm">
                <Cloud className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Cloud Native</h4>
                <p className="text-sm text-muted-foreground">AWS & GCP Certified Professional</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-sm">
                <Database className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Big Data</h4>
                <p className="text-sm text-muted-foreground">Spark, Kafka, dbt, Airflow</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-sm">
                <Server className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Infrastructure</h4>
                <p className="text-sm text-muted-foreground">Terraform, Kubernetes, Docker</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-sm">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Languages</h4>
                <p className="text-sm text-muted-foreground">Python, Java, SQL</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 border-t border-border/50">
          <div className="mb-12">
            <h3 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">02. Tech Stack</h3>
            <h2 className="text-3xl font-bold">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-sm overflow-hidden"
            >
              <div className="border-b border-border bg-muted/30 px-4 py-2 font-mono text-sm flex items-center gap-2">
                <Cloud className="text-primary" /> aws_stack.yml
              </div>
              <div className="p-6 font-mono text-sm space-y-2 text-muted-foreground">
                <p><span className="text-primary">compute:</span> [EC2, Lambda, EMR]</p>
                <p><span className="text-primary">storage:</span> [S3]</p>
                <p><span className="text-primary">database:</span> [RDS, DynamoDB, Redshift]</p>
                <p><span className="text-primary">analytics:</span> [Glue, Kinesis]</p>
                <p><span className="text-primary">ml:</span> [SageMaker]</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-sm overflow-hidden"
            >
              <div className="border-b border-border bg-muted/30 px-4 py-2 font-mono text-sm flex items-center gap-2">
                <SiGooglecloud className="text-primary" /> gcp_stack.yml
              </div>
              <div className="p-6 font-mono text-sm space-y-2 text-muted-foreground">
                <p><span className="text-primary">compute:</span> [Functions, K8s]</p>
                <p><span className="text-primary">database:</span> [BigTable]</p>
                <p><span className="text-primary">analytics:</span> [BigQuery]</p>
                <p><span className="text-primary">processing:</span> [Dataproc, Dataflow]</p>
                <p><span className="text-primary">orchestration:</span> [Composer]</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-sm overflow-hidden"
            >
              <div className="border-b border-border bg-muted/30 px-4 py-2 font-mono text-sm flex items-center gap-2">
                <SiApachespark className="text-primary" /> big_data.yml
              </div>
              <div className="p-6 font-mono text-sm space-y-2 text-muted-foreground">
                <p><span className="text-primary">processing:</span> [Spark, Kafka]</p>
                <p><span className="text-primary">workflow:</span> [Airflow, dbt]</p>
                <p><span className="text-primary">storage:</span> [Hive, HDFS]</p>
                <p><span className="text-primary">platform:</span> [Databricks]</p>
                <p><span className="text-primary">languages:</span> [Python, Java]</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 border-t border-border/50">
          <div className="mb-12">
            <h3 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">03. Experience</h3>
            <h2 className="text-3xl font-bold">Where I Have Worked</h2>
          </div>

          <div className="space-y-12">
            {[
              {
                role: "Lead Data Engineer",
                company: "Publicis Sapient",
                client: "Lloyds Bank Group, London",
                stack: ["Python", "BigQuery", "Cloud Composer", "Kubernetes", "Dataflow", "dbt"],
                details: "Designed scalable data models in BigQuery with dbt; led architecture for data ingestion pipelines, transformation workflows, and reporting layers."
              },
              {
                role: "Module Lead",
                company: "NSE-IT",
                client: "National Stock Exchange",
                stack: ["Spark", "Python", "BigQuery", "Databricks", "Terraform", "Jenkins"],
                details: "Led architecture and development of a new financial data lake on GCP with reusable components and full CI/CD automation."
              },
              {
                role: "Software Engineer",
                company: "NatWest Group / RBS",
                client: "AWS Data Lake",
                stack: ["PySpark", "AWS Glue", "Redshift", "Lambda", "Airflow", "Terraform"],
                details: "Built AWS Data Lake infrastructure and ETL pipelines migrating data from RDBMS sources to S3 with full orchestration."
              },
              {
                role: "Senior Big Data Developer",
                company: "ZS Associates",
                client: "Amgen, USA",
                stack: ["PySpark", "AWS Glue", "Redshift", "Databricks", "Airflow"],
                details: "Led requirements gathering, design, and implementation of ETL pipelines on AWS Cloud; tuned PySpark performance and set up Redshift data warehouse."
              },
              {
                role: "Assistant Engineer",
                company: "Ericsson",
                client: "U Mobile, MBNL, Airtel",
                stack: ["PySpark", "Sqoop", "Hive", "HDFS", "Python"],
                details: "Built KPI dashboards and data lake pipelines for telecom clients across Malaysia, UK, and India."
              }
            ].map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-border hover:border-primary/50 transition-colors group"
              >
                <div className="absolute w-3 h-3 bg-background border border-primary rounded-full -left-[6.5px] top-1.5 group-hover:bg-primary transition-colors"></div>
                
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-foreground">{job.role} <span className="text-primary">@ {job.company}</span></h4>
                </div>
                
                <p className="text-muted-foreground font-mono text-sm mb-4">Client: {job.client}</p>
                
                <p className="text-muted-foreground mb-4">{job.details}</p>
                
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech, j) => (
                    <span key={j} className="text-xs font-mono text-primary/80 border border-primary/20 px-2 py-1 rounded-sm bg-primary/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-24 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">04. Certifications</h3>
              <h2 className="text-3xl font-bold mb-8">Verified Credentials</h2>
              
              <div className="space-y-4">
                {[
                  { name: "GCP Professional Data Engineer", date: "Valid Mar 2026 – Mar 2028", icon: SiGooglecloud },
                  { name: "GCP Associate Cloud Engineer", date: "Valid Oct 2024 – Oct 2027", icon: SiGooglecloud },
                  { name: "AWS Solutions Architect Associate", date: "Aug 2023", icon: Cloud },
                  { name: "Databricks Data Engineer Associate", date: "Jan 2023", icon: SiDatabricks }
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 border border-border bg-card rounded-sm hover:border-primary/50 transition-colors"
                  >
                    <cert.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-bold">{cert.name}</h4>
                      <p className="text-xs font-mono text-muted-foreground">{cert.date}</p>
                    </div>
                  </motion.div>
                ))}

                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-4 border border-border bg-card rounded-sm"
                  >
                    <h4 className="font-bold flex items-center gap-2 mb-2"><Shield className="w-4 h-4 text-primary" /> Google Scholar Recognition</h4>
                    <p className="text-sm text-muted-foreground mb-1">Open-source work (Scilab Consortium / INRIA France)</p>
                    <p className="text-xs font-mono text-muted-foreground">Published 2 documents on scilab.in under Ministry of HRD</p>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">05. Education</h3>
              <h2 className="text-3xl font-bold mb-8">Academic Core</h2>

              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-border"
                >
                  <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4.5px] top-2"></div>
                  <h4 className="text-lg font-bold">PGD Data Science</h4>
                  <p className="text-primary font-mono text-sm mb-2">IIIT Bangalore</p>
                  <p className="text-sm text-muted-foreground">GPA: 3.51/4.0</p>
                  <p className="text-sm text-muted-foreground">80% scholarship from NGO Swades Foundation</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-border"
                >
                  <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4.5px] top-2"></div>
                  <h4 className="text-lg font-bold">PGD Advanced Computing</h4>
                  <p className="text-primary font-mono text-sm mb-2">CDAC Noida</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-border"
                >
                  <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4.5px] top-2"></div>
                  <h4 className="text-lg font-bold">B.Tech Electronics & Telecommunication</h4>
                  <p className="text-primary font-mono text-sm mb-2">Amity University</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-border/50 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">06. What's Next</h3>
            <h2 className="text-4xl font-bold mb-6">Initialize Connection</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Currently based in New Delhi, India. Open for discussions regarding data architecture, cloud migrations, and lead engineering roles. 
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:rg.rajatgupta@gmail.com"
                className="flex items-center gap-3 px-6 py-3 border border-border hover:border-primary/50 bg-card hover:bg-card/80 transition-colors rounded-sm w-full md:w-auto"
              >
                <Mail className="text-primary w-5 h-5" />
                <span className="font-mono text-sm">rg.rajatgupta@gmail.com</span>
              </a>
              <a 
                href="tel:+919999917671"
                className="flex items-center gap-3 px-6 py-3 border border-border hover:border-primary/50 bg-card hover:bg-card/80 transition-colors rounded-sm w-full md:w-auto"
              >
                <Phone className="text-primary w-5 h-5" />
                <span className="font-mono text-sm">+91-9999917671</span>
              </a>
            </div>
          </motion.div>
        </section>
        
      </main>
      
      <footer className="py-8 border-t border-border/50 text-center text-muted-foreground font-mono text-xs">
        <p>Built with React & Tailwind. Hosted in the Cloud.</p>
        <p className="mt-2 text-primary/50">© {new Date().getFullYear()} Rajat Gupta. System nominal.</p>
      </footer>
    </div>
  );
}
