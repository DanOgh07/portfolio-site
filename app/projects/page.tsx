import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Macroeconomic Dashboard (Power BI)"
          tools="Power BI, DAX, Excel"
          description="Interactive dashboard analyzing GDP growth, inflation, FX reserves, and oil production."
        />

        <ProjectCard
          title="Loan Default Risk Analysis"
          tools="Python, Excel, Pandas"
          description="Exploratory data analysis to identify factors influencing loan default."
        />
      </div>
    </section>
  );
}
