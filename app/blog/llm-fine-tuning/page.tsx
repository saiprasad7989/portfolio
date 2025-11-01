"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Database,
  FileJson,
  Zap,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartContainer } from "@/app/components/ui/chart";

const fadeIn = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
};

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description:
      "Curated 15K+ training examples from HuggingFace Datasets with domain-specific focus",
    details: [
      "HuggingFace Datasets integration",
      "Domain-specific filtering",
      "Quality validation",
    ],
  },
  {
    icon: FileJson,
    title: "Preprocessing",
    description:
      "Built custom preprocessing pipeline ensuring data quality and proper JSONL formatting",
    details: [
      "Text normalization",
      "Format validation",
      "Train/validation split",
    ],
  },
  {
    icon: Zap,
    title: "Fine-Tuning",
    description:
      "Trained GPT-4.1-mini using OpenAI Platform with optimized hyperparameters",
    details: [
      "Learning rate tuning",
      "Batch size optimization",
      "Multiple training runs",
    ],
  },
  {
    icon: BarChart3,
    title: "Evaluation",
    description:
      "Implemented automated evaluation framework with BLEU, ROUGE, and custom metrics",
    details: [
      "Automated benchmarking",
      "Metric tracking",
      "Performance analysis",
    ],
  },
];

const metrics = [
  { label: "Accuracy Improvement", value: "40%", icon: TrendingUp },
  { label: "Hallucination Reduction", value: "60%", icon: CheckCircle2 },
  { label: "Training Examples", value: "15K+", icon: Database },
];

const trainingData = [
  { epoch: 0, loss: 2.45, valLoss: 2.48 },
  { epoch: 0.5, loss: 1.82, valLoss: 1.89 },
  { epoch: 1, loss: 1.35, valLoss: 1.42 },
  { epoch: 1.5, loss: 0.98, valLoss: 1.08 },
  { epoch: 2, loss: 0.72, valLoss: 0.85 },
  { epoch: 2.5, loss: 0.58, valLoss: 0.71 },
  { epoch: 3, loss: 0.48, valLoss: 0.65 },
];

const performanceData = [
  { metric: "Task Accuracy", base: 62, finetuned: 87 },
  { metric: "BLEU Score", base: 45, finetuned: 71 },
  { metric: "ROUGE-L", base: 52, finetuned: 78 },
  { metric: "Factual Accuracy", base: 68, finetuned: 94 },
];

const evaluationData = [
  { name: "BLEU", score: 71 },
  { name: "ROUGE-1", score: 82 },
  { name: "ROUGE-L", score: 78 },
  { name: "Task Accuracy", score: 87 },
  { name: "Factual", score: 94 },
  { name: "Coherence", score: 89 },
];

export default function LLMFineTuningBlog() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-[680px] px-5 pt-16 sm:px-6 md:px-8 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="mb-8 md:mb-12"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[13px] text-gray-light transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            Back
          </Link>
        </motion.div>

        <motion.header
          className="mb-12 md:mb-16"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <motion.div
            className="mb-4 flex flex-wrap gap-2 md:mb-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="rounded-md bg-secondary px-3 py-1.5 text-[12px] font-medium text-gray md:text-[13px]">
              ML Engineering
            </span>
            <span className="rounded-md bg-secondary px-3 py-1.5 text-[12px] font-medium text-gray md:text-[13px]">
              LLM Fine-Tuning
            </span>
          </motion.div>
          <motion.h1
            className="mb-5 text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] text-foreground sm:text-[40px] md:mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Building a Production-Ready LLM Fine-Tuning Pipeline
          </motion.h1>
          <motion.p
            className="text-[15px] leading-[1.7] text-gray md:text-[16px]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            How I built an end-to-end fine-tuning pipeline for GPT-4.1-mini that
            achieved 40% improvement in task-specific accuracy and 60% reduction
            in hallucinations.
          </motion.p>
        </motion.header>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <h2 className="mb-8 text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground md:mb-10 md:text-[24px]">
            Overview
          </h2>
          <div className="space-y-5 text-[15px] leading-[1.8] text-gray md:space-y-6">
            <p>
              Fine-tuning large language models for domain-specific tasks is
              challenging. You need high-quality data, robust preprocessing,
              careful hyperparameter tuning, and comprehensive evaluation. This
              article walks through how I built a complete pipeline that handles
              all of these challenges.
            </p>
            <p>
              The goal was to create a repeatable, production-ready system that
              could fine-tune GPT-4.1-mini on domain-specific datasets while
              maintaining quality and measurable performance improvements. The
              result was a 40% boost in accuracy and 60% fewer hallucinations
              compared to the base model.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          <h2 className="mb-8 text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground md:mb-10 md:text-[24px]">
            Pipeline Architecture
          </h2>

          <div className="space-y-4 md:space-y-5">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={item}
                className="group relative rounded-lg border border-border bg-secondary/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-gray-light hover:bg-secondary/80 md:rounded-xl md:p-7"
              >
                <div className="mb-4 flex items-start gap-4 md:mb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background transition-colors duration-200 group-hover:border-gray-light md:h-12 md:w-12">
                    <step.icon className="h-5 w-5 text-gray-light md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-baseline gap-3">
                      <span className="text-[11px] font-medium tabular-nums text-gray-light md:text-[12px]">
                        STEP {idx + 1}
                      </span>
                    </div>
                    <h3 className="mb-2 text-[16px] font-semibold leading-[1.3] text-foreground md:mb-3 md:text-[18px]">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-[14px] leading-[1.7] text-gray md:text-[15px]">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-[13px] text-gray-light md:text-[14px]"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-light" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={item}
            className="mt-6 rounded-lg border border-border bg-background p-5 md:mt-8 md:rounded-xl md:p-6"
          >
            <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-[0.02em] text-gray-light md:mb-5">
              Key Results
            </h3>
            <div className="grid gap-5 sm:grid-cols-3 md:gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <metric.icon className="h-4 w-4 text-gray-light" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.02em] text-gray-light md:text-[12px]">
                      {metric.label}
                    </span>
                  </div>
                  <span className="text-[28px] font-semibold tabular-nums leading-[1.2] tracking-[-0.02em] text-foreground md:text-[32px]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <h2 className="mb-8 text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground md:mb-10 md:text-[24px]">
            Deep Dive
          </h2>

          <div className="space-y-8 md:space-y-10">
            <div>
              <h3 className="mb-4 text-[16px] font-semibold leading-[1.3] text-foreground md:mb-5 md:text-[18px]">
                1. Data Collection & Curation
              </h3>
              <div className="space-y-4 text-[15px] leading-[1.8] text-gray md:space-y-5">
                <p>
                  The foundation of any successful fine-tuning project is
                  high-quality data. I leveraged HuggingFace Datasets to access
                  domain-specific datasets, then built custom filters to ensure
                  relevance and quality.
                </p>
                <p>
                  The challenge wasn&apos;t just collecting data—it was ensuring
                  that each example was properly structured, relevant to the
                  domain, and free from noise. I implemented multi-stage
                  filtering that checked for completeness, coherence, and domain
                  alignment.
                </p>
                <div className="rounded-lg border border-border bg-secondary/30 p-5 md:rounded-xl md:p-6">
                  <p className="text-[14px] leading-[1.7] text-gray-light">
                    <span className="font-medium text-gray">Key Insight:</span>{" "}
                    Quality over quantity. 15,000 high-quality examples
                    outperformed 50,000 noisy examples in early experiments.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[16px] font-semibold leading-[1.3] text-foreground md:mb-5 md:text-[18px]">
                2. Preprocessing Pipeline
              </h3>
              <div className="space-y-4 text-[15px] leading-[1.8] text-gray md:space-y-5">
                <p>
                  OpenAI&apos;s fine-tuning API requires data in a specific
                  JSONL format. Each line contains a JSON object with messages
                  in the chat format. I built a preprocessing pipeline using
                  Python and Pandas that:
                </p>
                <ul className="space-y-2 pl-5">
                  <li className="before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                    Normalized text encoding and removed special characters
                  </li>
                  <li className="before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                    Validated message structure and token counts
                  </li>
                  <li className="before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                    Split data into training (80%) and validation (20%) sets
                  </li>
                  <li className="before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                    Generated quality metrics and statistics for each batch
                  </li>
                </ul>
                <p>
                  This preprocessing layer was crucial for maintaining
                  consistency and catching issues before expensive training
                  runs.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[16px] font-semibold leading-[1.3] text-foreground md:mb-5 md:text-[18px]">
                3. Fine-Tuning Process
              </h3>
              <div className="space-y-4 text-[15px] leading-[1.8] text-gray md:space-y-5">
                <p>
                  Using the OpenAI Platform, I ran multiple training iterations
                  with different hyperparameters. The key was finding the right
                  balance between learning rate, batch size, and number of
                  epochs.
                </p>
                <p>
                  I tracked each run using Weights & Biases, monitoring training
                  loss, validation loss, and early stopping conditions. This
                  systematic approach helped identify the optimal configuration
                  without overfitting.
                </p>
                <div className="rounded-lg border border-border bg-secondary/30 p-5 md:rounded-xl md:p-6">
                  <div className="space-y-3">
                    <p className="text-[13px] font-medium uppercase tracking-[0.02em] text-gray-light">
                      Optimal Configuration
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex justify-between gap-2 text-[14px]">
                        <span className="text-gray-light">Learning Rate:</span>
                        <span className="font-mono tabular-nums text-gray">
                          2e-5
                        </span>
                      </div>
                      <div className="flex justify-between gap-2 text-[14px]">
                        <span className="text-gray-light">Batch Size:</span>
                        <span className="font-mono tabular-nums text-gray">
                          8
                        </span>
                      </div>
                      <div className="flex justify-between gap-2 text-[14px]">
                        <span className="text-gray-light">Epochs:</span>
                        <span className="font-mono tabular-nums text-gray">
                          3
                        </span>
                      </div>
                      <div className="flex justify-between gap-2 text-[14px]">
                        <span className="text-gray-light">Warmup Steps:</span>
                        <span className="font-mono tabular-nums text-gray">
                          100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background p-5 md:rounded-xl md:p-6">
                  <h4 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.02em] text-gray-light md:mb-6">
                    Training & Validation Loss
                  </h4>
                  <ChartContainer className="h-[300px] w-full md:h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trainingData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="var(--border)"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="epoch"
                          stroke="var(--gray-light)"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          label={{
                            value: "Epoch",
                            position: "insideBottom",
                            offset: -5,
                            style: {
                              fill: "var(--gray-light)",
                              fontSize: 12,
                            },
                          }}
                        />
                        <YAxis
                          stroke="var(--gray-light)"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          label={{
                            value: "Loss",
                            angle: -90,
                            position: "insideLeft",
                            style: {
                              fill: "var(--gray-light)",
                              fontSize: 12,
                            },
                          }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            fontSize: "13px",
                          }}
                          labelStyle={{ color: "var(--foreground)" }}
                        />
                        <Legend
                          wrapperStyle={{
                            fontSize: "13px",
                            paddingTop: "20px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="loss"
                          name="Training Loss"
                          stroke="#0070f3"
                          strokeWidth={2}
                          dot={{ fill: "#0070f3", r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="valLoss"
                          name="Validation Loss"
                          stroke="#7928ca"
                          strokeWidth={2}
                          dot={{ fill: "#7928ca", r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <p className="mt-5 text-[13px] leading-[1.7] text-gray-light md:text-[14px]">
                    The model converged smoothly over 3 epochs with minimal
                    overfitting, as shown by the close tracking of training and
                    validation loss.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[16px] font-semibold leading-[1.3] text-foreground md:mb-5 md:text-[18px]">
                4. Evaluation Framework
              </h3>
              <div className="space-y-4 text-[15px] leading-[1.8] text-gray md:space-y-5">
                <p>
                  Measuring improvement required a comprehensive evaluation
                  framework. I implemented automated benchmarking using:
                </p>
                <ul className="space-y-2 pl-5">
                  <li className="before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                    <span className="font-medium text-gray">BLEU & ROUGE:</span>{" "}
                    Standard metrics for text generation quality
                  </li>
                  <li className="before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                    <span className="font-medium text-gray">
                      Custom Domain Metrics:
                    </span>{" "}
                    Task-specific accuracy measurements
                  </li>
                  <li className="before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                    <span className="font-medium text-gray">
                      Hallucination Detection:
                    </span>{" "}
                    Automated fact-checking against ground truth
                  </li>
                </ul>
                <p>
                  This multi-metric approach provided a holistic view of model
                  performance and helped identify specific areas for
                  improvement.
                </p>

                <div className="rounded-lg border border-border bg-background p-5 md:rounded-xl md:p-6">
                  <h4 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.02em] text-gray-light md:mb-6">
                    Base vs Fine-Tuned Performance
                  </h4>
                  <ChartContainer className="h-[300px] w-full md:h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="var(--border)"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="metric"
                          stroke="var(--gray-light)"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          interval={0}
                          angle={-20}
                          textAnchor="end"
                          height={60}
                        />
                        <YAxis
                          stroke="var(--gray-light)"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          label={{
                            value: "Score",
                            angle: -90,
                            position: "insideLeft",
                            style: {
                              fill: "var(--gray-light)",
                              fontSize: 12,
                            },
                          }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            fontSize: "13px",
                          }}
                          labelStyle={{ color: "var(--foreground)" }}
                        />
                        <Legend
                          wrapperStyle={{
                            fontSize: "13px",
                            paddingTop: "10px",
                          }}
                        />
                        <Bar
                          dataKey="base"
                          name="Base Model"
                          fill="#666666"
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar
                          dataKey="finetuned"
                          name="Fine-Tuned Model"
                          fill="#0070f3"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <p className="mt-5 text-[13px] leading-[1.7] text-gray-light md:text-[14px]">
                    Consistent improvement across all metrics, with particularly
                    strong gains in task-specific accuracy and factual correctness.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-background p-5 md:rounded-xl md:p-6">
                  <h4 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.02em] text-gray-light md:mb-6">
                    Final Model Evaluation Metrics
                  </h4>
                  <ChartContainer className="h-[280px] w-full md:h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={evaluationData}>
                        <defs>
                          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0070f3" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0070f3" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="var(--border)"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="name"
                          stroke="var(--gray-light)"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke="var(--gray-light)"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          domain={[0, 100]}
                          label={{
                            value: "Score",
                            angle: -90,
                            position: "insideLeft",
                            style: {
                              fill: "var(--gray-light)",
                              fontSize: 12,
                            },
                          }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            fontSize: "13px",
                          }}
                          labelStyle={{ color: "var(--foreground)" }}
                        />
                        <Area
                          type="monotone"
                          dataKey="score"
                          stroke="#0070f3"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorScore)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <p className="mt-5 text-[13px] leading-[1.7] text-gray-light md:text-[14px]">
                    All evaluation metrics exceeded 70%, with factual accuracy
                    reaching 94%, demonstrating strong performance across the board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <h2 className="mb-8 text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground md:mb-10 md:text-[24px]">
            Lessons Learned
          </h2>
          <div className="space-y-5 text-[15px] leading-[1.8] text-gray md:space-y-6">
            <p>
              <span className="font-medium text-foreground">
                Data quality trumps everything.
              </span>{" "}
              Investing time upfront in curation and preprocessing paid massive
              dividends. A smaller, high-quality dataset consistently
              outperformed larger, noisier alternatives.
            </p>
            <p>
              <span className="font-medium text-foreground">
                Systematic experimentation is crucial.
              </span>{" "}
              Tracking every hyperparameter, metric, and decision made it
              possible to iterate quickly and understand what actually moved the
              needle.
            </p>
            <p>
              <span className="font-medium text-foreground">
                Evaluation drives improvement.
              </span>{" "}
              Without comprehensive metrics, it&apos;s impossible to know if
              changes are helping or hurting. The automated evaluation framework
              made it easy to test hypotheses and validate improvements.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <h2 className="mb-8 text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground md:mb-10 md:text-[24px]">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "OpenAI API",
              "HuggingFace Datasets",
              "Python",
              "Pandas",
              "Weights & Biases",
              "JSONL",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-secondary/30 px-3 py-2 text-[13px] font-medium text-gray backdrop-blur-sm md:px-4 md:py-2.5 md:text-[14px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.footer
          className="border-t border-border pb-8 pt-6 md:pb-10 md:pt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[13px] text-gray-light transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.footer>
      </main>
    </div>
  );
}
